import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service'
import { MsgService } from '../../shared/services/msg-message.service';
import { LoadingService } from '../../shared/services/loading.service';
import { NavController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    public list = [
        { name: '인터파크', value: '0' },
        { name: '옥션', value: '1' },
        { name: '지마켓', value: '2' },
        { name: '쿠팡', value: '3' },
        { name: '잼토이즈', value: '4' },
        { name: '스마트스토어', value: '5' },
        { name: '위메프', value: '6' },
        { name: '티몬', value: '7' },
    ]

    public myForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private nav: NavController,

    ) {

    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.myForm = this.formBuilder.group(
            {
                name: ['', Validators.required],
                address: '',
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(8)]]
            },
            { updateOn: 'blur' }
        );
    }

    save(){
        this.nav.navigateRoot("/");

    }

    cancel(){
        this.nav.navigateRoot("/");

    }

}