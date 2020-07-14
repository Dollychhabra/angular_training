import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerSubjectComponent } from './countdown-timer-subject.component';
import { CountdownTimerSubjectDisplayModule } from './subcomponents/countdown-timer-subject-display/countdown-timer-subject-display.module';
import { ButtonModule } from '../../atoms/button/button.module';
import { Routes, RouterModule } from '@angular/router';
import { CountdownTimerSubjectInputModule } from './subcomponents/countdown-timer-subject-input/countdown-timer-subject-input.module';
import { CountdownTimerSubjectTimestampModule } from './subcomponents/countdown-timer-subject-timestamp/countdown-timer-subject-timestamp.module';
import { CountdownTimerSubjectClicksModule } from './subcomponents/countdown-timer-subject-clicks/countdown-timer-subject-clicks.module';

const routes: Routes = [
  { path: '', component: CountdownTimerSubjectComponent },
];

@NgModule({
  declarations: [CountdownTimerSubjectComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CountdownTimerSubjectDisplayModule,
    CountdownTimerSubjectInputModule,
    CountdownTimerSubjectTimestampModule,
    CountdownTimerSubjectClicksModule,
    RouterModule.forChild(routes),
  ],
  exports: [CountdownTimerSubjectComponent, RouterModule],
})
export class CountdownTimerSubjectModule {}
