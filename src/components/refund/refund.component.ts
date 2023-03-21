import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent {

  filters = ['Make refund request', 'Refunded bills'];

  constructor(private _invoiceService: InvoiceService) {}

  listofinvoices:any = [];

  ngOnInit() {
    // Fetching list of invoices from invoiceService
    this._invoiceService.getAllInvoices()
      .subscribe(data => this.listofinvoices = data)
  }

  statusMap = [
    "Payment Pending",
    "Payment done",
    "Payment link expired",
    "Refund inititated",
    "Refund completed",
  ]

  filterindexselected = 0;

  // To get list of invoices according the filter selected, deafult all invoices 
  getfilteredinvoices = () => {
    if(this.filterindexselected === 0){
      return this.listofinvoices.filter((invoice:any) => invoice.status === 2);
    } 
    else{
      return this.listofinvoices.filter((invoice:any) => invoice.status === 4 || invoice.status === 5);
    }
    
  }

  // Changing filterindexselecting on click event
  filterClickFunction = (index: number) => {
    this.filterindexselected = index
  }

  raiserefund = (invoice:any) => {
    console.log(invoice)
    const refunddata = {
      "payment_id" : invoice.paymentmeta.payment_id,
      "type" : "TNR",
      "reason" : "Xyz",
      "amount" : invoice.price
    }
    this._invoiceService.raiserefundwithinvoiceid(refunddata)
      .subscribe(data => console.log(data));
  }

}
