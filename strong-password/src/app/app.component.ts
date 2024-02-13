import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PasswordInputComponent} from "./password-input/password-input.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordInputComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public readonly formGroupPassword = new FormGroup({
    password: new FormControl(),
  })

  ngOnInit(): void {
    this.formGroupPassword.valueChanges.subscribe({
      next: values => {
        console.log(values)
      }
    })

  }

  confirmSuccess(isSuccess: boolean): void {
    if(isSuccess) {
      console.log('password has confirmed')
    }else{
      console.log('password has not confirmed')
    }
  }
}
