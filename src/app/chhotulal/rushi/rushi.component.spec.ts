import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushiComponent } from './rushi.component';

describe('RushiComponent', () => {
  let component: RushiComponent;
  let fixture: ComponentFixture<RushiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RushiComponent]
    });
    fixture = TestBed.createComponent(RushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
