import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancepredictiveComponent } from './maintenancepredictive.component';

describe('MaintenancepredictiveComponent', () => {
  let component: MaintenancepredictiveComponent;
  let fixture: ComponentFixture<MaintenancepredictiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenancepredictiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenancepredictiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
