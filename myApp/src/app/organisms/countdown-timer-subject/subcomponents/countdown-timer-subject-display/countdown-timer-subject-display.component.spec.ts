import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerSubjectDisplayComponent } from './countdown-timer-subject-display.component';

describe('CountdownTimerSubjectDisplayComponent', () => {
  let component: CountdownTimerSubjectDisplayComponent;
  let fixture: ComponentFixture<CountdownTimerSubjectDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerSubjectDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerSubjectDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
