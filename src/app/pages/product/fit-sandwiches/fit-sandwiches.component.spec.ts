import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitSandwichesComponent } from './fit-sandwiches.component';

describe('FitSandwichesComponent', () => {
  let component: FitSandwichesComponent;
  let fixture: ComponentFixture<FitSandwichesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitSandwichesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitSandwichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
