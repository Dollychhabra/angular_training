import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerSubjectService } from '../../../organisms/countdown-timer-subject/countdown-timer-subject.service';

@Component({
  selector: 'app-countdown-timer-subject-display',
  templateUrl: './countdown-timer-subject-display.component.html',
  styleUrls: ['./countdown-timer-subject-display.component.css'],
})
export class CountdownTimerSubjectDisplayComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  timeLeft: number;
  subscription: Subscription;

  constructor(private messageService: CountdownTimerSubjectService) {}

  ngOnInit() {
    this.subscription = this.messageService.subject.subscribe((message) => {
      if (message) {
        this.timeLeft = message.timer;
      }
    });
  }

  ngOnDestroy() {
    clearInterval(this.timeLeft)
    this.subscription.unsubscribe();
  }
}
