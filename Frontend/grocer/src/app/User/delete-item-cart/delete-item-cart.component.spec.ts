import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemCartComponent } from './delete-item-cart.component';

describe('DeleteItemCartComponent', () => {
  let component: DeleteItemCartComponent;
  let fixture: ComponentFixture<DeleteItemCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteItemCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
