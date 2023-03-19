import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private _invoiceService: InvoiceService) {}

  listofinvoices:any = [];

  ngOnInit() {
    this._invoiceService.getAllInvoices()
      .subscribe(data => this.listofinvoices = data)
  }

  filters = ["All invoices", "Pending invoices", "Paid invoices", "Cancelled invoices"];

  statusMap = [
    "Payment Pending",
    "Payment done",
    "Payment link expired"
  ]

  filterindexselected: number = 0;

  getfilteredinvoices = () => {
    if(this.filterindexselected === 0) return this.listofinvoices
    return this.listofinvoices.filter((invoice:any) => invoice.status === this.filterindexselected);
  }

  filterClickFunction = (index: number) => {
    this.filterindexselected = index
  }

  paymentFunction = (invoice: any) => {
    console.log(invoice)
    if(invoice.ispaymentlinkgenerated && invoice?.paymentmeta?.paymentlink !== undefined){
      window.location.href = invoice?.paymentmeta?.paymentlink 
    }
    else{
      this._invoiceService.generatepaymentlink(invoice._id, {
        "purpose" : invoice.purpose,
        "amount" : invoice.price
    })
      .subscribe((response) => {
        console.log(response);
        if(response.success){
          window.location.href = response.payment_request.longurl
        }
        else{
          alert('Problem in creating payment link');
        }
      })
    }
  }

}
