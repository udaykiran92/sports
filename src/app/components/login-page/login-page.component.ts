import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  LoginForm=this.fb.group({
    email:[''],
    password:['']
  })

    signIn(){
      const data = this.LoginForm.value;
      console.log(data)
    }
    createAccount(){
      
    }

}
