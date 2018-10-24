import { NgModule } from '@angular/core';
// declare route:
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router/src/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  // To make the app navigate to the dashboard automatically:
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  // Exporting RouterModule makes router directives available for use in the AppModule components that will need them:
  exports: [ RouterModule ]
})

export class AppRoutingModule { }