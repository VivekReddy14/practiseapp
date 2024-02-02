import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor() {}

  username: string;
  password: string;

  formsubmit = () => {
    console.log('yes');
  }

}
