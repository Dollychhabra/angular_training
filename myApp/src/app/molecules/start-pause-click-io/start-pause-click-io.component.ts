import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start-pause-click-io',
  templateUrl: './start-pause-click-io.component.html',
  styleUrls: ['./start-pause-click-io.component.css'],
})
export class StartPauseClickIoComponent implements OnInit {
  @Input() startCount: number;
  @Input() pauseCount: number;

  constructor() {}

  ngOnInit(): void {}
}
