import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [TranslateModule]
})
export class LoginComponent implements OnInit {
  constructor() { }
  loginForm = new FormGroup({
    userName : new FormControl('',[Validators.required, Validators.maxLength(200)]),
    passWord: new FormControl('', Validators.required)
})
  ngOnInit() {
  }
  login(){
    if(this.loginForm.invalid){
      return 
    }
  }
}
