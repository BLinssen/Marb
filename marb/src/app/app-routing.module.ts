import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildEditorComponent } from './components/division/build-editor/build-editor.component';
import { BuildsComponent } from './components/division/builds/builds.component';

const routes: Routes = [
  { path: 'division/build-editor', component: BuildEditorComponent },
  { path: 'division/builds', component: BuildsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
