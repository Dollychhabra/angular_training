import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerSubjectTimestampComponent } from './countdown-timer-subject-timestamp.component';

describe('CountdownTimerSubjectTimestampComponent', () => {
  let component: CountdownTimerSubjectTimestampComponent;
  let fixture: ComponentFixture<CountdownTimerSubjectTimestampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerSubjectTimestampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerSubjectTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
