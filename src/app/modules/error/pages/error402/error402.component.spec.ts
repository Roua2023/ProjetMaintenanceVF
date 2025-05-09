import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error402Component } from './error402.component';

describe('Error402Component', () => {
  let component: Error402Component;
  let fixture: ComponentFixture<Error402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error402Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
