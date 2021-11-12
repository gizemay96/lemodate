import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  entryComponents: [HomeComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
