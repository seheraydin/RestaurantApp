import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { match } from '../../../node_modules/@types/minimatch';


@Component({
    templateUrl: 'register.component.html',
    selector: 'sl-register'
})

export class RegisterComponent {

    form: any;

    constructor(private auth: AuthService, private fb: FormBuilder) {
        this.form = fb.group({
            userName: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, { validators: matchingFields('password', 'confirmPassword') })

    }
    onSubmit() {
        console.log(this.form.errors);
        this.auth.register(this.form.value);
    }

    isValid(control:any){
            return this.form.controls[control].invalid && this.form.controls[control].touched;
    }

}


function matchingFields(field1: any, field2: any) {
    return form => {
        if (form.controls[field1].value !== form.controls[field2].value)
            return { mismacthedFields: true }
    }
}