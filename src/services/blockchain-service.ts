import { Injectable } from '@angular/core';
import { Claim } from '../app/models/claim.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlockchainService {
    BASE_URL = 'http://192.168.43.190:8081';
    constructor(private http: HttpClient){

    }

    sendClaimDoctor(claim: Claim): Observable<Claim> {
        return this.http.post<Claim>(this.BASE_URL+'/2/claim', claim);
    }

    sendClaimStore(claim: Claim): Observable<Claim> {
        return this.http.post<Claim>(this.BASE_URL+'/3/claim', claim);
    }

    getClaimStore(): Observable<Claim> {
        return this.http.get<Claim>(this.BASE_URL+'/1/medicine');
    }
}    