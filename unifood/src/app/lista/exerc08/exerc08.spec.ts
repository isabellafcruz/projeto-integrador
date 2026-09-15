import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc08 } from './exerc08';

describe('Exerc08', () => {
  let component: Exerc08;
  let fixture: ComponentFixture<Exerc08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc08],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc08);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
