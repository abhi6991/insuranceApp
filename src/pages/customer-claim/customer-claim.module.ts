import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerClaimPage } from './customer-claim';

@NgModule({
  declarations: [
    CustomerClaimPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerClaimPage),
  ],
})
export class CustomerClaimPageModule {}
