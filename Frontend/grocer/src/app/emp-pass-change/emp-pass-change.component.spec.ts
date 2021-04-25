import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPassChangeComponent } from './emp-pass-change.component';

describe('EmpPassChangeComponent', () => {
  let component: EmpPassChangeComponent;
  let fixture: ComponentFixture<EmpPassChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPassChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPassChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
