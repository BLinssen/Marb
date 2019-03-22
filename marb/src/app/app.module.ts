import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BuildEditorComponent, PizzaPartyComponent } from './components/division/build-editor/build-editor.component';
import { BuildsComponent } from './components/division/builds/builds.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildEditorComponent,
    BuildsComponent,
    PizzaPartyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  entryComponents: [BuildEditorComponent, PizzaPartyComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
