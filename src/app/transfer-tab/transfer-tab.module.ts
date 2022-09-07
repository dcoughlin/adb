import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransferTabPage } from './transfer-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MenuIconsContainerComponentModule } from '../menu-icons-container/menu-icons-container.module';

import { TransferTabPageRoutingModule } from './transfer-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MenuIconsContainerComponentModule,
    TransferTabPageRoutingModule
  ],
  declarations: [TransferTabPage]
})
export class TransferTabPageModule {}
