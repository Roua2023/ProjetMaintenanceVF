import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maintenance4Component } from './maintenance4.component';

describe('Maintenance4Component', () => {
  let component: Maintenance4Component;
  let fixture: ComponentFixture<Maintenance4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maintenance4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maintenance4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
