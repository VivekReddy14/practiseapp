import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css']
})
export class InvoicelistComponent implements OnInit {
  
  constructor(private _invoiceService: InvoiceService) {}

  listofinvoices:any = [];

  ngOnInit() {
    // Fetching list of invoices from invoiceService
    this._invoiceService.getAllInvoices()
      .subscribe(data => this.listofinvoices = data)
  }

  filters = ["All invoices", "Pending invoices", "Paid invoices", "Cancelled invoices"];

  statusMap = [
    "Payment Pending",
    "Payment done",
    "Payment link expired"
  ]

  filterindexselected = 0;

  // To get list of invoices according the filter selected, deafult all invoices 
  getfilteredinvoices = () => {
    if(this.filterindexselected === 0) return this.listofinvoices
    return this.listofinvoices.filter((invoice:any) => invoice.status === this.filterindexselected);
  }

  // Changing filterindexselecting on click event
  filterClickFunction = (index: number) => {
    this.filterindexselected = index
  }

  // TO redirect to payment gateway on paying clickbutton
  paymentFunction = (invoice: any) => {
    // Check whether payment link is already in the invoice object fetched 
    if(invoice.ispaymentlinkgenerated && invoice?.paymentmeta?.paymentlink !== undefined){
      window.location.href = invoice?.paymentmeta?.paymentlink 
    }
    // If not call payment API through invoiceservice and redirect to the payment link
    else{
      this._invoiceService.generatepaymentlink(invoice._id, {
        "purpose" : invoice.purpose,
        "amount" : invoice.price
      })
      .subscribe((response) => {
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
