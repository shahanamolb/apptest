import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/appservice.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }
   /* message(msg:any){
    alert(msg); */
 // } 

  ngOnInit(): void {
    
  }
  title ="seraj";
  message(){
    const service=new MyService;
    service.onclickbtn(this.title);
  }

}
