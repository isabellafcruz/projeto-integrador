import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc03 } from './exerc03';

describe('Exerc03', () => {
  let component: Exerc03;
  let fixture: ComponentFixture<Exerc03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc03],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
