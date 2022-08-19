import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public totalItem =0;
 public searchTerm = '';
  constructor( private service:ContainerService) { }

  ngOnInit(): void {
  this.service.getProducts()
  .subscribe(inventory=>{
    this.totalItem=inventory.length;
  })
  }
  search (event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.service. search .next(this.searchTerm);
 }
}
