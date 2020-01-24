import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullyLoadedComponent } from './fully-loaded.component';

describe('FullyLoadedComponent', () => {
  let component: FullyLoadedComponent;
  let fixture: ComponentFixture<FullyLoadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullyLoadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullyLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
