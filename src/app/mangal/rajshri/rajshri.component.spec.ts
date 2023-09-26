import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajshriComponent } from './rajshri.component';

describe('RajshriComponent', () => {
  let component: RajshriComponent;
  let fixture: ComponentFixture<RajshriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RajshriComponent]
    });
    fixture = TestBed.createComponent(RajshriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
