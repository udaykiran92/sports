import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor( private router:Router) { }
   shipping:any;
  ngOnInit(): void {

   this.shipping=new FormGroup({
    "name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "number":new FormControl(null,[Validators.required]),
    "Street":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "Village":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "District":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "State":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "Country":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "mobileNumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
    "pincode":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),


   });
  }
submitproceed(){
  // console.log(this.shipping.value);
  if(this.shipping.valid){
    alert(`proceed to pay`);
    this.router.navigate(['/pay']);
  }
}
 get name(){return this.shipping.get('name');}
 get number(){return this.shipping.get('number');}
 get Street(){return this.shipping.get('Street');}
 get Village(){return this.shipping.get('Village');}
 get District(){return this.shipping.get('District');}
 get State(){return this.shipping.get('State');}
 get Country(){return this.shipping.get('Country');}
 get mobileNumber(){return this.shipping.get('mobileNumber');}
 get pincode(){return this.shipping.get('pincode');}


}
