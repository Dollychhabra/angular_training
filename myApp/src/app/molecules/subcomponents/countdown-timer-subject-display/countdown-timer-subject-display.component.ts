import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerSubjectService } from '../../../organisms/countdown-timer-subject/countdown-timer-subject.service';
import { getTimestamp } from '../../../util';

@Component({
  selector: 'app-countdown-timer-subject-display',
  templateUrl: './countdown-timer-subject-display.component.html',
  styleUrls: ['./countdown-timer-subject-display.component.css'],
})
export class CountdownTimerSubjectDisplayComponent
  implements OnInit, OnDestroy {
  messages: any[] = [];
  timeLeft: number;
  subscription: Subscription;
  interval: any;
  flagTimer: boolean = false;
  startDateStr: string = 'Started at';
  pausedDateStr: string = 'Paused at';
  startCount: number = 0;
  pauseCount: number = 0;

  constructor(private messageService: CountdownTimerSubjectService) {}

  ngOnInit() {
    this.subscription = this.messageService.subject.subscribe((message) => {
      if (message && message.reset === true) {
        clearInterval(this.interval);
        this.timeLeft = null;
        this.startCount = 0;
        this.pauseCount = 0;
      } else {
        this.timeLeft = this.timeLeft || message.timer;
      }
      if (this.timeLeft) {
        if (this.flagTimer === false) {
          this.flagTimer = true;
          this.messageService.setSubTimstamp({
            timestamp: getTimestamp(),
            str: this.startDateStr,
          });
          this.startCount = this.startCount + 1;
          this.messageService.setCount(this.startCount, this.pauseCount);
          this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
              this.timeLeft = this.timeLeft - 1;
            } else {
              this.timeLeft;
              clearInterval(this.interval);
            }
          }, 1000);
        } else {
          this.flagTimer = false;
          clearInterval(this.interval);
          this.messageService.pausedAt(this.timeLeft);
          this.pauseCount = this.pauseCount + 1;
          this.messageService.setCount(this.startCount, this.pauseCount);
          this.messageService.setSubTimstamp({
            timestamp: getTimestamp(),
            str: this.pausedDateStr,
          });
        }
        this.messageService.getTimeLeft(this.interval);
      }
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    this.subscription.unsubscribe();
  }
}
