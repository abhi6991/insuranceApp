import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InsuranceDetailService } from '../../services/insurance-details.service';

/**
 * Generated class for the InsuranceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insurance-list',
  templateUrl: 'insurance-list.html',
})
export class InsuranceListPage implements OnInit{
  currentInsurance = null;
  insurances = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              private insuranceDetailService: InsuranceDetailService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsuranceListPage');
  }

  ngOnInit(){
    this.insurances = this.insuranceDetailService.insurances;
    console.log(this.insurances);
  }

  navigate(insurance){
    this.currentInsurance = insurance;
  }

  showAlert(diseaseList) {
    let list = '';
    diseaseList.forEach(function(item){
      list+= item+'\n';
    });

    const alert = this.alertCtrl.create({
      title: 'Disease Covered',
      message: list,
      buttons: ['OK']
    });
    alert.present();
  }

  onPurchase(insurance){
    this.insuranceDetailService.purchasedInsurances.push(insurance);
  }

}
