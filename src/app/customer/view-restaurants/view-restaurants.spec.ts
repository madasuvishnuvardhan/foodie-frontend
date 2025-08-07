import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurants } from './view-restaurants';

describe('ViewRestaurants', () => {
  let component: ViewRestaurants;
  let fixture: ComponentFixture<ViewRestaurants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRestaurants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRestaurants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
