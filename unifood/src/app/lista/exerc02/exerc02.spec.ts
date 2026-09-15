import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc02 } from './exerc02';

describe('Exerc02', () => {
  let component: Exerc02;
  let fixture: ComponentFixture<Exerc02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc02],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
