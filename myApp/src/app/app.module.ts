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
import {FloatingBannerComponent} from './organisms/floating-banner/floating-banner.component';
import { StudentDataModule } from './organisms/student-data/student-data.module';

@NgModule({
  declarations: [AppComponent, FloatingBannerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ButtonModule,
    SelectModule,
    EcommerceModule,
    StudentDataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
