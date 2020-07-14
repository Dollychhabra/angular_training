import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { getTimestamp } from '../../util';

@Injectable({
  providedIn: 'root',
})
export class CountdownTimerSubjectService {
  timeLeft: number = 1000;
  flagTimer: boolean = false;
  interval: any;
  startDateStr: string = 'Started at';
  pausedDateStr: string = 'Paused at';
  startCount: number = 0;
  pauseCount: number = 0;

  subject = new Subject<any>();
  subTimestamp = new Subject<any>();
  subCount = new Subject<any>();

  constructor() {}

  setMessage(message: number) {
    this.timeLeft = this.timeLeft || message;
    if (this.timeLeft) {
      if (this.flagTimer === false) {
        this.subTimestamp.next({
          timestamp: getTimestamp(),
          str: this.startDateStr,
        });
        this.startCount = this.startCount + 1;
        this.subCount.next({
          startCount: this.startCount,
          pauseCount: this.pauseCount,
        });

        this.flagTimer = true;
        this.interval = setInterval(() => {
          if (this.timeLeft > 0) {
            this.subject.next({ timer: this.timeLeft-- });
          } else {
            this.subject.next({ timer: this.timeLeft });
          }
        }, 1000);
      } else {
        this.flagTimer = false;
        clearInterval(this.interval);
        this.subTimestamp.next({
          timestamp: getTimestamp(),
          str: this.pausedDateStr,
        });
        this.pauseCount = this.pauseCount + 1;
        this.subCount.next({
          startCount: this.startCount,
          pauseCount: this.pauseCount,
        });
      }
    }
  }

  clearMessages() {
    clearInterval(this.interval);
    this.timeLeft = null;
    this.subject.next({});
    this.startCount = 0;
    this.pauseCount = 0;
    this.subCount.next({});
    this.subTimestamp.next();
    this.flagTimer = false;
  }
}
