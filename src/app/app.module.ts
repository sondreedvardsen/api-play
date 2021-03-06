import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ReportsComponent } from './components/reports/reports.component';

import { AuthService } from './services/auth.service';
import { CatalogService } from './services/catalog.service';
import { WindowService } from "./services/window.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CatalogComponent,
    OrdersComponent,
    ConfigurationComponent,
    ToolsComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		MaterialModule.forRoot(),
		RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
      },
			{
        path: 'login',
        component: LoginComponent
      },
			{
        path: 'login/:token',
        component: LoginComponent
      },
			{
        path: 'catalog',
        component: CatalogComponent
      },
			{
        path: 'orders',
        component: OrdersComponent
      },
			{
        path: 'reports',
        component: ReportsComponent
      },
			{
        path: 'tools',
        component: ToolsComponent
      },
			{
        path: 'configuration',
        component: ConfigurationComponent
      }
    ])
  ],
  providers: [
		AuthService,
		CatalogService,
		WindowService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
