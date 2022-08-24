import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  public products:any=[];
  public grandTotal:any;

  constructor(private service:ContainerService) { }

  ngOnInit(): void {
  this.service.getProducts().subscribe((inventory:any)=>{
    this.products=inventory;
    this.grandTotal = this.service.TotalPrice();

  })
  }

}
