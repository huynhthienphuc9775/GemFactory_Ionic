import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent implements OnInit {
    constructor(
        private modalController: ModalController,
    ) { }

    ngOnInit(): void {
    }


    dateSelected(date){
        this.modalController.dismiss(date);
    }
}