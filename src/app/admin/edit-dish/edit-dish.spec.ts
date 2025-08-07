import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDish } from './edit-dish';

describe('EditDish', () => {
  let component: EditDish;
  let fixture: ComponentFixture<EditDish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDish);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
