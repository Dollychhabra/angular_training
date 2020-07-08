import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() labelKey = 'label';
  @Input() idKey = 'id';
  @Input() options: Array<{ name: string; value: string }>;
  @Input() model;
  @Output('parentChange') parentChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(e) {
    this.parentChange.emit(e);
  }
}
