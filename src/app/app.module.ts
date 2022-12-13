import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideComponent } from './side/side.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import {LivechatModule} from "./livechat/livechat.module";
import {RouterOutlet} from "@angular/router";
import {DashboardModule} from "./dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    DashboardModule,
    LivechatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
