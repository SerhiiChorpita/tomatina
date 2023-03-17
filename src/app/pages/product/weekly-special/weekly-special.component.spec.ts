import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySpecialComponent } from './weekly-special.component';

describe('WeeklySpecialComponent', () => {
  let component: WeeklySpecialComponent;
  let fixture: ComponentFixture<WeeklySpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklySpecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
