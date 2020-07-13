import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerIoComponent } from './countdown-timer-io.component';

@NgModule({
  declarations: [CountdownTimerIoComponent],
  imports: [CommonModule],
  exports: [CountdownTimerIoComponent],
})
export class CountdownTimerIoModule {}
