import { Component, OnInit } from '@angular/core';
import { CountdownTimerSubjectService } from '../../countdown-timer-subject.service';

@Component({
  selector: 'app-countdown-timer-subject-clicks',
  templateUrl: './countdown-timer-subject-clicks.component.html',
  styleUrls: ['./countdown-timer-subject-clicks.component.css'],
})
export class CountdownTimerSubjectClicksComponent implements OnInit {
  startCount: number;
  pauseCount: number;

  constructor(private messageService: CountdownTimerSubjectService) {}

  ngOnInit(): void {
    this.messageService.subCount.subscribe((message) => {
      if (message) {
        this.startCount = message.startCount;
        this.pauseCount = message.pauseCount;
      }
    });
  }
}
