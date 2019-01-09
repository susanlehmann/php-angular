import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';

import { AuthService } from './../shared/services/auth.service';
import { TokenService } from './../shared/services/token.service';
import { HttpcallService } from './../shared/services/httpcall.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public form = {
        email: null,
        password: null
    };

    public error = null;


    constructor(
        public router: Router,
        private httpcall: HttpcallService,
        private Token: TokenService,
        private Auth: AuthService
    ) {}

    ngOnInit() {

    }

    onLoggedin() {
        // localStorage.setItem('isLoggedin', 'true');
    }

    onSubmit() {
        // console.log(this.form);
        this.httpcall.login(this.form).subscribe(
          data => this.handleResponse(data),
          error => this.handleError(error)
        );
      }

      handleResponse(data) {
        this.Token.handle(data.access_token, data.user);
        this.Auth.changeAuthStatus(true);
        this.router.navigateByUrl('/dashboard');
      }

      handleError(error) {
        this.error = error.error.error;
    }
}
