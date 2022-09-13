import { Component } from '@angular/core';
import { AdbDataService } from '../services/adb-data.service';
import _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home-tab.page.html',
  styleUrls: ['home-tab.page.scss']
})
export class HomeTabPage {
  
  isChatOpen = false;

  constructor(public adbDataService: AdbDataService) {
  }

  ngOnInit() {
    // this.launchChat();
  }

  launchChat() {
    window.__aiq.__aiq.app_iframe = document.getElementById("aiq-chat-iframe");
    if (window.__aiq.app_iframe === null) {
       alert('"aiq-chat-iframe" ID not found');
    }
    window.__aiq.use_sso = true;
    console.log('-----> APP IFRAME: ', window.__aiq.app_iframe);
    console.log('-----> USE SSO: ', window.__aiq.use_sso);
    // alert(window.__aiq.use_sso);
    // window.__aiq.renderChat();
  }
}
