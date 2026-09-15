import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc09 } from './exerc09';

describe('Exerc09', () => {
  let component: Exerc09;
  let fixture: ComponentFixture<Exerc09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc09],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc09);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
