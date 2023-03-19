import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class InvoiceService {
    
    baseurl = "http://localhost:9899/";

    constructor(private http: HttpClient) {}

    getAllInvoices(): Observable<any> {
        return this.http.get<any>(this.baseurl+'invoice/getallinvoices')
    }

    generatepaymentlink(invoiceid: String, paymentdata: any): Observable<any> {
        return this.http.post<any>(this.baseurl+'payment/newpaymentrequest', {invoiceid, paymentdata})
    }

}