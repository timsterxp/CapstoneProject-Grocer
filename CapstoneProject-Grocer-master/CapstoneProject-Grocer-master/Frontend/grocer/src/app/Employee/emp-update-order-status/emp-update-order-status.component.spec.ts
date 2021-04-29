import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUpdateOrderStatusComponent } from './emp-update-order-status.component';

describe('EmpUpdateOrderStatusComponent', () => {
  let component: EmpUpdateOrderStatusComponent;
  let fixture: ComponentFixture<EmpUpdateOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpUpdateOrderStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpUpdateOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
