import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponTalentsComponent } from './weapon-talents.component';

describe('WeaponTalentsComponent', () => {
  let component: WeaponTalentsComponent;
  let fixture: ComponentFixture<WeaponTalentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponTalentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
