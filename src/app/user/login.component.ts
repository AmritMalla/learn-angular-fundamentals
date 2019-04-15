import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles : [
        `
            em{
                float:right;
                color:#E05C65;
                padding-left:10px;
            }

            #cancel{
                margin-left:10px;
            }
        `
    ]
})
export class LoginComponent {
    userName: any;
    password: any;
    mouseoverLogin: boolean = false;
    loginInvalid = false;

    constructor(private authService: AuthService, private router: Router) {

    }
    repeatedFun() {
        console.log(this.mouseoverLogin);
    }


    login(formValues) {
        console.log('login in login.component.ts');
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(
            resp => {
                if (!resp) {
                    this.loginInvalid = true;
                } else {
                    this.router.navigate(['events']);
                }
            }
        );
    }
    cancel() {
        this.router.navigate(['events']);
    }

}
