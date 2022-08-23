import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  public products:any=[];

  constructor(private service:ContainerService) { }

  ngOnInit(): void {
  }

}
