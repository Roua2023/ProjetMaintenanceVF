import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhmComponent } from './phm.component';

describe('PhmComponent', () => {
  let component: PhmComponent;
  let fixture: ComponentFixture<PhmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
