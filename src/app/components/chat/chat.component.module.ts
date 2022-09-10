import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuIconsContainerComponentModule } from '../../menu-icons-container/menu-icons-container.module';
import { ChatComponent } from './chat.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, MenuIconsContainerComponentModule],
  declarations: [ChatComponent],
  exports: [ChatComponent]
})
export class ChatComponentModule {}
