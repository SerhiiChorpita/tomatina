import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYourOwnComponent } from './create-your-own.component';

describe('CreateYourOwnComponent', () => {
  let component: CreateYourOwnComponent;
  let fixture: ComponentFixture<CreateYourOwnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateYourOwnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateYourOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
