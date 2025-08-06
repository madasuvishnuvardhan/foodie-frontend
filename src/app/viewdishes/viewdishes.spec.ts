import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewdishes } from './viewdishes';

describe('Viewdishes', () => {
  let component: Viewdishes;
  let fixture: ComponentFixture<Viewdishes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewdishes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewdishes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
