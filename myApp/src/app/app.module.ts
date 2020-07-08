import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { IconComponent } from './atoms/icon/icon.component';
import { ButtonModule } from './atoms/button/button.module';
import { EcommerceModule } from './organisms/ecommerce/ecommerce.module';
import { SelectModule } from './atoms/select/select.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ButtonModule,
    SelectModule,
    EcommerceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
