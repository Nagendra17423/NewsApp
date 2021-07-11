import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponentComponent } from './news-component.component';

describe('NewsComponentComponent', () => {
  let component: NewsComponentComponent;
  let fixture: ComponentFixture<NewsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
