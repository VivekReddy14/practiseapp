import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service'

export class Invoiceformdata {
  constructor(
      public item : String, 
      public purpose : String,
      public price: Number  
  ) {}
}

@Component({
  selector: 'app-newinvoice',
  templateUrl: './newinvoice.component.html',
  styleUrls: ['./newinvoice.component.css']
})
export class NewinvoiceComponent {

  constructor(private _invoiceService: InvoiceService) {}

  newinvoice = new Invoiceformdata( '', '', 0)

  formsubmit = () => {
    this._invoiceService.createNewInvoice(this.newinvoice)
      .subscribe((response: any) => {
        console.log(response);
        if(response.success){
          alert('Invoice created successfully');
          this.newinvoice = new Invoiceformdata( '', '', 0)
        }
        else{
          alert("unable to create invoice");
        }
      })
  }

}
