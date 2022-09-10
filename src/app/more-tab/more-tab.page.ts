import { Component } from '@angular/core';
import { AdbDataService } from '../services/adb-data.service';

@Component({
  selector: 'app-more',
  templateUrl: 'more-tab.page.html',
  styleUrls: ['more-tab.page.scss']
})
export class MoreTabPage {

  constructor(public adbDataService:  AdbDataService) {}

}
