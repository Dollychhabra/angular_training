import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { getTimestamp } from '../../util';

@Component({
  selector: 'app-countdown-timer-main-io',
  templateUrl: './countdown-timer-main-io.component.html',
  styleUrls: ['./countdown-timer-main-io.component.scss'],
})
export class CountdownTimerMainIoComponent implements OnInit {
  countdown: number;
  flagTimer: string = 'pause';
  interval;
  timeLeft: number;
  startCount: number = 0;
  pauseCount: number = 0;
  date;
  dateStr: string;
  startDateStr: string = 'Started at ';
  pausedDateStr: string = 'Paused at ';
  time;
  timestamp: Array<any> = [];
  pausedAtArr: Array<any> = [];
  constructor() {}

  ngOnInit(): void {}

  startTime(value): void {
    this.timeLeft = this.timeLeft || value;
    if (this.timeLeft) {
      if (this.flagTimer === 'start') {
        this.getTimestampArray(this.pausedDateStr);
        this.pauseCount = this.pauseCount + 1;
        this.getPausedArray();
        clearInterval(this.interval);
        this.flagTimer = 'pause';
      } else {
        this.getTimestampArray(this.startDateStr);
        this.startCount = this.startCount + 1;
        this.flagTimer = 'start';
        this.start();
      }
    }
  }

  start(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft;
      }
    }, 1000);
  }

  getPausedArray() {
    if (this.pausedAtArr.length > 2) this.pausedAtArr.shift();
    this.pausedAtArr.push(this.timeLeft);
  }

  getTimestampArray(str) {
    this.dateStr = getTimestamp();
    if (this.timestamp.length > 4) this.timestamp.shift();
    this.timestamp.push(str + this.dateStr);
  }

  reset() {
    clearInterval(this.interval);
    this.timeLeft = null;
    this.dateStr = ' ';
    this.startCount = 0;
    this.pauseCount = 0;
    this.timestamp = [];
    this.flagTimer = 'pause';
    this.pausedAtArr = [];
  }
}
