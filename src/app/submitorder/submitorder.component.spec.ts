import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitorderComponent } from "./SubmitorderComponent";

describe('SubmitorderComponent', () => {
  let component: SubmitorderComponent;
  let fixture: ComponentFixture<SubmitorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
