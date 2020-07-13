import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimestampIoComponent } from './countdown-timestamp-io.component';

describe('CountdownTimestampIoComponent', () => {
  let component: CountdownTimestampIoComponent;
  let fixture: ComponentFixture<CountdownTimestampIoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimestampIoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimestampIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
