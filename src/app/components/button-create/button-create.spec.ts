import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreate } from './button-create';

describe('ButtonCreate', () => {
  let component: ButtonCreate;
  let fixture: ComponentFixture<ButtonCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
