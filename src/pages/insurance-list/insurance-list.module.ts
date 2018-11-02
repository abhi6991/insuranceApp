import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsuranceListPage } from './insurance-list';

@NgModule({
  declarations: [
    InsuranceListPage,
  ],
  imports: [
    IonicPageModule.forChild(InsuranceListPage),
  ],
})
export class InsuranceListPageModule {}
