import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http:HttpClient ) { }

  obtenerUsuarios(){

    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Ayoub Ouriaghli');

    const headers = new HttpHeaders({
      'token-usuario': 'ABC123456789'
    });

    return this.http.get('https://reqres.in/api/user', { params, headers })
    .pipe(
      map( (resp:any) => {
        return resp['data'];
      }),
      catchError( this.manejarError )
    );
  }

  manejarError(error:HttpErrorResponse ){
    console.log('Sucedió un error');
    console.warn(error);
    return throwError( 'Error personalizado' + error );
  }
}
