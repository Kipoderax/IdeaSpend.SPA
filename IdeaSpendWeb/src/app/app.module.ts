import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';

import { AuthService } from './_services/auth.service';
import { CatalogService } from './_services/catalog.service';
import { AuthGuard } from './_guards/AuthGuard';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NavigationComponent } from './navigation/navigation.component';

import { MainComponent } from './main/main.component';

import { StatisticsComponent } from './statistics/statistics.component';

import { TransactionsOverviewComponent } from './transactions/transactions-overview/transactions-overview.component';
import { TransactionsNewComponent } from './transactions/transactions-new/transactions-new.component';

import { ProductComponent } from './product/product.component';
import { ProductOverviewComponent } from './product/product-overview/product-overview.component';
import { ProductCatalogsComponent } from './product/product-catalogs/product-catalogs.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import {NgApexchartsModule} from 'ng-apexcharts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    MainComponent,
    StatisticsComponent,
    TransactionsOverviewComponent,
    TransactionsNewComponent,
    ProductComponent,
    ProductOverviewComponent,
    ProductCatalogsComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SimplebarAngularModule,
    NgApexchartsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    CatalogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
