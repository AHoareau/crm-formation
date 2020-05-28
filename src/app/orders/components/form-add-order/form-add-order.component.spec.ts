import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddOrderComponent } from './form-add-order.component';

describe('FormAddOrderComponent', () => {
  let component: FormAddOrderComponent;
  let fixture: ComponentFixture<FormAddOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
