import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error407Component } from './error407.component';

describe('Error407Component', () => {
  let component: Error407Component;
  let fixture: ComponentFixture<Error407Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error407Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
