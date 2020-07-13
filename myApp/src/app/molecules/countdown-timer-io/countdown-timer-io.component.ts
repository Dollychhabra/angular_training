import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-io',
  templateUrl: './countdown-timer-io.component.html',
  styleUrls: ['./countdown-timer-io.component.css'],
})
export class CountdownTimerIoComponent implements OnInit {
  @Input() timerValue: number;
  constructor() {}

  ngOnInit(): void {
  }
}
