import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountdownTimerSubjectService } from '../../countdown-timer-subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer-subject-clicks',
  templateUrl: './countdown-timer-subject-clicks.component.html',
  styleUrls: ['./countdown-timer-subject-clicks.component.css'],
})
export class CountdownTimerSubjectClicksComponent implements OnInit, OnDestroy {
  startCount: number;
  pauseCount: number;
  subscription: Subscription;

  constructor(private messageService: CountdownTimerSubjectService) {}

  ngOnInit(): void {
    this.subscription = this.messageService.subCount.subscribe((message) => {
      if (message) {
        this.startCount = message.startCount;
        this.pauseCount = message.pauseCount;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
