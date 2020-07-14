import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerSubjectInputComponent } from './countdown-timer-subject-input.component';

describe('CountdownTimerSubjectInputComponent', () => {
  let component: CountdownTimerSubjectInputComponent;
  let fixture: ComponentFixture<CountdownTimerSubjectInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerSubjectInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerSubjectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
