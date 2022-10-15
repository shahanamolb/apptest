import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/appservice.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor() { }
 /*  message(msg:any){
    alert(msg);
  }  */
  ngOnInit(): void {
  }
  title="nikhil"
  message1(){
    const service=new MyService;
    service.onclickbtn(this.title);
  }

}
