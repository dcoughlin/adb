import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {

  @Input() name: string;

  currentDate: any;
  currentDateStr: string;
  currentDay: string;
  
  constructor() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    this.currentDate = new Date();
    this.currentDay = weekday[this.currentDate.getDay()];
    this.currentDateStr = this.currentDate.toLocaleDateString();
  }

  ngOnInit() {}

}
