import { Component } from '@angular/core';
import {AF} from "../providers/af";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public error: any;
  constructor(public afService: AF, private router: Router) {}
  loginWithGoogle() {
    this.afService.loginWithGoogle().then((data) => {
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }
  loginWithFacebook() {
    this.afService.loginWithFacebook().then((data) => {
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }
  loginWithTwitter() {
    this.afService.loginWithTwitter().then((data) => {
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }
  loginWithEmail(event, email, password){
    event.preventDefault();
    this.afService.loginWithEmail(email, password).then(() => {
      this.router.navigate(['']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }
}