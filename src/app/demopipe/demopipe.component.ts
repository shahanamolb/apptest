import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css']
})
export class DemopipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Kerala";
  today = Date();
  user={
    id:100,
    name:"Shahana",
    DOB:'10/09/2000',
    salary:50000
  }
}
