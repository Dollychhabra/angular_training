import { Component, OnInit } from '@angular/core';
import { CountdownTimerSubjectService } from '../../../organisms/countdown-timer-subject/countdown-timer-subject.service';

@Component({
  selector: 'app-countdown-timer-subject-timestamp',
  templateUrl: './countdown-timer-subject-timestamp.component.html',
  styleUrls: ['./countdown-timer-subject-timestamp.component.css'],
})
export class CountdownTimerSubjectTimestampComponent implements OnInit {
  timestampArr: Array<any> = [];

  constructor(private messageService: CountdownTimerSubjectService) {}

  ngOnInit(): void {
    this.messageService.subTimestamp.subscribe((message) => {
      if (message) {
        if (this.timestampArr.length > 4) this.timestampArr.shift();
        this.timestampArr.push(message.str + ' ' + message.timestamp);
      } else {
        this.timestampArr = [];
      }
    });
  }
}
