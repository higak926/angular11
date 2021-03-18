import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSTrainingComponent } from './jstraining.component';

describe('JSTrainingComponent', () => {
  let component: JSTrainingComponent;
  let fixture: ComponentFixture<JSTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JSTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JSTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
