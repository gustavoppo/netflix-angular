import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './index/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: '',
    component: HomeComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
