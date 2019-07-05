import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FoodComponent } from './components/food/food.component';
import { ClientsComponent } from './components/clients/clients.component';
import { RequestsComponent } from './components/requests/requests.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'food', component: FoodComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'requests', component: RequestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
