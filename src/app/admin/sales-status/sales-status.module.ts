import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SalesStatusComponent } from './sales-status.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../../shared/shared.module';
import { DatePickerModule } from 'ionic4-date-picker';
import { DistributionSupplierDetailComponent } from '../../shared/components/distribution-supplier-detail/distribution-supplier-detail.component'
import { ItemSalesDetailComponent } from '../../shared/components/item-sales-detail/item-sales-detail.component'
import { SmartStoreDetailComponent } from '../../shared/components/smart-store-detail/smart-store-detail.component'
import { PurchaseAmountDetailComponent } from '../../shared/components/purchase-amount-detail/purchase-amount-detail.component'
import { KeywordDetailComponent } from '../../shared/components/keyword-detail/keyword-detail.component'
import { ItemNameDetailComponent } from '../../shared/components/item-name-detail/item-name-detail.component'
const routes: Routes = [
  {
    path: '',
    component: SalesStatusComponent
  },
  {
    path: 'distribution-supplier-detail',
    component: DistributionSupplierDetailComponent
  },
  {
    path: 'item-sales-detail',
    component: ItemSalesDetailComponent
  },
  {
    path: 'smart-store-detail',
    component: SmartStoreDetailComponent
  },
  {
    path: 'purchase-amount-detail',
    component: PurchaseAmountDetailComponent
  },
  {
    path: 'keyword-detail',
    component: KeywordDetailComponent
  },
  {
    path: 'item-name-detail',
    component: ItemNameDetailComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule,
    SharedModule,
    DatePickerModule
  ],
  declarations: [SalesStatusComponent],
  providers: []
})
export class SalesStatusModule { }
