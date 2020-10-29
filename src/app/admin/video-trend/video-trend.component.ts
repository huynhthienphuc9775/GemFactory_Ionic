import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-video-trend',
    templateUrl: './video-trend.component.html',
    styleUrls: ['./video-trend.component.scss']
})

export class VideoTrendComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public displayedColumns: string[] = ['오픈마켓 / 벤더명', 'Scrapping Status'];
    public dataSource = new MatTableDataSource<any>(
        [
            { name: '폴뽀로로 6기 34화', isActive: true },
            { name: '폴뽀로로 6기 34화', isActive: true },
            { name: '폴뽀로로 6기 34화', isActive: true },
            { name: '폴뽀로로 6기 34화', isActive: false },
            { name: '폴뽀로로 6기 34화', isActive: true },
            { name: '폴뽀로로 6기 34화', isActive: false },
            { name: '폴뽀로로 6기 34화', isActive: true },
            { name: '폴뽀로로 6기 34화', isActive: true },
            { name: '폴뽀로로 6기 34화', isActive: false },
            { name: '폴뽀로로 6기 34화', isActive: false },
            { name: '폴뽀로로 6기 34화', isActive: true },
            { name: '폴뽀로로 6기 34화', isActive: true },
            { name: '폴뽀로로 6기 34화', isActive: false },
            { name: '폴뽀로로 6기 34화', isActive: true },
            { name: '폴뽀로로 6기 34화', isActive: false },
        ]
    );

    public kkVideoTrend = [
        {name: 'name of video', viewByAge: {three: '101234', threeToSix: '101234', sixUp: '101234'}, changeRanking: '3', viewByGender: {female: '101234', male: '101234'}, numberOfPlay: 101234},
        {name: 'name of video', viewByAge: {three: '101234', threeToSix: '101234', sixUp: '101234'}, changeRanking: '3', viewByGender: {female: '101234', male: '101234'}, numberOfPlay: 101234},
        {name: 'name of video', viewByAge: {three: '101234', threeToSix: '101234', sixUp: '101234'}, changeRanking: '3', viewByGender: {female: '101234', male: '101234'}, numberOfPlay: 101234},
        {name: 'name of video', viewByAge: {three: '101234', threeToSix: '101234', sixUp: '101234'}, changeRanking: '3', viewByGender: {female: '101234', male: '101234'}, numberOfPlay: 101234},
        {name: 'name of video', viewByAge: {three: '101234', threeToSix: '101234', sixUp: '101234'}, changeRanking: '3', viewByGender: {female: '101234', male: '101234'}, numberOfPlay: 101234},
        {name: 'name of video', viewByAge: {three: '101234', threeToSix: '101234', sixUp: '101234'}, changeRanking: '3', viewByGender: {female: '101234', male: '101234'}, numberOfPlay: 101234},
        {name: 'name of video', viewByAge: {three: '101234', threeToSix: '101234', sixUp: '101234'}, changeRanking: '3', viewByGender: {female: '101234', male: '101234'}, numberOfPlay: 101234},
        {name: 'name of video', viewByAge: {three: '101234', threeToSix: '101234', sixUp: '101234'}, changeRanking: '3', viewByGender: {female: '101234', male: '101234'}, numberOfPlay: 101234},
        {name: 'name of video', viewByAge: {three: '101234', threeToSix: '101234', sixUp: '101234'}, changeRanking: '3', viewByGender: {female: '101234', male: '101234'}, numberOfPlay: 101234},
        {name: 'name of video', viewByAge: {three: '101234', threeToSix: '101234', sixUp: '101234'}, changeRanking: '3', viewByGender: {female: '101234', male: '101234'}, numberOfPlay: 101234},
    ]
    
    public currentTab = 'dashboard';
    constructor(){}

    ngOnInit(){}

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    changeTab(tab: string){
        this.currentTab = tab
    }
}