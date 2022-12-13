import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LivechatComponent} from "./livechat/livechat.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', children:[]},
  { path: 'dashboard',
    component: DashboardComponent},
  { path: 'livechat',
    component: LivechatComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule { }
