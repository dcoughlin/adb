import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-transfer',
  templateUrl: 'transfer-tab.page.html',
  styleUrls: ['transfer-tab.page.scss']
})
export class TransferTabPage {

  constructor(private alertCtrl: AlertController) {}

  async errorAlert() {
    const alert = await this.alertCtrl.create({
      header: 'System Issue',
      message: 'We cannot initiated a transfer at this time.  Please try again later.',
      cssClass: 'primary',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    });
    await alert.present();
  }

  beginTransfer() {
    this.errorAlert();
  }

}
