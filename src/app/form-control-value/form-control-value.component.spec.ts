import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlValueComponent } from './form-control-value.component';

describe('FormControlValueComponent', () => {
  let component: FormControlValueComponent;
  let fixture: ComponentFixture<FormControlValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormControlValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
