import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.scss']
})
export class BuildsComponent {
  displayedColumns: string[] = ['load', 'name', 'delete'];
  dataSource = BUILD_DATA;
}

export interface BuildElement {
  name: string;
  buildstring: string;
}

const BUILD_DATA: BuildElement[] = [
  {name: 'Hydrogen', buildstring: 'HydroString'},
  {name: 'DPS', buildstring: 'DPSString'},
];