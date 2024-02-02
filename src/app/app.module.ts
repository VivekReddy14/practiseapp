import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceService } from '../services/invoice.service';
import { InvoicelistComponent } from '../components/invoicelist/invoicelist.component';
import { NewinvoiceComponent } from '../components/newinvoice/newinvoice.component';
import { RefundComponent } from '../components/refund/refund.component';
import { LoginModule } from '../modules/login/login.module';
import { GatewayModule } from '../modules/gateway/gateway.module';
import { SharedModuleModule } from 'src/modules/shared-module/shared-module.module';


@NgModule({
  declarations: [
    AppComponent,
    InvoicelistComponent,
    NewinvoiceComponent,
    RefundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModuleModule,
    LoginModule,
    GatewayModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
