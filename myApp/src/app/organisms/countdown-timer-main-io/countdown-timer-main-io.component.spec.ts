import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerIoComponent } from './countdown-timer-main-io.component';

describe('CountdownTimerMainIoComponent', () => {
  let component: CountdownTimerIoComponent;
  let fixture: ComponentFixture<CountdownTimerIoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerIoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
