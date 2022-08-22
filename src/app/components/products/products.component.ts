import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public inventory:any;
  searchkey:string="";
  public filterSection:any;
  constructor(private service:ContainerService) { }
  ngOnInit(): void {
    this.inventory=this.service.playstore;
    this.filterSection=this.inventory;
    this.inventory.forEach((a:any)=>{
      if(a.section==='indoor'|| a.section==='outdoor'){
        a.section="games";
      }
      Object.assign(a,{quantity:1,total:a.price});
    });
    console.log(this.inventory);
   this.service.search.subscribe((val:any)=>{
    this.searchkey=val;
   })

  }

  addToCart(item:any){
  this.service.addToCart(item)
  }
filter(section:string){
  this.filterSection=this.inventory
  .filter((a:any)=>{
    if(a.section ==section || section==''){
      return a;
    }
  })
}
inc(item:any){
  this.service.inc(item);
}
dec(item:any){
this.service.dec(item);
}
}
