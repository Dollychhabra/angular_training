import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from './atoms/button/button.module';
import { SelectModule } from './atoms/select/select.module';
import { FloatingBannerComponent } from './organisms/floating-banner/floating-banner.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: FloatingBannerComponent },
  {
    path: 'ecommerce',
    loadChildren: () =>
      import('./organisms/ecommerce/ecommerce.module').then(
        (m) => m.EcommerceModule
      ),
  },
  {
    path: 'countdown',
    loadChildren: () =>
      import(
        './organisms/countdown-timer-main-io/countdown-timer-main-io.module'
      ).then((m) => m.CountdownTimerMainIoModule),
  },
  {
    path: 'countdown-subject',
    loadChildren: () =>
      import(
        './organisms/countdown-timer-subject/countdown-timer-subject.module'
      ).then((m) => m.CountdownTimerSubjectModule),
  },
  {
    path: 'student-data',
    loadChildren: () =>
      import('./organisms/student-data/student-data.module').then(
        (m) => m.StudentDataModule
      ),
  },
  {
    path: 'dynamic-div',
    loadChildren: () =>
      import('./organisms/dynamic-div/dynamic-div.module').then(
        (m) => m.DynamicDivModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent, FloatingBannerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ButtonModule,
    SelectModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
