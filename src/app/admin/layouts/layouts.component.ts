import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../shared/services/auth.service';
@Component({
    selector: 'app-layouts',
    templateUrl: './layouts.component.html',
    styleUrls: ['./layouts.component.scss']
})

export class LayoutsComponent implements OnInit {
    public isRemainder  = 0

    constructor(
        private authService: AuthService
    ) {
    }

    ngOnInit() { }

    logout(){
        this.authService.logout();
    }
}