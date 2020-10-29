import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit {
    public isRemainder  = 0

    constructor(
    ) {
    }

    ngOnInit() { }
}