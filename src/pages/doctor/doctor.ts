import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InsuranceDetailService } from '../../services/insurance-details.service';
import { Claim } from '../../app/models/claim.model';
import { BlockchainService } from '../../services/blockchain-service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html'
})
export class DoctorPage {
  data = null;
  approved = false;
  medicine = '';
  constructor(public navCtrl: NavController, 
              private barcodeScanner: BarcodeScanner,
              private blockchainService: BlockchainService,
              private toastCtrl: ToastController,
              private insuranceDetailService: InsuranceDetailService) {}
    scannedCode = null;
    expense = 0;
    scanCode() {
      this.barcodeScanner.scan().then(barcodeData => {
        this.scannedCode = JSON.parse(barcodeData.text);
        console.log(this.scannedCode);
      }, (err) => {
          console.log('Error: ', err);
      });
    }

    onApprove(){
      let data = new Claim(
        'Abhishek',
        this.scannedCode.insuranceName,
        this.scannedCode.disease,
        this.medicine,
        this.expense
      );
      //this.presentToast(JSON.stringify(data));
      console.log(data);
      this.sendClaim(data);
      this.insuranceDetailService.approvedClaim = data;
      this.approved = true;
      console.log(data);
    }

    sendClaim(claim: Claim){
      console.log('send claim');
      this.blockchainService.sendClaimDoctor(claim).subscribe(
        data=>{this.data=JSON.stringify(data); console.log('here',data)});
  
      // this.blockchainService.sendClaimDoctor(claim);
    }

    presentToast(data) {
      let toast = this.toastCtrl.create({
        message: 'here'+data,
        duration: 3000,
        position: 'top'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }


  
}
