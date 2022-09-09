import { Component } from '@angular/core';
import { AdbDataService } from '../services/adb-data.service';
import _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home-tab.page.html',
  styleUrls: ['home-tab.page.scss']
})
export class HomeTabPage {

  currentDate: any;
  currentDateStr: string;
  currentDay: string;
  
  constructor(public adbDataService: AdbDataService) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    this.currentDate = new Date();
    this.currentDay = weekday[this.currentDate.getDay()];
    this.currentDateStr = this.currentDate.toLocaleDateString();
  }

  ngOnInit() {
  }
}
