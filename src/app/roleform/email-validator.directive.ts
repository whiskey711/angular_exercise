import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[emailValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: emailValidatorDirective,
      multi: true
    }
  ]
})

export class emailValidatorDirective implements Validator {
  validate(control: AbstractControl) {
    const email = control.value;
    if (email && email.includes('@')) {
      const domain = email.split('@')[1];
      return domain === 'fdmgroup.com' ? null : { invalidEmail: true };
    }
    return { invalidEmail: true };
  }
}
