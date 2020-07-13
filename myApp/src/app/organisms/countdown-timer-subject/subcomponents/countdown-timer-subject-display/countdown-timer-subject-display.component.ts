import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerSubjectService } from '../../countdown-timer-subject.service';

@Component({
  selector: 'app-countdown-timer-subject-display',
  templateUrl: './countdown-timer-subject-display.component.html',
  styleUrls: ['./countdown-timer-subject-display.component.css'],
})
export class CountdownTimerSubjectDisplayComponent implements OnInit {
  messages: any[] = [];
  timeLeft: number;
  subscription: Subscription;

  constructor(private messageService: CountdownTimerSubjectService) {}

  ngOnInit() {
    this.messageService.subject.subscribe((message) => {
      if (message) {
        this.timeLeft = message.timer;
      }
    });
  }

  // ngOnDestroy() {
  //   // unsubscribe to ensure no memory leaks
  //   this.subscription.unsubscribe();
  // }
}
