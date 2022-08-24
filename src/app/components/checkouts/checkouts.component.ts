import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkouts',
  templateUrl: './checkouts.component.html',
  styleUrls: ['./checkouts.component.css']
})
export class CheckoutsComponent implements OnInit {

  constructor() { }
Form:any;
  ngOnInit(): void {
    this.Form =new FormGroup({
     
      "emailId": new FormControl(null,[Validators.required,Validators.email]),
      "mobileNumber": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "PASSWORD": new  FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]*')])
      });
    }
  
   submitData(){
       console.log(this.Form.value);
  
       if(this.Form.valid){
        alert(`Thank You ${this.Form.value.firstName}`);
        this.Form.reset();
       }
   }
  
  
  get emailId(){return this.Form.get('emailId')}
  get mobileNumber(){return this.Form.get('mobileNumber')}
  get PASSWORD(){return this.Form.get('PASSWORD')}
  
  }


