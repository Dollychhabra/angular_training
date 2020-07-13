import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimestampIoComponent } from './countdown-timestamp-io.component';

@NgModule({
  declarations: [CountdownTimestampIoComponent],
  imports: [CommonModule],
  exports: [CountdownTimestampIoComponent],
})
export class CountdownTimestampIoModule {}
