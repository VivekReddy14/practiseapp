import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceService } from '../services/invoice.service';
import { InvoicelistComponent } from '../components/invoicelist/invoicelist.component';
import { NewinvoiceComponent } from '../components/newinvoice/newinvoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicelistComponent,
    NewinvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
