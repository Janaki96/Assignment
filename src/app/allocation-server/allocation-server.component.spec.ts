import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationServerComponent } from './allocation-server.component';

describe('AllocationServerComponent', () => {
  let component: AllocationServerComponent;
  let fixture: ComponentFixture<AllocationServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocationServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocationServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
