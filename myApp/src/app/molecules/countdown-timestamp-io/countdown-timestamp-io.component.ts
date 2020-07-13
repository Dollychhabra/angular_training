import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timestamp-io',
  templateUrl: './countdown-timestamp-io.component.html',
  styleUrls: ['./countdown-timestamp-io.component.css'],
})
export class CountdownTimestampIoComponent implements OnInit {
  @Input() time: any;
  constructor() {}

  ngOnInit(): void {}
}
