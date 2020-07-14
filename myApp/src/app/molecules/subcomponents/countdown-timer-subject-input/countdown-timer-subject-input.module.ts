import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerSubjectInputComponent } from './countdown-timer-subject-input.component';
import { ButtonModule } from '../../../atoms/button/button.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CountdownTimerSubjectInputComponent],
  imports: [CommonModule, ButtonModule, FormsModule],
  exports: [CountdownTimerSubjectInputComponent],
})
export class CountdownTimerSubjectInputModule {}
