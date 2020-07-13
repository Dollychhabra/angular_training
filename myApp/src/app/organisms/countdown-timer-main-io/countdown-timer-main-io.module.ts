import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerMainIoComponent } from './countdown-timer-main-io.component';
import { ButtonModule } from '../../atoms/button/button.module';
import { FormsModule } from '@angular/forms';
import { CountdownInputIoModule } from '../../molecules/countdown-input-io/countdown-input-io.module';
import { CountdownTimerIoModule } from '../../molecules/countdown-timer-io/countdown-timer-io.module';
import { CountdownTimestampIoModule } from '../../molecules/countdown-timestamp-io/countdown-timestamp-io.module';
import { StartPauseClickIoModule } from '../../molecules/start-pause-click-io/start-pause-click-io.module';
import {CountdownTimerMainRoutingModule} from './countdown-timer-main-routing.moudle'

@NgModule({
  declarations: [CountdownTimerMainIoComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    CountdownInputIoModule,
    CountdownTimerIoModule,
    CountdownTimestampIoModule,
    StartPauseClickIoModule,
    CountdownTimerMainRoutingModule,
  ],
  exports: [CountdownTimerMainIoComponent],
})
export class CountdownTimerMainIoModule {}
