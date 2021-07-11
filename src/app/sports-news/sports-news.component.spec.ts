import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsNewsComponent } from './sports-news.component';

describe('SportsNewsComponent', () => {
  let component: SportsNewsComponent;
  let fixture: ComponentFixture<SportsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
