import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendLayoutRoutingModule } from './backend-layout-routing.module';
import { DemoListComponent } from 'src/app/back-end/demo-data/demo-list/demo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from 'src/app/back-end/demo/demo.component';
import { LifeCycleHookComponent } from 'src/app/back-end/life-cycle-hook/life-cycle-hook.component';


@NgModule({
  declarations: [
    DemoListComponent,
    DemoComponent,
    LifeCycleHookComponent
  ],
  imports: [
    CommonModule,
    BackendLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackendLayoutModule { }
