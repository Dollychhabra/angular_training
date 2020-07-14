import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerSubjectClicksComponent } from './countdown-timer-subject-clicks.component';

describe('CountdownTimerSubjectClicksComponent', () => {
  let component: CountdownTimerSubjectClicksComponent;
  let fixture: ComponentFixture<CountdownTimerSubjectClicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerSubjectClicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerSubjectClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
