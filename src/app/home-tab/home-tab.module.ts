import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeTabPage } from './home-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MenuIconsContainerComponentModule } from '../menu-icons-container/menu-icons-container.module';

import { HomeTabPageRoutingModule } from './home-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MenuIconsContainerComponentModule,
    HomeTabPageRoutingModule
  ],
  declarations: [HomeTabPage]
})
export class HomeTabPageModule {}
