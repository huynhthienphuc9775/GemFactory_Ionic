import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
    selector: 'app-smart-store-detail',
    templateUrl: './smart-store-detail.component.html',
    styleUrls: ['./smart-store-detail.component.scss']
})

export class SmartStoreDetailComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public displayedColumns: string[] = ['오픈마켓 / 벤더명', 'Scrapping Status'];
    public dataSource = new MatTableDataSource<any>(
        [
            { name: '스티커게임북', isActive: true },
            { name: '폴리 스티커 동물 스티커', isActive: true },
            { name: '폴리 스티커 동물 스티커', isActive: true },
            { name: '폴리 스티커 동물 스티커', isActive: false },
            { name: '폴리 스티커 동물 스티커', isActive: true },
            { name: '폴리 스티커 동물 스티커', isActive: false },
            { name: '폴리 스티커 동물 스티커', isActive: true },
            { name: '폴리 스티커 동물 스티커', isActive: true },
            { name: '폴리 스티커 동물 스티커', isActive: false },
            { name: '폴리 스티커 동물 스티커', isActive: false },
            { name: '폴리 스티커 동물 스티커', isActive: true },
            { name: '폴리 스티커 동물 스티커', isActive: true },
            { name: '폴리 스티커 동물 스티커', isActive: false },
            { name: '폴리 스티커 동물 스티커', isActive: true },
            { name: '폴리 스티커 동물 스티커', isActive: false },
        ]
    );

    constructor(
        private router: Router
    ){}

    ngOnInit(){}

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    goBack(){
        this.router.navigate(['admin/sales-status']);
    }

    getRecord(row){
        this.router.navigate(['admin/sales-status/purchase-amount-detail']);
    }
}