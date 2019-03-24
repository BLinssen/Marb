import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defense-stats',
  templateUrl: './defense-stats.component.html',
  styleUrls: ['./defense-stats.component.scss']
})
export class DefenseStatsComponent {
  displayedColumns: string[] = ['value', 'name'];
  dataSource = STAT_DATA;
}

export interface StatElement {
  name: string;
  value: number;
  suffix: string;
}

const STAT_DATA: StatElement[] = [
  {name: 'Armor', value: 102799, suffix: ''},
  {name: 'Armor On Kill', value: 0, suffix: ''},
  {name: 'Armor Regeneration', value: 0, suffix: ''},
  {name: 'Max Health', value: 40185, suffix: ''},
  {name: 'Health on Kill', value: 0, suffix: ''},
  {name: 'Health Regeneration', value: 20000, suffix: ''},
  {name: 'Hazard Protection', value: 30, suffix: '%'},
  {name: 'Bleed Resistance', value: 30, suffix: '%'},
  {name: 'Blind Deaf Resistance', value: 30, suffix: '%'},
  {name: 'Burn Resistance', value: 30, suffix: '%'},
  {name: 'Disorient Resistance', value: 30, suffix: '%'},
  {name: 'Disrupt Deaf Resistance', value: 30, suffix: '%'},
  {name: 'Shock Resistance', value: 30, suffix: '%'},
];