import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicelistComponent } from '../components/invoicelist/invoicelist.component';
import { NewinvoiceComponent } from '../components/newinvoice/newinvoice.component';
import { RefundComponent } from '../components/refund/refund.component';

const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full'},
  { path: 'invoices', component: InvoicelistComponent },
  { path: 'newinvoice', component: NewinvoiceComponent },
  { path: 'refunds', component: RefundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [InvoicelistComponent]