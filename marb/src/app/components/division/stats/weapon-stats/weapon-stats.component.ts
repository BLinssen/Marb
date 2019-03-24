import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon-stats',
  templateUrl: './weapon-stats.component.html',
  styleUrls: ['./weapon-stats.component.scss']
})
export class WeaponStatsComponent {
  displayedColumns: string[] = ['value', 'name'];
  dataSource = STAT_DATA;
}

export interface StatElement {
  name: string;
  value: number;
  suffix: string;
}

const STAT_DATA: StatElement[] = [
  {name: 'Weapon Damage', value: 45799, suffix: ''},
  {name: 'Critical Hit Chance', value: 10, suffix: '%'},
  {name: 'Critical Hit Damage', value: 42, suffix: '%'},
  {name: 'Headshot Damage', value: 180, suffix: ''},
  {name: 'Range', value: 42, suffix: ''},
  {name: 'Reload Time', value: 4.0, suffix: ''},
  {name: 'Reload Speed Bonus', value: -20, suffix: '%'},
  {name: 'Accuracy', value: 0, suffix: '%'},
  {name: 'Stability', value: 0, suffix: '%'},
];