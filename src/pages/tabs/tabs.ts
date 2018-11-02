import { Component } from '@angular/core';

import { CustomerPage } from '../customer/customer';
import { DoctorPage } from '../doctor/doctor';
import { LoginPage } from '../login/login';
import { InsuranceListPage } from '../insurance-list/insurance-list';
import { CustomerClaimPage } from '../customer-claim/customer-claim';
import { MedicineClaimPage } from '../medicine-claim/medicine-claim';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InsuranceListPage;
  tab2Root = CustomerClaimPage;
  tab3Root = MedicineClaimPage;

  constructor() {

  }
}
