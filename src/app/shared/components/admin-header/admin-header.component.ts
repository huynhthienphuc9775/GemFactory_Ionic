import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

import { LocalStorgeService } from '../../services/local-storge.service';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss']
})

export class AdminHeaderComponent implements OnInit {
    public currentTab = 'totalSalesStatus';
    public pageSelected = '';
    @Output() outputChangeTab = new EventEmitter();

    constructor(
        private nav: NavController,
        private localStorgeService: LocalStorgeService,
 
    ) { }

    ngOnInit(): void {
        this.pageSelected = this.localStorgeService.get('pageSelected') ? this.localStorgeService.get('pageSelected') : '/admin/home';
        this.changePage(this.pageSelected)
    }

    changePage(module){
        if (module !== '/admin/sales-status'){
            this.localStorgeService.set('tab-selected', '');
        }
        this.localStorgeService.set('pageSelected', module)
        this.nav.navigateRoot(`${module}`);

    }

    public changeTab(tab: string) {
        this.localStorgeService.set('tab-selected', tab);
        this.outputChangeTab.emit(tab);
        this.currentTab = tab;
      }
}