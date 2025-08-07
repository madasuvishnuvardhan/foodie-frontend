import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDishes } from './view-dishes';

describe('ViewDishes', () => {
  let component: ViewDishes;
  let fixture: ComponentFixture<ViewDishes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDishes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDishes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
