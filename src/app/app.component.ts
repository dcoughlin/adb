import { Component } from '@angular/core';
import { AdbDataService } from './services/adb-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public adbDataService: AdbDataService) {
    adbDataService.initialize();
  }
}
