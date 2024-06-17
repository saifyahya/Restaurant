import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, ɵɵgetInheritedFactory } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { requestInterceptorInterceptor } from './component/httpinterceptor/request-interceptor.interceptor';
import { InitService } from './service/init.service';

function initFactory(initService:InitService){
  console.log(" before app initialization")
return ()=>initService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(), HttpClientModule,
  provideHttpClient(withInterceptors([requestInterceptorInterceptor])),
  {
    provide :APP_INITIALIZER,
    useFactory:initFactory,
    deps:[InitService],
    multi:true
  }
  ]
};
