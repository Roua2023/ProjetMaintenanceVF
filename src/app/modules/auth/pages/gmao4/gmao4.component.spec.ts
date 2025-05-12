import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gmao4Component } from './gmao4.component';

describe('Gmao4Component', () => {
  let component: Gmao4Component;
  let fixture: ComponentFixture<Gmao4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gmao4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gmao4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
