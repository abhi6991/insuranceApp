import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicineClaimPage } from './medicine-claim';

@NgModule({
  declarations: [
    MedicineClaimPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicineClaimPage),
  ],
})
export class MedicineClaimPageModule {}
