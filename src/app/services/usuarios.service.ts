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



    return this.http.get('https://reqres.in/api/user', { params })
    .pipe(
      map( (resp:any) => {
        return resp['data'];
      }),
    );
  }
}
