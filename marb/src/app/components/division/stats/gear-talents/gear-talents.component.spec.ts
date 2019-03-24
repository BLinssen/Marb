import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearTalentsComponent } from './gear-talents.component';

describe('GearTalentsComponent', () => {
  let component: GearTalentsComponent;
  let fixture: ComponentFixture<GearTalentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearTalentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
