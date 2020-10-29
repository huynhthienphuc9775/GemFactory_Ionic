import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-item-sales-detail',
    templateUrl: './item-sales-detail.component.html',
    styleUrls: ['./item-sales-detail.component.scss']
})

export class ItemSalesDetailComponent implements OnInit {
    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    goBack(){
        this.router.navigate(['admin/sales-status/distribution-supplier-detail']);
    }
}