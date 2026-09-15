import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc06 } from './exerc06';

describe('Exerc06', () => {
  let component: Exerc06;
  let fixture: ComponentFixture<Exerc06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc06],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc06);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
