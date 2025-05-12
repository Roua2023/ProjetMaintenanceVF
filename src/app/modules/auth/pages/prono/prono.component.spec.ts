import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoComponent } from './prono.component';

describe('PronoComponent', () => {
  let component: PronoComponent;
  let fixture: ComponentFixture<PronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PronoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
