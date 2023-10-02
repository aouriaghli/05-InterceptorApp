import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class InterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Paso por el interceptor');

    const headers = new HttpHeaders({
      'token-usuario': 'ABC123456789'
    });

    const reqClone = request.clone({
      headers
    });

    return next.handle(reqClone)
    .pipe(
      catchError( this.manejarError )
    )
  }

  manejarError(error:HttpErrorResponse ){
    console.log('Sucedió un error');
    console.warn(error);
    return throwError( 'Error personalizado' + error );
  }
}
