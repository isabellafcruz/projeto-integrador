import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc01 } from './exerc01';

describe('Exerc01', () => {
  let component: Exerc01;
  let fixture: ComponentFixture<Exerc01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc01],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
