import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-total-sales-status',
    templateUrl: './total-sales-status.component.html',
    styleUrls: ['./total-sales-status.component.scss']
})

export class TotalSalesStatusComponent implements OnInit {

    public data = [
        {name: '잼토이즈(gem’s own market)', ranking: '3'},
        {name: '잼토이즈(gem’s own market)', ranking: '3'},
        {name: '잼토이즈(gem’s own market)', ranking: '3'},
        {name: '잼토이즈(gem’s own market)', ranking: '3'},
        {name: '잼토이즈(gem’s own market)', ranking: '3'},
        {name: '잼토이즈(gem’s own market)', ranking: '3'},
        {name: '잼토이즈(gem’s own market)', ranking: '3'},
        {name: '잼토이즈(gem’s own market)', ranking: '3'},
        {name: '잼토이즈(gem’s own market)', ranking: '3'},
        {name: '잼토이즈(gem’s own market)', ranking: '3'},

    ]

    public currentTab = 'totalSalesStatus';
    constructor(){}

    ngOnInit(){}

    changeTab(tab){
        console.log(tab)
    }
}