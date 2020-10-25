import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HueControllerComponent } from './hue-controller.component';

describe('HueControllerComponent', () => {
  let component: HueControllerComponent;
  let fixture: ComponentFixture<HueControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HueControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HueControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
