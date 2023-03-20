import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicelistComponent } from '../components/invoicelist/invoicelist.component';
import { NewinvoiceComponent } from '../components/newinvoice/newinvoice.component'

const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full'},
  { path: 'invoices', component: InvoicelistComponent },
  { path: 'newinvoice', component: NewinvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InvoicelistComponent]