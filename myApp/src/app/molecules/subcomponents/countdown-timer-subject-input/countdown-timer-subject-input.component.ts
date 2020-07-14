import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { CountdownTimerSubjectService } from '../../../organisms/countdown-timer-subject/countdown-timer-subject.service';
import { Subscription } from 'rxjs';
import { consoleTestResultHandler } from 'tslint/lib/test';

@Component({
  selector: 'app-countdown-timer-subject-input',
  templateUrl: './countdown-timer-subject-input.component.html',
  styleUrls: ['./countdown-timer-subject-input.component.css'],
})
export class CountdownTimerSubjectInputComponent implements OnInit {
  countdown: number;
  subscription: Subscription;
  value: number;
  timeLeftArr: Array<any> = [];

  // @ViewChild('countdown', { static: true }) input: ElementRef;

  constructor(private messageService: CountdownTimerSubjectService) {}

  ngOnInit(): void {
    this.subscription = this.messageService.subPaused.subscribe((message) => {
      if (message) {
        if (this.timeLeftArr.length > 4) this.timeLeftArr.shift();
        this.timeLeftArr.push(message.timer);
      } else {
        this.timeLeftArr = [];
      }
    });
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.setMessage(this.countdown);
  }

  onClickReset(): void {
    this.countdown = null;
    this.messageService.clearMessages();
  }
}
