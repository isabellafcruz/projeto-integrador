import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc04 } from './exerc04';

describe('Exerc04', () => {
  let component: Exerc04;
  let fixture: ComponentFixture<Exerc04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc04],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
