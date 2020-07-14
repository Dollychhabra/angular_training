import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerSubjectInputComponent } from './countdown-timer-subject-input.component';
import { ButtonModule } from '../../../../atoms/button/button.module';

@NgModule({
  declarations: [CountdownTimerSubjectInputComponent],
  imports: [CommonModule, ButtonModule],
  exports: [CountdownTimerSubjectInputComponent],
})
export class CountdownTimerSubjectInputModule {}
