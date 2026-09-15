import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc05 } from './exerc05';

describe('Exerc05', () => {
  let component: Exerc05;
  let fixture: ComponentFixture<Exerc05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerc05],
    }).compileComponents();

    fixture = TestBed.createComponent(Exerc05);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
