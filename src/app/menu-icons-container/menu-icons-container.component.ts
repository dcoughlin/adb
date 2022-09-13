import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'menu-icons-container',
  templateUrl: './menu-icons-container.component.html',
  styleUrls: ['./menu-icons-container.component.scss'],
})
export class MenuIconsContainerComponent implements OnInit {

  isChatOpen = false;
  isRendered = false;

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

  launchChat() {
    if (!this.isChatOpen) {
      if (!this.isRendered) {
        window.__aiq.renderChat();
        this.isRendered = false;
      }
      (document.querySelector('.aiq-chat-hide') as HTMLElement).style.display = 'block'
    } else {
      (document.querySelector('.aiq-chat-hide') as HTMLElement).style.display = 'none'
    }
    this.isChatOpen = !this.isChatOpen;
  }
}
