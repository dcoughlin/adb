import { Component } from '@angular/core';
import { AdbDataService } from '../services/adb-data.service';
import _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home-tab.page.html',
  styleUrls: ['home-tab.page.scss']
})
export class HomeTabPage {
  
  constructor(public adbDataService: AdbDataService) {
  }

  ngOnInit() {
  }
}
