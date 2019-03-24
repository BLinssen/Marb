import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { BuildsComponent } from "../builds/builds.component";

@Component({
  selector: 'app-build-editor',
  templateUrl: './build-editor.component.html',
  styleUrls: ['./build-editor.component.scss']
})
export class BuildEditorComponent {

  constructor(private snackBar: MatSnackBar) { }



  openSnackBar() {
    console.log("clicked");  
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 2000,
      data: {message: 'test'},
    });
  }

}


@Component({
  selector: 'build-editor-copied',
  templateUrl: './build-editor-copied.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}

@Component({
  selector: 'app-saved-builds',   
  template: '../builds/builds-component.html',
  styles: ['../builds/builds.component.scss']   
})
export class SavedBuildsComponent {}
   
