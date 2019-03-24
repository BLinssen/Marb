import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenseStatsComponent } from './offense-stats.component';

describe('OffenseStatsComponent', () => {
  let component: OffenseStatsComponent;
  let fixture: ComponentFixture<OffenseStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenseStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenseStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
