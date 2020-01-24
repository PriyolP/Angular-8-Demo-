import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullyLoadedComponent } from './fully-loaded/fully-loaded.component';
import { HalfLoadedComponent } from './half-loaded/half-loaded.component';


const routes: Routes = [
  { path: 'half', component: HalfLoadedComponent },
  { path: 'full', component: FullyLoadedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const RouterComponent = [FullyLoadedComponent, HalfLoadedComponent]
