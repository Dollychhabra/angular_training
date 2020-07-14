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
import { FloatingBannerComponent } from './organisms/floating-banner/floating-banner.component';
import { StudentDataModule } from './organisms/student-data/student-data.module';
import { CountdownTimerMainIoModule } from './organisms/countdown-timer-main-io/countdown-timer-main-io.module';
import { Routes, RouterModule } from '@angular/router';
import { DynamicDivModule } from './organisms/dynamic-div/dynamic-div.module';
import { CountdownTimerSubjectModule } from './organisms/countdown-timer-subject/countdown-timer-subject.module';

const appRoutes: Routes = [{ path: '', component: FloatingBannerComponent }];

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
    StudentDataModule,
    CountdownTimerMainIoModule,
    DynamicDivModule,
    CountdownTimerSubjectModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
