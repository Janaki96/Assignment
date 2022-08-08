import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispachServerComponent } from './dispach-server.component';

describe('DispachServerComponent', () => {
  let component: DispachServerComponent;
  let fixture: ComponentFixture<DispachServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispachServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispachServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
