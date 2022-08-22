import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    public products:any=[];
    public grandTotal !: number;
  constructor( private service:ContainerService) { }

  ngOnInit(): void {
    this.service.getProducts()
    .subscribe(inventory=>{
      this.products=inventory;
      this.grandTotal = this.service.TotalPrice();
    })
  
  }
removeCartItem(item:any){
  this.service.removeCartItem(item);
}
removeAllCart(){
  this.service.removeAllCart();
}
getTotalPrice(){
  this.service.TotalPrice();
}




inc(item:any){
this.service.inc(item);
}
dec(item:any){
this.service.dec(item);
}
}
