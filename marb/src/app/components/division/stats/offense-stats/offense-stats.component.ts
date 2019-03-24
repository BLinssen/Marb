import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offense-stats',
  templateUrl: './offense-stats.component.html',
  styleUrls: ['./offense-stats.component.scss']
})
export class OffenseStatsComponent {
  displayedColumns: string[] = ['value', 'name'];
  dataSource = STAT_DATA;
}

export interface StatElement {
  name: string;
  value: number;
  suffix: string;
}

const STAT_DATA: StatElement[] = [
  {name: 'Weapon Handling', value: 0, suffix: '%'},
  {name: 'All Weapons Damage Bonus', value: 0, suffix: '%'},
  {name: 'Assault Rifle % Damage Bonus', value: 0, suffix: '%'},
  {name: 'LMG % Damage Bonus', value: 0, suffix: '%'},
  {name: 'SMG % Damage Bonus', value: 0, suffix: '%'},
  {name: 'Shotgun % Damage Bonus', value: 0, suffix: '%'},
  {name: 'Marksman Rifle % Damage Bonus', value: 0, suffix: '%'},
  {name: 'Pistol % Damage Bonus', value: 0, suffix: '%'},
  {name: 'Rifle Damage Bonus', value: 0, suffix: '%'},
  {name: 'Damage to Elites', value: 0, suffix: '%'},
  {name: 'Armor Damage', value: 0, suffix: '%'},
  {name: 'Health Damage', value: 0, suffix: ''},
];