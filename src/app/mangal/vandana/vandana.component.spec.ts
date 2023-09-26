import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VandanaComponent } from './vandana.component';

describe('VandanaComponent', () => {
  let component: VandanaComponent;
  let fixture: ComponentFixture<VandanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VandanaComponent]
    });
    fixture = TestBed.createComponent(VandanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
