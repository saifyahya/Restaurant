import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OrderItemComponent } from './component/order-item/order-item.component';
import { CategoryItemComponent } from './component/category-item/category-item.component';
import { requestInterceptorInterceptor } from './component/httpinterceptor/request-interceptor.interceptor';



@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    AppComponent,
    OrderItemComponent
  ],
  providers: [    
    
  ],
})
export class AppModule { }
