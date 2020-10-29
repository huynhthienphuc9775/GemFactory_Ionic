import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sales-status',
    templateUrl: './sales-status.component.html',
    styleUrls: ['./sales-status.component.scss']
})

export class SalesStatusComponent implements OnInit {
    public tab = 'totalSalesStatus';
    constructor(){}

    ngOnInit(){}

    changeTab(tab){
        this.tab = tab;
        console.log(this.tab)

    }
}