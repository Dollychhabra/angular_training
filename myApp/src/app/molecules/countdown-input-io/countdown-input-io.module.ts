import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownInputIoComponent } from './countdown-input-io.component';
import { ButtonModule } from '../../atoms/button/button.module';

@NgModule({
  declarations: [CountdownInputIoComponent],
  exports: [CountdownInputIoComponent],
  imports: [CommonModule,ButtonModule],
})
export class CountdownInputIoModule {}
