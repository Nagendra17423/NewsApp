import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthNewsComponent } from './health-news.component';

describe('HealthNewsComponent', () => {
  let component: HealthNewsComponent;
  let fixture: ComponentFixture<HealthNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
