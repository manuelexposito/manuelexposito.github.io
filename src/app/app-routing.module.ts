import { GameListComponent } from './pages/game-list/game-list.component';
import { CommercialPropertyListComponent } from './pages/commercialproperty-list/commercialproperty-list.component';

import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  //TODO: Gestionar que si el token del usuario está en LocalStorage que lleve directamente al dashboard

  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'dashboard', redirectTo: 'dashboard/commerce' },
      { path: 'commerce', component: CommercialPropertyListComponent },
      { path: 'games', component: GameListComponent },
    ],
  },
  //{path: 'games', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
