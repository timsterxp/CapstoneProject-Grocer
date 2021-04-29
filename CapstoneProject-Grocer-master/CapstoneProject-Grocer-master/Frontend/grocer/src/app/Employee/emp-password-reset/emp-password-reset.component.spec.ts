import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPasswordResetComponent } from './emp-password-reset.component';

describe('EmpPasswordResetComponent', () => {
  let component: EmpPasswordResetComponent;
  let fixture: ComponentFixture<EmpPasswordResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPasswordResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
