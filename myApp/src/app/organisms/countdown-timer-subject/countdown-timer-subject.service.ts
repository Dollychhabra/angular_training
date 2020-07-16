import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { getTimestamp } from '../../util';

@Injectable({
  providedIn: 'root',
})
export class CountdownTimerSubjectService {
  interval: any;

  subject = new Subject<any>();
  subTimestamp = new Subject<any>();
  subCount = new Subject<any>();
  subPaused = new Subject<any>();

  constructor() {}

  setTimer(message: number) {
    this.subject.next({ timer: message });
  }

  setSubTimstamp(message) {
    this.subTimestamp.next(message);
  }

  setCount(start, pause) {
    this.subCount.next({ startCount: start, pauseCount: pause });
  }

  pausedAt(message) {
    this.subPaused.next({ timer: message });
  }

  getTimeLeft(interval) {
    this.interval = interval;
  }

  clearMessages() {
    // this.timeLeft = null;
    this.subject.next({ reset: true });
    this.subCount.next();
    this.subTimestamp.next();
    this.subPaused.next();
    // this.flagTimer = false;
  }
}
