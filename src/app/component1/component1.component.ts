import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/appservice.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
   
  }
  title="GadgEon";
 // btnclick(){
    //alert("hello from "+ this.title)
  //}
  onbtnclick(){
    const service =new MyService();
    service.onclickbtn(this.title);
  }
}
