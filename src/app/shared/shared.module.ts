import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import { DatePickerModule } from 'ionic4-date-picker';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  

import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { LoginFooterComponent } from './components/login-footer/login-footer.component';
import { TotalSalesStatusComponent } from './components/total-sales-status/total-sales-status.component';
import { MarketStatusComponent } from './components/market-status/market-status.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DistributionSupplierDetailComponent } from './components/distribution-supplier-detail/distribution-supplier-detail.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ItemSalesDetailComponent } from './components/item-sales-detail/item-sales-detail.component'
import { SmartStoreComponent } from './components/smart-store/smart-store.component'
import { SmartStoreDetailComponent } from './components/smart-store-detail/smart-store-detail.component'
import { PurchaseAmountDetailComponent } from './components/purchase-amount-detail/purchase-amount-detail.component'
import { KeywordComponent } from './components/keyword/keyword.component'
import { KeywordDetailComponent } from './components/keyword-detail/keyword-detail.component'
import { ItemNameDetailComponent } from './components/item-name-detail/item-name-detail.component';
@NgModule({
    declarations: [
      AdminHeaderComponent,
      DatePickerComponent,
      AdminFooterComponent,
      LoginFooterComponent,
      TotalSalesStatusComponent,
      MarketStatusComponent,
      LineChartComponent,
      DistributionSupplierDetailComponent,
      BarChartComponent,
      ItemSalesDetailComponent,
      SmartStoreComponent,
      SmartStoreDetailComponent,
      PurchaseAmountDetailComponent,
      KeywordComponent,
      KeywordDetailComponent,
      ItemNameDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ChartsModule,
        DatePickerModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatTableModule
    ],
    exports: [
      AdminHeaderComponent,
      DatePickerComponent,
      FormsModule,
      AdminFooterComponent,
      ReactiveFormsModule,
      LoginFooterComponent,
      TotalSalesStatusComponent,
      MarketStatusComponent,
      LineChartComponent,
      DistributionSupplierDetailComponent,
      BarChartComponent,
      ItemSalesDetailComponent,
      SmartStoreComponent,
      SmartStoreDetailComponent,
      PurchaseAmountDetailComponent,
      KeywordComponent,
      KeywordDetailComponent,
      ItemNameDetailComponent
    ],
    entryComponents: [
    ],
    providers: [
      // { provide: DateTimeAdapter, useClass: DefaultDateTimeAdapter},
      // { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS },
    ],
  })
  export class SharedModule { }