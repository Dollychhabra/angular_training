import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownTimerSubjectService } from './countdown-timer-subject.service';

@Component({
  selector: 'app-countdown-timer-subject',
  templateUrl: './countdown-timer-subject.component.html',
  styleUrls: ['./countdown-timer-subject.component.css'],
  providers: [CountdownTimerSubjectService],
})
export class CountdownTimerSubjectComponent implements OnInit {
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: CountdownTimerSubjectService) {}

  ngOnInit() {}

  // sendMessage(): void {
  //   // send message to subscribers via observable subject
  //   this.messageService.sendMessage(this.input.nativeElement.value);
  // }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }
}
