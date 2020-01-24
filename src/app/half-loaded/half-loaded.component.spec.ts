import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfLoadedComponent } from './half-loaded.component';

describe('HalfLoadedComponent', () => {
  let component: HalfLoadedComponent;
  let fixture: ComponentFixture<HalfLoadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfLoadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
