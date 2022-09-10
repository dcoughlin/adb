import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'menu-icons-container',
  templateUrl: './menu-icons-container.component.html',
  styleUrls: ['./menu-icons-container.component.scss'],
})
export class MenuIconsContainerComponent implements OnInit {

  @Input() name: string;
  dropdown = false;
  // @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef;

  constructor() { }

  ngOnInit() {}

  launchChat() {
    alert('lauchChat');
    // window.__aiq.triggerWorkflow('aiq_init_customer_dispatch');
  }

  hideDropdown(event) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    // const rect = this.productbtn.nativeElement.getBoundingClientRect();
    // const topBoundary = rect.top + 2;
    // const leftBoundary = rect.left + 2;
    // const rightBoundary = rect.right - 2;

    // if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
    //   this.dropdown = false;
    // }
  }

}
