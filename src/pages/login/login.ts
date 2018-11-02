import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomerPage } from '../customer/customer';
import { DoctorPage } from '../doctor/doctor';
import { MedicalShopPage } from '../medical-shop/medical-shop';
import { TabsPage } from '../tabs/tabs';
import { BlockchainService } from '../../services/blockchain-service';
import { Claim } from '../../app/models/claim.model';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
  data = null;

  ngOnInit(){
    console.log('here');
    // let claim = new Claim('a','b','c','d',1);
    // this.blockchainService.sendClaimDoctor(claim).subscribe(
    //   data=>{this.data=JSON.stringify(data); console.log('here',data)});
  }

  constructor(public navCtrl: NavController,
              private blockchainService: BlockchainService) {}

  navigate(page){
    if(page==='customer'){
      this.navCtrl.push(TabsPage);
    }else if(page==='doctor'){
      this.navCtrl.push(DoctorPage);
    }else if(page==='medicalShop'){
      this.navCtrl.push(MedicalShopPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerClaimPage');
  }

}
