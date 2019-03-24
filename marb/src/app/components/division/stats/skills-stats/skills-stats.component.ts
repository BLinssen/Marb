import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-stats',
  templateUrl: './skills-stats.component.html',
  styleUrls: ['./skills-stats.component.scss']
})
export class SkillsStatsComponent {
  displayedColumns: string[] = ['value', 'name'];
  dataSource = STAT_DATA;
}

export interface StatElement {
  name: string;
  value: number;
  suffix: string;
}

const STAT_DATA: StatElement[] = [
  {name: 'Skill Power', value: 102799, suffix: ''},
  {name: 'Skill Cooldown Reduction', value: 0 , suffix: '%'},
  {name: 'Drone Skill Power', value: 0 , suffix: ''},
  {name: 'Chem Launcher Skill Power', value: 0 , suffix: ''},
  {name: 'Pulse Skill Power', value: 0 , suffix: ''},
  {name: 'Hive Skill Power', value: 0 , suffix: ''},
  {name: 'Firefly Skill Power', value: 0 , suffix: ''},
  {name: 'Seeker Mine Skill Power', value: 0 , suffix: ''},
  {name: 'Shield Skill Power', value: 0 , suffix: ''},
  {name: 'Turret Skill Power', value: 0 , suffix: ''},
];