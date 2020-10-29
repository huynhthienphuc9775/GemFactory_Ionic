import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private loadingController: LoadingController
  ) { }

  loadingCtrl: HTMLIonLoadingElement;

  async start() {
    this.loadingCtrl = await this.loadingController.create({
      spinner: "crescent",
      translucent: true,
    });

    await this.loadingCtrl.present();

    setTimeout(() => {
      this.loadingCtrl.dismiss();
    }, 10000);
  }

  async stop() {
    await this.loadingCtrl.dismiss();
  }
}
