import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {ProfileComponent} from './containers/profile/profile.component';
import {ErrorComponent} from './containers/error/error.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent,
  },
  {
    path: 'profile/:id', component: ProfileComponent,
  },
  {
    path: '**', component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
