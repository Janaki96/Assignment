import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsubmitorderComponent } from './testsubmitorder.component';

describe('TestsubmitorderComponent', () => {
  let component: TestsubmitorderComponent;
  let fixture: ComponentFixture<TestsubmitorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsubmitorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsubmitorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
