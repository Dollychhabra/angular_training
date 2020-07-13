import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CountdownTimerSubjectService } from '../../countdown-timer-subject.service';

@Component({
  selector: 'app-countdown-timer-subject-input',
  templateUrl: './countdown-timer-subject-input.component.html',
  styleUrls: ['./countdown-timer-subject-input.component.css'],
})
export class CountdownTimerSubjectInputComponent implements OnInit {
  countdown: number;

  @ViewChild('countdown', { static: true }) input: ElementRef;

  constructor(private messageService: CountdownTimerSubjectService) {}

  ngOnInit(): void {}

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.setMessage(this.input.nativeElement.value);
  }

  onClickReset(): void {
    this.messageService.clearMessages();
  }
}
