import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InsuranceDetailService } from '../../services/insurance-details.service';

/**
 * Generated class for the CustomerClaimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-claim',
  templateUrl: 'customer-claim.html',
})
export class CustomerClaimPage implements OnInit{
  createdCode = null;
  purchasedInsurances = null;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private insuranceDetailService: InsuranceDetailService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerClaimPage');
  }

  ngOnInit(){
    this.purchasedInsurances = this.insuranceDetailService.purchasedInsurances;
  }

  onClaim(insuranceName, diseaseName){
    this.createdCode = {
      'insuranceName': insuranceName,
      'disease': diseaseName
    };
    this.createdCode = JSON.stringify(this.createdCode);
    console.log(this.createdCode);
  }
}
