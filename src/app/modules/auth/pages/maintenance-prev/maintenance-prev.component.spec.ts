import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePrevComponent } from './maintenance-prev.component';

describe('MaintenancePrevComponent', () => {
  let component: MaintenancePrevComponent;
  let fixture: ComponentFixture<MaintenancePrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenancePrevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenancePrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
