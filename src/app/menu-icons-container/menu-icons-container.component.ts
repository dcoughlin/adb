import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-icons-container',
  templateUrl: './menu-icons-container.component.html',
  styleUrls: ['./menu-icons-container.component.scss'],
})
export class MenuIconsContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
