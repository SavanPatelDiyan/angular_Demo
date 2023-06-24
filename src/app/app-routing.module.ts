import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLayoutComponent } from './Layout/backend-layout/backend-layout.component';
import { FronendLayoutComponent } from './Layout/fronend-layout/fronend-layout.component';
import { LoginLayoutComponent } from './Layout/login-layout/login-layout.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'admin/demo-list',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: BackendLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./Layout/backend-layout/backend-layout.module').then(e => e.BackendLayoutModule)
      }
    ]
  },
  {
    path: '',
    component: FronendLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./Layout/fronend-layout/fronend-layout.module').then(e => e.FronendLayoutModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./Layout/login-layout/login-layout.module').then(e => e.LoginLayoutModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
