import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc07 } from './exerc07';

describe('Exerc07', () => {
  let component: Exerc07;
  let fixture: ComponentFixture<Exerc07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc07],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc07);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
