import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-purchase-amount-detail',
    templateUrl: './purchase-amount-detail.component.html',
    styleUrls: ['./purchase-amount-detail.component.scss']
})

export class PurchaseAmountDetailComponent implements OnInit {
    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    goBack(){
        this.router.navigate(['admin/sales-status/smart-store-detail']);
    }
}