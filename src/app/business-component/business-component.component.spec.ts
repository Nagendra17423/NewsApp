import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessComponentComponent } from './business-component.component';

describe('BusinessComponentComponent', () => {
  let component: BusinessComponentComponent;
  let fixture: ComponentFixture<BusinessComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
