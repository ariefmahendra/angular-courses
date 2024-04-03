import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferableViewsComponent } from './deferable-views.component';

describe('DeferableViewsComponent', () => {
  let component: DeferableViewsComponent;
  let fixture: ComponentFixture<DeferableViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferableViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferableViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
