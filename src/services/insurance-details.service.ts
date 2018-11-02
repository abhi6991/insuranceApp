import { Injectable } from '@angular/core';
import { Claim } from '../app/models/claim.model';
 
@Injectable()
export class InsuranceDetailService {
 approvedClaim: Claim;
  purchasedInsurances = [];
  insurances = [
    { 'name': 'Fidelity\'s Insurances', 
      'insuranceList': [
        {'name': 'Insurance1', 'diseaseCovered': ['disease1', 'disease2', 'disease3']},
        {'name': 'Insurance2', 'diseaseCovered': ['disease4', 'disease5', 'disease6']},
        {'name': 'Insurance3', 'diseaseCovered': ['disease5', 'disease6', 'disease7']}
    ]},
    {'name': 'Other Company\'s Insurances',
    'insuranceList': [
      {'name': 'Insurance1', 'diseaseCovered': ['disease1', 'disease2', 'disease3']},
      {'name': 'Insurance2', 'diseaseCovered': ['disease4', 'disease5', 'disease6']},
      {'name': 'Insurance3', 'diseaseCovered': ['disease5', 'disease6', 'disease7']}
  ]},
    {'name': 'Pooled Insurances',
    'insuranceList': [
      {'name': 'Insurance1', 'diseaseCovered': ['disease1', 'disease2', 'disease3']},
      {'name': 'Insurance2', 'diseaseCovered': ['disease4', 'disease5', 'disease6']},
      {'name': 'Insurance3', 'diseaseCovered': ['disease5', 'disease6', 'disease7']}
  ]},
    {'name': 'Custom Pooled Insurances',
    'insuranceList': [
      {'name': 'Insurance1', 'diseaseCovered': ['disease1', 'disease2', 'disease3']},
      {'name': 'Insurance2', 'diseaseCovered': ['disease4', 'disease5', 'disease6']},
      {'name': 'Insurance3', 'diseaseCovered': ['disease5', 'disease6', 'disease7']}
  ]}
  ];

    constructor() {
 
    }
 
}