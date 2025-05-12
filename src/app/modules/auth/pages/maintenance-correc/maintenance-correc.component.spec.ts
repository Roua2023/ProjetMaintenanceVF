import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCorrecComponent } from './maintenance-correc.component';

describe('MaintenanceCorrecComponent', () => {
  let component: MaintenanceCorrecComponent;
  let fixture: ComponentFixture<MaintenanceCorrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceCorrecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCorrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
