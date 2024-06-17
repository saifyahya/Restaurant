// import { HttpInterceptorFn } from '@angular/common/http';
// import { catchError, throwError } from 'rxjs';

// export const errorInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req).pipe(
//     catchError((err) => {
//       if ([404].includes(err.status)) {
//         console.log("Not Found");
//       }
//       const errorMessage = err.error.message || err.statusText;
//       console.error(errorMessage);
//       return throwError(() => new Error(errorMessage));
//     })
//   );
// };
