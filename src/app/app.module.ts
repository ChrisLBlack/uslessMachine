import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BoxComponent } from './box/box.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ToggleSwitchDirective } from './toggle-switch.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoxComponent,
    ToggleComponent,
    ToggleSwitchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
