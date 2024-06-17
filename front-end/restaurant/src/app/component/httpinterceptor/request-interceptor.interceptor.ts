import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Http request Interceptor: ",req)
  // if(req.method==="post"){
    const header= new HttpHeaders({"token":"123456789"})
    const request = req.clone({headers:header})
    return next(request);
  // }
    return next(req);
};
