import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuIconsContainerComponentModule } from '../../menu-icons-container/menu-icons-container.module';
import { GreetingComponent } from './greeting.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, MenuIconsContainerComponentModule],
  declarations: [GreetingComponent],
  exports: [GreetingComponent]
})
export class GreetingComponentModule {}
