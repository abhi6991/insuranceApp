import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Claim } from '../../app/models/claim.model';
import { BlockchainService } from '../../services/blockchain-service';

@Component({
  selector: 'page-medical-shop',
  templateUrl: 'medical-shop.html'
})
export class MedicalShopPage {
data = null;
  constructor(public navCtrl: NavController,
              private blockchainService: BlockchainService,
              private barcodeScanner: BarcodeScanner) {}
    scannedCode = null;
    expense = 0;
    approved = false;
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
        this.scannedCode.name,
        this.scannedCode.insuranceName,
        this.scannedCode.disease,
        this.scannedCode.medicine,
        this.expense
      );
      this.approved = true;  
      this.sendClaim(data);
      console.log(data);
    }

    sendClaim(claim: Claim){
      console.log('send claim');
      this.blockchainService.sendClaimStore(claim).subscribe(
        data=>{this.data=JSON.stringify(data); console.log('here',data)});
    }
}
