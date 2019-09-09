import { Injectable } from '@angular/core';
import {Cliente} from './cliente';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {map} from 'rxjs/operators';
//Reactive
import {of,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//inyeccion de dependecias
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }
//Metodo sincrono
//Realizar varias peticiones de forma paralela, que funcione de forma real
//Tipo Stream
//Observable esta basado en el patron Observadores, para notificar en tiempo real
  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);

    return this.http.get<Cliente[]>(this.urlEndPoint);

    /*otraforma con map

    return this.http.get(this.urlEndPoint).pipe(
      map(response=> response as Cliente[])
    );

    */

  }

  create(cliente: Cliente) : Observable<Cliente>{

    return this.http.post<Cliente>(this.urlEndPoint , cliente, {headers: this.httpHeaders})

  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
