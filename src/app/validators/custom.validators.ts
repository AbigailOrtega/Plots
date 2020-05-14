import {  ValidatorFn, FormGroup, AbstractControl } from '@angular/forms';

export function cotrasenaEqual(contrasena: string,contrasena2:string) : ValidatorFn {
    return (group: FormGroup): {[key: string]: any} => {
        const target = group.controls[contrasena];
        const toMatch = group.controls[contrasena2];
        if (target.touched && toMatch.touched) {
          const isMatch = target.value === toMatch.value;
          // set equal value error on dirty controls
          if (!isMatch && target.valid && toMatch.valid) {
            toMatch.setErrors({equalValue: contrasena});
            const message = contrasena + ' != ' + contrasena2;
            return {'equalValue': message};
          }
          if (isMatch && toMatch.hasError('equalValue')) {
            toMatch.setErrors(null);
          }
        }
    
        return null;
      };
    
}
