import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service'
import { LoginModel } from '../../shared/models/login.model'
import { MsgService } from '../../shared/services/msg-message.service';
import { LoadingService } from '../../shared/services/loading.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    public email: string;
    public password: string;
    public remember_me = false;

    public loginModel: LoginModel = new LoginModel()
    public onStart: boolean = false;


    constructor(
        private nav: NavController,
        private router: Router,
        private authService: AuthService,
        private alertService: MsgService,
        private loadingService: LoadingService
    ) {

    }

    ngOnInit() { }

    getStart(){
        this.onStart = true;
    }

    async signMeIn() {
        this.nav.navigateRoot("/admin/home");
        // await this.loadingService.start();
        // let res = await this.authService.login(this.loginModel)
        // if (res.isSuccess) {
        //     console.log(res)
        //     this.nav.navigateRoot("/admin");
        // }
        // else {
        //     this.alertService.error(res.message);
        // }
        // await this.loadingService.stop();
    }

    signUp() {
        this.nav.navigateRoot("/register");
    }
}