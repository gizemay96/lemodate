import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { HomeComponent } from './pages/home/home.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0]
  // ...any other options you'd like to use
};
const routes: Routes = [
  { path: '', redirectTo: 'greeting', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeModule)
  },
  {
    path: 'greeting',
    component: GreetingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
