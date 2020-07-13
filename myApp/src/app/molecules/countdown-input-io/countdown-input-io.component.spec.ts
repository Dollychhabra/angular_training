import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownInputIoComponent } from './countdown-input-io.component';

describe('CountdownInputIoComponent', () => {
  let component: CountdownInputIoComponent;
  let fixture: ComponentFixture<CountdownInputIoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownInputIoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownInputIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
