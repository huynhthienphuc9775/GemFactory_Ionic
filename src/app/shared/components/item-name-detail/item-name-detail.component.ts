import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-item-name-detail',
    templateUrl: './item-name-detail.component.html',
    styleUrls: ['./item-name-detail.component.scss']
})

export class ItemNameDetailComponent implements OnInit {
    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    goBack(){
        this.router.navigate(['admin/sales-status/keyword-detail']);
    }
}