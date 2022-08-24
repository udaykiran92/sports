import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router){ }
  loginForm:any;
 
 
  ngOnInit(): void {
  
    this.loginForm =new FormGroup({
      "firstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "emailId": new FormControl(null,[Validators.required,Validators.email]),
      "mobileNumber": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "PASSWORD": new  FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]*')])
      });
    }
  
   submitData(){
       console.log(this.loginForm.value);
  
       if(this.loginForm.valid){
        alert(`Thank You ${this.loginForm.value.firstName}`);
        this.loginForm.reset();
        this.router.navigate(['/pay']);
       }
   }
  
  get firstName(){ return this.loginForm.get('firstName');}
  get lastName(){ return this.loginForm.get('lastName');}
  get emailId(){return this.loginForm.get('emailId')}
  get mobileNumber(){return this.loginForm.get('mobileNumber')}
  get PASSWORD(){return this.loginForm.get('PASSWORD')}
  
  


}
