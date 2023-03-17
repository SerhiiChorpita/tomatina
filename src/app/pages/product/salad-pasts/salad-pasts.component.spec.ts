import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladPastsComponent } from './salad-pasts.component';

describe('SaladPastsComponent', () => {
  let component: SaladPastsComponent;
  let fixture: ComponentFixture<SaladPastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladPastsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaladPastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
