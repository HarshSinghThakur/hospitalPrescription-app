import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPatients } from './open-patients';

describe('OpenPatients', () => {
  let component: OpenPatients;
  let fixture: ComponentFixture<OpenPatients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenPatients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenPatients);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
