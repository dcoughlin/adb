import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoreTabPage } from './more-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MenuIconsContainerComponentModule } from '../menu-icons-container/menu-icons-container.module';

import { MoreTabPageRoutingModule } from './more-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MenuIconsContainerComponentModule,
    MoreTabPageRoutingModule
  ],
  declarations: [MoreTabPage]
})
export class MoreTabPageModule {}
