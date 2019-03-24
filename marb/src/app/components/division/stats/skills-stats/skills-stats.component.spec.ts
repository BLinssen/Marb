import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStatsComponent } from './skills-stats.component';

describe('SkillsStatsComponent', () => {
  let component: SkillsStatsComponent;
  let fixture: ComponentFixture<SkillsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
