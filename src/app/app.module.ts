import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CustomerPage } from '../pages/customer/customer';
import { DoctorPage } from '../pages/doctor/doctor';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MedicalShopPage } from '../pages/medical-shop/medical-shop';
import { InsuranceListPage } from '../pages/insurance-list/insurance-list';
import { InsuranceDetailService } from '../services/insurance-details.service';
import { CustomerClaimPage } from '../pages/customer-claim/customer-claim';
import { FormsModule } from '@angular/forms';
import { MedicineClaimPage } from '../pages/medicine-claim/medicine-claim';
import { HttpClientModule } from '@angular/common/http';
import { BlockchainService } from '../services/blockchain-service';

@NgModule({
  declarations: [
    MyApp,
    CustomerPage,
    DoctorPage,
    LoginPage,
    TabsPage,
    MedicalShopPage,
    InsuranceListPage,
    CustomerClaimPage,
    MedicineClaimPage
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomerPage,
    DoctorPage,
    LoginPage,
    TabsPage,
    MedicalShopPage,
    CustomerClaimPage,
    InsuranceListPage,
    MedicineClaimPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    BlockchainService,
    InsuranceDetailService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
