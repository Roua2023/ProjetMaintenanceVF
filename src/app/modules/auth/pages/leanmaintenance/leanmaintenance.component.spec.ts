import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanmaintenanceComponent } from './leanmaintenance.component';

describe('LeanmaintenanceComponent', () => {
  let component: LeanmaintenanceComponent;
  let fixture: ComponentFixture<LeanmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeanmaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeanmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
