import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BuildEditorComponent, PizzaPartyComponent } from './components/division/build-editor/build-editor.component';
import { BuildsComponent } from './components/division/builds/builds.component';
import { StatsComponent } from './components/division/stats/stats.component';
import { GearTalentsComponent } from './components/division/stats/gear-talents/gear-talents.component';
import { WeaponTalentsComponent } from './components/division/stats/weapon-talents/weapon-talents.component';
import { WeaponStatsComponent } from './components/division/stats/weapon-stats/weapon-stats.component';
import { OffenseStatsComponent } from './components/division/stats/offense-stats/offense-stats.component';
import { DefenseStatsComponent } from './components/division/stats/defense-stats/defense-stats.component';
import { SkillsStatsComponent } from './components/division/stats/skills-stats/skills-stats.component';
import { CookiesComponent } from './components/cookies/cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildEditorComponent,
    BuildsComponent,
    PizzaPartyComponent,
    StatsComponent,
    GearTalentsComponent,
    WeaponTalentsComponent,
    WeaponStatsComponent,
    OffenseStatsComponent,
    DefenseStatsComponent,
    SkillsStatsComponent,
    CookiesComponent,
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
