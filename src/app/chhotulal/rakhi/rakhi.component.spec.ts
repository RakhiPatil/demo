import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RakhiComponent } from './rakhi.component';

describe('RakhiComponent', () => {
  let component: RakhiComponent;
  let fixture: ComponentFixture<RakhiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RakhiComponent]
    });
    fixture = TestBed.createComponent(RakhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
