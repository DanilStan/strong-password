import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule} from "@angular/forms";
import {combineLatest, map, Observable, startWith, Subscription} from "rxjs";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";

enum Reliability {
  NOT_INIT='notInit',
  HIGH='high',
  MIDDLE='middle',
  LOW='low',
  SHORT='short',
}

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgIf,
    NgClass
  ],

  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss'
})
export class PasswordInputComponent implements ControlValueAccessor, OnInit, OnDestroy {

  @Input() inputType: InputType = InputType.PASSWORD;
  @Input() confirmPassword = false;
  @Output() confirmSuccess = new EventEmitter();

  protected readonly reliability = Reliability;
public readonly formControlPassword = new FormControl();
public readonly formControlConfirmPassword = new FormControl();

public reliability$: Observable<Reliability>
public isConfirm$: Observable<Reliability>
private readonly subscription = new Subscription();

  constructor(public ngControl: NgControl) {
    // Use the `ngControl` to access the related form control.
    // The `NG_VALUE_ACCESSOR` provider was removed from the component, as it is assigned here directly.
    ngControl.valueAccessor = this;
  }

ngOnInit(): void {
  this.subscription.add(
    this.formControlPassword.valueChanges.subscribe({
      next: value => {
       this.onChange(value);
      }
    })
  );

  this.reliability$ = this.formControlPassword.valueChanges.pipe(startWith(this.formControlPassword.value || ''), map(value => {
    const passwordLength = value.toString().trim().length;

    if(!passwordLength) {
      return Reliability.NOT_INIT;
    }

    if(passwordLength < 8 && passwordLength >= 1) {
    return Reliability.SHORT;
    }

    const regexLow = /^(?:[a-zA-Z]+|\d+|[\W_]+)$/;
    const regexMiddle =  /^(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[\W_])|(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]+$/;
    const regexHigh = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]+$/;

    if (regexHigh.test(value)) {
      return Reliability.HIGH;
    } else if(regexMiddle.test(value)){
  return Reliability.MIDDLE;
}else if (regexLow.test(value)){
  return Reliability.LOW;
}

return Reliability.NOT_INIT;
  }))

  this.isConfirm$ = combineLatest([this.formControlConfirmPassword.valueChanges, this.formControlPassword.valueChanges]).pipe(
    map(([confirm, password]) => {
      if(!confirm.length) {
        this.confirmSuccess.next(false)
        return Reliability.NOT_INIT;
      }
      if(confirm === password) {
        this.confirmSuccess.next(true)
        return Reliability.HIGH;
      }else {
        this.confirmSuccess.next(false)
        return Reliability.LOW;
      }
    })
  );
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

  /** Triggered by Angular when the form changed outside the current class.
*/
  public writeValue(value: string): void {
this.formControlPassword.setValue(value);
  }

  /**
   * Triggered by Angular when the class is initialized.
   * Provide function to make Angular able to overwrite local `onChange` function with its own.
   */
  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }


  /**
   * Triggered by Angular when the class is initialized.
   * Provide function to make Angular able to overwrite local `onTouched` function with its own.
   */
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }


  /**
   * Define function to implement ControlValueAccessor interface.
   * It will be overwritten by Angular when the class is initialized.
   */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onChange = (value: string) => null;


  /**
   * Define function to implement ControlValueAccessor interface.
   * It will be overwritten by Angular when the class is initialized.
   */
  private onTouched = () => null;

}
