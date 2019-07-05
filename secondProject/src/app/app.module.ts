import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FoodService } from 'src/app/core/service/food.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientAddComponent } from './components/clients/client-add/client-add.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ClientEditComponent } from './components/clients/client-edit/client-edit.component';
import { FoodComponent } from './components/food/food.component';
import { FoodAddComponent } from './components/food/food-add/food-add.component';
import { FoodListComponent } from './components/food/food-list/food-list.component';
import { FoodEditComponent } from './components/food/food-edit/food-edit.component';
import { FoodExcludeComponent } from './components/food/food-exclude/food-exclude.component';
import { ClientDeleteComponent } from './components/clients/client-delete/client-delete.component';
import { RequestsComponent } from './components/requests/requests.component';
import { RequestAddComponent } from './components/requests/request-add/request-add.component';
import { RequestListComponent } from './components/requests/request-list/request-list.component';
import { RequestExcludeComponent } from './components/requests/request-exclude/request-exclude.component';
import { ClientService } from './core/service/client.service';
import { RequestsService } from './core/service/requests.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    ClientsComponent,
    ClientAddComponent,
    ClientListComponent,
    ClientEditComponent,
    FoodComponent,
    FoodAddComponent,
    FoodListComponent,
    FoodEditComponent,
    FoodExcludeComponent,
    ClientDeleteComponent,
    RequestsComponent,
    RequestAddComponent,
    RequestListComponent,
    RequestExcludeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FoodService, ClientService, RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
