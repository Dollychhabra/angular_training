import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseClickIoComponent } from './start-pause-click-io.component';

describe('StartPauseClickIoComponent', () => {
  let component: StartPauseClickIoComponent;
  let fixture: ComponentFixture<StartPauseClickIoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPauseClickIoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseClickIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
