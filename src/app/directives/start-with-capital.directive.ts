import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export function startWithCapitalValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const validExpr = /^[A-Z]/.test(control.value);
    return validExpr ? null : { startsWithCapital: { value: control.value } };
  };
}

@Directive({
  selector: '[startsWithCapital]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: StartWithCapitalDirective,
      multi: true,
    },
  ],
})
export class StartWithCapitalDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    return startWithCapitalValidator()(control);
  }
}
