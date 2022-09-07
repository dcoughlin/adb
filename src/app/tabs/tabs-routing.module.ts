import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home-tab/home-tab.module').then(m => m.HomeTabPageModule)
      },
      {
        path: 'transfer',
        loadChildren: () => import('../transfer-tab/transfer-tab.module').then(m => m.TransferTabPageModule)
      },
      {
        path: 'deposit',
        loadChildren: () => import('../deposit-tab/deposit-tab.module').then(m => m.DepositTabPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more-tab/more-tab.module').then(m => m.MoreTabPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
