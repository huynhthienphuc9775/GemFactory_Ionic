import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-smart-store',
    templateUrl: './smart-store.component.html',
    styleUrls: ['./smart-store.component.scss']
})

export class SmartStoreComponent implements OnInit {
    public SampleData =
        [
            {
                "name": "abcd",
                "surname": "efg",
                "age": 19,
                "gender": "female"
            },
            {
                "name": "hijk",
                "surname": "lmn",
                "age": 20,
                "gender": "female"
            },
            {
                "name": "opq",
                "surname": "rst",
                "age": 18,
                "gender": "male"
            },
            {
                "name": "uv",
                "surname": "wx",
                "age": 21,
                "gender": "female"
            },
            {
                "name": "yz",
                "surname": "now",
                "age": 19,
                "gender": "male"
            },
            {
                "name": "ikn",
                "surname": "o",
                "age": 19,
                "gender": "male"
            },
            {
                "name": "myabc",
                "surname": "next",
                "age": 21,
                "gender": "female"
            },
            {
                "name": "time",
                "surname": "wont",
                "age": 20,
                "gender": "male"
            },
            {
                "name": "you",
                "surname": "type",
                "age": 19,
                "gender": "female"
            },
            {
                "name": "wit",
                "surname": "hme",
                "age": 18,
                "gender": "female"
            }
        ]
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public displayedColumns: string[] = ['오픈마켓 / 벤더명', 'Scrapping Status'];
    public dataSource = new MatTableDataSource<any>(
        [
            { name: '스마트 스토어A', isActive: true },
            { name: '스마트 스토어A', isActive: true },
            { name: '스마트 스토어A', isActive: true },
            { name: '스마트 스토어A', isActive: false },
            { name: '스마트 스토어A', isActive: true },
            { name: '스마트 스토어A', isActive: false },
            { name: '스마트 스토어A', isActive: true },
            { name: '스마트 스토어A', isActive: true },
            { name: '스마트 스토어A', isActive: false },
            { name: '스마트 스토어A', isActive: false },
            { name: '스마트 스토어A', isActive: true },
            { name: '스마트 스토어A', isActive: true },
            { name: '스마트 스토어A', isActive: false },
            { name: '스마트 스토어A', isActive: true },
            { name: '스마트 스토어A', isActive: false },
        ]
    );
    constructor(
        private nav: NavController,
        private router: Router,
    ) { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    changeTab(tab) {
        console.log(tab)
    }

    exel() {
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.SampleData);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'filename_test');
        XLSX.writeFile(wb, 'filename_test' + '.xlsx');
    }

    getRecord(row){
        this.router.navigate(['admin/sales-status/smart-store-detail']);
    }
}