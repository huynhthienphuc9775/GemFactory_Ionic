import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    public VendorSalesTrends = [
        {name: '잼토이즈(Gem’s own)', totalNumber: '101,234', totalSale: '￦101,234', totalReview: '101234', changeRanking: '3'},
        {name: '잼토이즈(Gem’s own)', totalNumber: '101,234', totalSale: '￦101,234', totalReview: '101234', changeRanking: '3'},
        {name: '잼토이즈(Gem’s own)', totalNumber: '101,234', totalSale: '￦101,234', totalReview: '101234', changeRanking: '3'},
        {name: '잼토이즈(Gem’s own)', totalNumber: '101,234', totalSale: '￦101,234', totalReview: '101234', changeRanking: '3'},
        {name: '잼토이즈(Gem’s own)', totalNumber: '101,234', totalSale: '￦101,234', totalReview: '101234', changeRanking: '3'},
        {name: '잼토이즈(Gem’s own)', totalNumber: '101,234', totalSale: '￦101,234', totalReview: '101234', changeRanking: '3'},
        {name: '잼토이즈(Gem’s own)', totalNumber: '101,234', totalSale: '￦101,234', totalReview: '101234', changeRanking: '3'},
        {name: '잼토이즈(Gem’s own)', totalNumber: '101,234', totalSale: '￦101,234', totalReview: '101234', changeRanking: '3'},
        {name: '잼토이즈(Gem’s own)', totalNumber: '101,234', totalSale: '￦101,234', totalReview: '101234', changeRanking: '3'},
        {name: '잼토이즈(Gem’s own)', totalNumber: '101,234', totalSale: '￦101,234', totalReview: '101234', changeRanking: '3'},
    ]

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

    constructor(
    ) {
    }

    ngOnInit(): void {
    }

}