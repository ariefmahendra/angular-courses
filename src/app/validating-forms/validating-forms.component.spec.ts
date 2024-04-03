import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatingFormsComponent } from './validating-forms.component';

describe('ValidatingFormsComponent', () => {
  let component: ValidatingFormsComponent;
  let fixture: ComponentFixture<ValidatingFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatingFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
