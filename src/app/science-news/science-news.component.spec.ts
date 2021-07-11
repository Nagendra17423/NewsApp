import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceNewsComponent } from './science-news.component';

describe('ScienceNewsComponent', () => {
  let component: ScienceNewsComponent;
  let fixture: ComponentFixture<ScienceNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
