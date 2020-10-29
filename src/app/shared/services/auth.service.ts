import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MsgService } from './msg-message.service';
import { GeneralService } from './general.service';
import { LoginModel } from '../models/login.model'
import { Constant } from '../infrastructure/constant';
import { LocalStorgeService } from './local-storge.service';
import { environment } from '../../../environments/environment'
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends GeneralService {
    constructor(
        protected alertService: MsgService,
        protected http: HttpClient,
        private localStorgeService: LocalStorgeService,
        private nav: NavController,
    ) {
        super(http, alertService, environment.apiCoreUrl, "Account");
    }

    async login(model: LoginModel) {
        let res = await this.post("SignIn", model);
        if (res.isSuccess) {
            this.localStorgeService.set(Constant.auths.isLoginIn, 'true');
            this.localStorgeService.set(Constant.auths.token, res.data["token"]);
            this.localStorgeService.set(Constant.auths.userId, res.data["userId"]);
            this.localStorgeService.set(Constant.auths.userName, res.data["userName"]);
            this.localStorgeService.set(Constant.auths.fullName, res.data["userFullName"]);
        }
        return res
    }

    isLogged() {
        let token = this.localStorgeService.get(Constant.auths.token);
        if (token) {
            return true;
        }
        return false;
    }

    async logout() {
        this.localStorgeService.clear();
        this.nav.navigateRoot([""]);
      }
}