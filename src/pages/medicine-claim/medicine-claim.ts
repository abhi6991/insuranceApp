import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InsuranceDetailService } from '../../services/insurance-details.service';
import { BlockchainService } from '../../services/blockchain-service';
import { Claim } from '../../app/models/claim.model';

/**
 * Generated class for the MedicineClaimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicine-claim',
  templateUrl: 'medicine-claim.html',
})
export class MedicineClaimPage implements OnInit{
  createdCode = null;
  
  ngOnInit(): void {
    this.getClaim();
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private blockchainService: BlockchainService,
              private insuranceDetailService: InsuranceDetailService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicineClaimPage');
  }

  getClaim(){
    this.blockchainService.getClaimStore().subscribe(
      data => (this.createdCode = JSON.stringify(data))
    );
  }

}
