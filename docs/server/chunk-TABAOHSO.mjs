import './polyfills.server.mjs';
import{$ as Ne,A as y,B as E,C as k,D as G,E as Fe,F,G as R,H as re,I,J as j,K as oe,L as se,M as Ie,N as ae,O as le,V as Se,W as ue,Y as Oe,Z as xe,_ as Pe,a as De,aa as Te,b as be,c as A,d as Me,da as ke,e as Ae,f as we,g as x,h as w,i as Q,j as v,ja as Ge,k as g,l as P,m as ee,n as h,o as N,p as Ee,q as te,r as ie,s as d,t as s,u as m,v as _,w as T,x as l,y as ne,z as C}from"./chunk-UDO76BQE.mjs";import{a as p,b as V}from"./chunk-VVCT4QZE.mjs";var We=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(ie),s(te))},e.\u0275dir=h({type:e});let t=e;return t})(),gt=(()=>{let e=class e extends We{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Ee(e)))(o||e)}})(),e.\u0275dir=h({type:e,features:[_]});let t=e;return t})(),he=new v("");var mt={provide:he,useExisting:w(()=>X),multi:!0};function _t(){let t=ue()?ue().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var yt=new v(""),X=(()=>{let e=class e extends We{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!_t())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(ie),s(te),s(yt,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&F("input",function(u){return o._handleInput(u.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(u){return o._compositionEnd(u.target.value)})},features:[I([mt]),_]});let t=e;return t})();var fe=new v(""),pe=new v("");function $e(t){return t!=null}function qe(t){return Fe(t)?be(t):t}function ze(t){let e={};return t.forEach(n=>{e=n!=null?p(p({},e),n):e}),Object.keys(e).length===0?null:e}function Ze(t,e){return e.map(n=>n(t))}function vt(t){return!t.validate}function Xe(t){return t.map(e=>vt(e)?e:n=>e.validate(n))}function Ct(t){if(!t)return null;let e=t.filter($e);return e.length==0?null:function(n){return ze(Ze(n,e))}}function Ye(t){return t!=null?Ct(Xe(t)):null}function Vt(t){if(!t)return null;let e=t.filter($e);return e.length==0?null:function(n){let i=Ze(n,e).map(qe);return Ae(i).pipe(A(ze))}}function Ke(t){return t!=null?Vt(Xe(t)):null}function Re(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Je(t){return t._rawValidators}function Qe(t){return t._rawAsyncValidators}function de(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function je(t,e){let n=de(e);return de(t).forEach(r=>{B(n,r)||n.push(r)}),n}function He(t,e){return de(e).filter(n=>!B(t,n))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ye(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},b=class extends U{get formDirective(){return null}get path(){return null}},f=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},yi=V(p({},Dt),{"[class.ng-submitted]":"isSubmitted"}),Y=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(f,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ne("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[_]});let t=e;return t})(),et=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(b,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ne("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[_]});let t=e;return t})();var S="VALID",H="INVALID",D="PENDING",O="DISABLED";function tt(t){return(K(t)?t.validators:t)||null}function bt(t){return Array.isArray(t)?Ye(t):t||null}function it(t,e){return(K(e)?e.asyncValidators:t)||null}function Mt(t){return Array.isArray(t)?Ke(t):t||null}function K(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function At(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new x(1e3,"");if(!i[n])throw new x(1001,"")}function wt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new x(1002,"")})}var W=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===H}get pending(){return this.status==D}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(je(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(He(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(i=>{i.disable(V(p({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(p({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(i=>{i.enable(V(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(V(p({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===D)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;let n=qe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new m,this.statusChanges=new m}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(H)?H:S}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){K(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=bt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Mt(this._rawAsyncValidators)}},$=class extends W{constructor(e,n,i){super(tt(n),it(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){wt(this,!0,e),Object.keys(e).forEach(i=>{At(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ge=new v("CallSetDisabledState",{providedIn:"root",factory:()=>me}),me="always";function Et(t,e){return[...e.path,t]}function ce(t,e,n=me){_e(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),It(t,e),Ot(t,e),St(t,e),Ft(t,e)}function q(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Z(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function z(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Ft(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function _e(t,e){let n=Je(t);e.validator!==null?t.setValidators(Re(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Qe(t);e.asyncValidator!==null?t.setAsyncValidators(Re(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();z(e._rawValidators,r),z(e._rawAsyncValidators,r)}function Z(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Je(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=Qe(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return z(e._rawValidators,i),z(e._rawAsyncValidators,i),n}function It(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&nt(t,e)})}function St(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&nt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function nt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ot(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function xt(t,e){t==null,_e(t,e)}function Pt(t,e){return Z(t,e)}function rt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Nt(t){return Object.getPrototypeOf(t.constructor)===gt}function Tt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ot(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===X?n=o:Nt(o)?i=o:r=o}),r||i||n||null}function kt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Be(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ue(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var M=class extends W{constructor(e=null,n,i){super(tt(n),it(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),K(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Gt=t=>t instanceof M;var st=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var ye=new v(""),Rt={provide:f,useExisting:w(()=>ve)},ve=(()=>{let e=class e extends f{set isDisabled(i){}constructor(i,r,o,a,u){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=u,this.update=new m,this._ngModelWarningSent=!1,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=ot(this,o)}ngOnChanges(i){if(this._isControlChanged(i)){let r=i.form.previousValue;r&&q(r,this,!1),ce(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}rt(i,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&q(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_isControlChanged(i){return i.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(s(fe,10),s(pe,10),s(he,10),s(ye,8),s(ge,8))},e.\u0275dir=h({type:e,selectors:[["","formControl",""]],inputs:{form:[g.None,"formControl","form"],isDisabled:[g.None,"disabled","isDisabled"],model:[g.None,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[I([Rt]),_,N]});let t=e;return t})(),jt={provide:b,useExisting:w(()=>Ce)},Ce=(()=>{let e=class e extends b{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new m,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return ce(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){q(i.control||null,i,!1),kt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Tt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(q(r||null,i),Gt(o)&&(ce(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);xt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Pt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){_e(this.form,this),this._oldForm&&Z(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(s(fe,10),s(pe,10),s(ge,8))},e.\u0275dir=h({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&F("submit",function(u){return o.onSubmit(u)})("reset",function(){return o.onReset()})},inputs:{form:[g.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[I([jt]),_,N]});let t=e;return t})();var Ht={provide:f,useExisting:w(()=>Ve)},Ve=(()=>{let e=class e extends f{set isDisabled(i){}constructor(i,r,o,a,u){super(),this._ngModelWarningConfig=u,this._added=!1,this.name=null,this.update=new m,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ot(this,a)}ngOnChanges(i){this._added||this._setUpControl(),rt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return Et(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(s(b,13),s(fe,10),s(pe,10),s(he,10),s(ye,8))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""]],inputs:{name:[g.None,"formControlName","name"],isDisabled:[g.None,"disabled","isDisabled"],model:[g.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[I([Ht]),_,N]});let t=e;return t})();var Bt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ee({type:e}),e.\u0275inj=Q({});let t=e;return t})();var J=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ye,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:ge,useValue:i.callSetDisabledState??me}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ee({type:e}),e.\u0275inj=Q({imports:[Bt]});let t=e;return t})();var lt=(t,e)=>({form__line_high:t,form__line_low:e});function Ut(t,e){if(t&1&&(k(0),E(1,"div",9),G()),t&2){let n=e.ngIf,i=R(3);d(),l("ngClass",oe(1,lt,n===i.Reliability.HIGH,n===i.Reliability.LOW))}}function Lt(t,e){if(t&1&&(k(0),C(1,"label",7),re(2,"Confirm Password"),y(),E(3,"input",8),C(4,"div",4),T(5,Ut,2,4,"ng-container",6),ae(6,"async"),y(),G()),t&2){let n=R(2);d(3),l("formControl",n.formControlConfirmPassword)("type",n.inputType),d(2),l("ngIf",le(6,3,n.isConfirm$))}}var Wt=(t,e,n,i)=>({input__short:t,input__low:e,input__middle:n,input__high:i}),$t=(t,e,n)=>({form__line_low:t,form__line_middle:e,form__line_high:n}),qt=(t,e,n)=>({form__line_middle:t,form__line_high:e,form__line_low:n});function zt(t,e){if(t&1&&(C(0,"div",1)(1,"label",2),re(2,"Password"),y(),E(3,"input",3),k(4),C(5,"div",4),E(6,"div",5)(7,"div",5)(8,"div",5),y(),G(),T(9,Lt,7,5,"ng-container",6),y()),t&2){let n=e.ngIf,i=R();d(3),l("formControl",i.formControlPassword)("type",i.inputType)("ngClass",Ie(7,Wt,n===i.Reliability.SHORT,n===i.Reliability.LOW,n===i.Reliability.MIDDLE,n===i.Reliability.HIGH)),d(3),l("ngClass",se(12,$t,n===i.Reliability.LOW||n===i.Reliability.SHORT,n===i.Reliability.MIDDLE,n===i.Reliability.HIGH)),d(),l("ngClass",se(16,qt,n===i.Reliability.MIDDLE,n===i.Reliability.HIGH,n===i.Reliability.SHORT)),d(),l("ngClass",oe(20,lt,n===i.Reliability.HIGH,n===i.Reliability.SHORT)),d(),l("ngIf",i.confirmPassword)}}var c=function(t){return t.NOT_INIT="notInit",t.HIGH="high",t.MIDDLE="middle",t.LOW="low",t.SHORT="short",t}(c||{}),ut=function(t){return t.TEXT="text",t.PASSWORD="password",t}(ut||{}),dt=(()=>{let e=class e{constructor(i){this.ngControl=i,this.inputType=ut.PASSWORD,this.confirmPassword=!1,this.confirmSuccess=new m,this.Reliability=c,this.formControlPassword=new M,this.formControlConfirmPassword=new M,this.subscription=new De,this.onChange=r=>null,this.onTouched=()=>null,i.valueAccessor=this}ngOnInit(){this.subscription.add(this.formControlPassword.valueChanges.subscribe({next:i=>{this.onChange(i)}})),this.reliability$=this.formControlPassword.valueChanges.pipe(we(this.formControlPassword.value||""),A(i=>{let r=i.toString().trim().length;if(!r)return c.NOT_INIT;if(r<8&&r>=1)return c.SHORT;let o=/^(?:[a-zA-Z]+|\d+|[\W_]+)$/,a=/^(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[\W_])|(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]+$/;return/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]+$/.test(i)?c.HIGH:a.test(i)?c.MIDDLE:o.test(i)?c.LOW:c.NOT_INIT})),this.isConfirm$=Me([this.formControlConfirmPassword.valueChanges,this.formControlPassword.valueChanges]).pipe(A(([i,r])=>i.length?i===r?(this.confirmSuccess.next(!0),c.HIGH):(this.confirmSuccess.next(!1),c.LOW):(this.confirmSuccess.next(!1),c.NOT_INIT)))}ngOnDestroy(){this.subscription.unsubscribe()}writeValue(i){this.formControlPassword.setValue(i)}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}};e.\u0275fac=function(r){return new(r||e)(s(f))},e.\u0275cmp=P({type:e,selectors:[["app-password-input"]],inputs:{inputType:"inputType",confirmPassword:"confirmPassword"},outputs:{confirmSuccess:"confirmSuccess"},standalone:!0,features:[j],decls:2,vars:3,consts:[["class","form__container",4,"ngIf"],[1,"form__container"],["for","input",1,"form__container__label"],["id","input","placeholder","Please enter your password...",1,"input",3,"formControl","type","ngClass"],[1,"form__line-container"],[1,"form__line",3,"ngClass"],[4,"ngIf"],["for","confirm",1,"form__container__label"],["id","confirm","placeholder","Please enter your password...",1,"input",3,"formControl","type"],[1,"form__line","form__line--one",3,"ngClass"]],template:function(r,o){r&1&&(T(0,zt,10,23,"div",0),ae(1,"async")),r&2&&l("ngIf",le(1,1,o.reliability$))},dependencies:[J,X,Y,ve,Pe,xe,Oe],styles:[".input[_ngcontent-%COMP%]{border:1px solid #bababa;border-radius:6px;padding:6px;outline:none;transition:all .2s linear}.input[_ngcontent-%COMP%]:hover{border:1px solid black}.input[_ngcontent-%COMP%]:focus{scale:1.02}.input__short[_ngcontent-%COMP%]{border:2px solid #ff1744}.input__low[_ngcontent-%COMP%]{border:2px solid #bababa}.input__middle[_ngcontent-%COMP%]{border:2px solid #ffc400}.input__high[_ngcontent-%COMP%]{border:2px solid #64dd17}.form__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:320px}.form__container__label[_ngcontent-%COMP%]{margin-bottom:6px}.form__line-container[_ngcontent-%COMP%]{margin:6px 0;display:flex;gap:6px}.form__line[_ngcontent-%COMP%]{flex:1;display:flex;height:6px;border-radius:4px;background-color:#e0e0e0}.form__line_low[_ngcontent-%COMP%]{background-color:#ff1744}.form__line_middle[_ngcontent-%COMP%]{background-color:#ffc400}.form__line_high[_ngcontent-%COMP%]{background-color:#64dd17}"]});let t=e;return t})();var ct=(()=>{let e=class e{constructor(){this.formGroupPassword=new $({password:new M})}ngOnInit(){this.formGroupPassword.valueChanges.subscribe({next:i=>{console.log(i)}})}confirmSuccess(i){console.log(i?"password has confirmed":"password has not confirmed")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=P({type:e,selectors:[["app-root"]],standalone:!0,features:[j],decls:3,vars:2,consts:[[1,"container"],[1,"form",3,"formGroup"],["formControlName","password",1,"app-password",3,"confirmPassword","confirmSuccess"]],template:function(r,o){r&1&&(C(0,"div",0)(1,"form",1)(2,"app-password-input",2),F("confirmSuccess",function(u){return o.confirmSuccess(u)}),y()()()),r&2&&(d(),l("formGroup",o.formGroupPassword),d(),l("confirmPassword",!0))},dependencies:[dt,J,st,Y,et,Ce,Ve],styles:[".form[_ngcontent-%COMP%]{padding:20px;display:flex;align-items:center;flex-direction:column;justify-content:center;height:100vh;gap:16px}.app-password[_ngcontent-%COMP%]{padding:30px;border-radius:20px;background-color:#fff;box-shadow:-5px 8px 24px 2px #000000b8;transition:all .2s linear}.app-password[_ngcontent-%COMP%]:hover{box-shadow:-1px 3px 13px 2px #000000b8}"]});let t=e;return t})();var ht=[];var ft={providers:[Ge(ht),Te()]};var Zt={providers:[ke()]},pt=Se(ft,Zt);var Xt=()=>Ne(ct,pt),Wi=Xt;export{Wi as a};