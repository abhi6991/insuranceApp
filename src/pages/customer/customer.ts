import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
 
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class CustomerPage {
  qrData = {
    name: '',
    disease: ''
  };
  createdCodeObject = null;
  createdCode = null;
  scannedCode = null;
 
  constructor(private barcodeScanner: BarcodeScanner) { }
 
  createCode() {
    console.log(this.qrData);
    this.createdCode = this.qrData;
    this.createdCodeObject = JSON.stringify(this.qrData);
    console.log(this.createdCodeObject);
  }
 
 
 
}