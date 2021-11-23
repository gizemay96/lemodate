import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0]
  // ...any other options you'd like to use
};
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home' , 
  loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
