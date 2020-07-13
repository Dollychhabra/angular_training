import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-countdown-input-io',
  templateUrl: './countdown-input-io.component.html',
  styleUrls: ['./countdown-input-io.component.css'],
})
export class CountdownInputIoComponent implements OnInit {
  @Output('startFunc') startFunc: EventEmitter<any> = new EventEmitter();
  @Output('reset') reset: EventEmitter<any> = new EventEmitter();
  @ViewChild('countdown', { static: true }) input: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.startFunc.emit(this.input.nativeElement.value);
  }

  onClickReset() {
    this.input.nativeElement.value = null;
    this.reset.emit();
  }
}
