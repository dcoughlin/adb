import { assertPlatform, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener("message", () => { this.processParentRequest(event); }, false)
    this.launchChat();
  }

  launchChat() {
    window.__aiq.app_iframe = document.getElementById("aiq-chat-iframe");
    if (window.__aiq.app_iframe === null) {
      alert('"aiq-chat-iframe" ID not found');
    }
    // We'll enable this after we get Customer SAML working
    // window.__aiq.use_sso = true; 
  }

  processParentRequest(e) {
    // the close button on the chat-window can be handled here
    console.log('Process parent postMessage: ', e);
  }
}
