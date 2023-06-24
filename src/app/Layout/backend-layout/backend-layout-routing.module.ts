import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoListComponent } from 'src/app/back-end/demo-data/demo-list/demo-list.component';
import { LifeCycleHookComponent } from 'src/app/back-end/life-cycle-hook/life-cycle-hook.component';

const routes: Routes = [
  { path: 'demo-list', component: DemoListComponent },
  { path: 'life-cycle', component: LifeCycleHookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendLayoutRoutingModule { }
