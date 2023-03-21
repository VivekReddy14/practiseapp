import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoiceformdata } from '../components/newinvoice/newinvoice.component'

// Creating a service to make API calls to my backend service and 
// making this injectable so that other comonents can access the data using dependency injection 

@Injectable()

export class InvoiceService {
    
    baseurl = "https://invoicepay.onrender.com/";

    constructor(private http: HttpClient) {}

    getAllInvoices(): Observable<any> {
        return this.http.get<any>(this.baseurl+'invoice/getallinvoices')
    }

    generatepaymentlink(invoiceid: String, paymentdata: any): Observable<any> {
        return this.http.post<any>(this.baseurl+'payment/newpaymentrequest', {invoiceid, paymentdata})
    }

    createNewInvoice( invoicedata: Invoiceformdata ) {
        return this.http.post<any>(this.baseurl+'invoice/createinvoice', invoicedata)
    }

    raiserefundwithinvoiceid(refunddata:any) {
        return this.http.post<any>(this.baseurl+'payment/initiateRefund', refunddata)
    }
}