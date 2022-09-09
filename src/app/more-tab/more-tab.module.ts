import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoreTabPage } from './more-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HeaderComponentModule } from '../components/header/header.component.module';
import { MoreTabPageRoutingModule } from './more-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HeaderComponentModule,
    MoreTabPageRoutingModule
  ],
  declarations: [MoreTabPage]
})
export class MoreTabPageModule {}
