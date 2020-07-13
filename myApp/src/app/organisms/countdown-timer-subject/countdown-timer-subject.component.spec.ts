import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerSubjectComponent } from './countdown-timer-subject.component';

describe('CountdownTimerSubjectComponent', () => {
  let component: CountdownTimerSubjectComponent;
  let fixture: ComponentFixture<CountdownTimerSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
