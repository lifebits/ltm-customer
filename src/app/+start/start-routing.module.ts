import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartIndexComponent } from './start-index/start-index.component';

const routes: Routes = [
  {
    path: '',
    component: StartIndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
