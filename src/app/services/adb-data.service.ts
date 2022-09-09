import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AdbDataService {

  public customer: any;
  public accounts: any;

  baseUrl = 'https://aiq-mobile-finance.firebaseio.com/';

  constructor(private http: HttpClient,
              private loadingCtrl: LoadingController) { }

  async initialize() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading tour data...',
      spinner: 'crescent'
    });
    await loading.present();
    await this.getCustomer().then(data => this.customer = data);
    await this.getAccounts().then(data => this.accounts = data);
    await loading.dismiss();
  }

  getCustomer() {
    let requestUrl = `${this.baseUrl}/Customer.json`;
    return this.http.get(requestUrl).toPromise();
  }

  getAccounts() {
    let requestUrl = `${this.baseUrl}/Accounts.json`;
    return this.http.get(requestUrl).toPromise();
  }
}
