import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransferTabPage } from './transfer-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HeaderComponentModule } from '../components/header/header.component.module';
import { TransferTabPageRoutingModule } from './transfer-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HeaderComponentModule,
    TransferTabPageRoutingModule
  ],
  declarations: [TransferTabPage]
})
export class TransferTabPageModule {}
