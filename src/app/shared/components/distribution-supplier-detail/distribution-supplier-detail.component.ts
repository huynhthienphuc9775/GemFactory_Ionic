import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
    selector: 'app-distribution-supplier-detail',
    templateUrl: './distribution-supplier-detail.component.html',
    styleUrls: ['./distribution-supplier-detail.component.scss']
})

export class DistributionSupplierDetailComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public displayedColumns: string[] = ['오픈마켓 / 벤더명', 'Scrapping Status'];
    public dataSource = new MatTableDataSource<any>(
        [
            { name: '잼토이즈', isActive: true },
            { name: '잼토이즈', isActive: true },
            { name: '잼토이즈', isActive: true },
            { name: '잼토이즈', isActive: false },
            { name: '잼토이즈', isActive: true },
            { name: '잼토이즈', isActive: false },
            { name: '잼토이즈', isActive: true },
            { name: '잼토이즈', isActive: true },
            { name: '잼토이즈', isActive: false },
            { name: '잼토이즈', isActive: false },
            { name: '잼토이즈', isActive: true },
            { name: '잼토이즈', isActive: true },
            { name: '잼토이즈', isActive: false },
            { name: '잼토이즈', isActive: true },
            { name: '잼토이즈', isActive: false },
        ]
    );
    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    goBack(){
        this.router.navigate(['admin/sales-status']);
    }

    getRecord(row){
        this.router.navigate(['admin/sales-status/item-sales-detail']);
    }
}