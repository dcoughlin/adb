import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuIconsContainerComponent } from './menu-icons-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MenuIconsContainerComponent],
  exports: [MenuIconsContainerComponent]
})
export class MenuIconsContainerComponentModule {}
