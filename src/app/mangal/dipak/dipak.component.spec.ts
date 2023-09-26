import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipakComponent } from './dipak.component';

describe('DipakComponent', () => {
  let component: DipakComponent;
  let fixture: ComponentFixture<DipakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DipakComponent]
    });
    fixture = TestBed.createComponent(DipakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
