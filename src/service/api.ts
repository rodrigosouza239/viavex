import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable()
export class AppSevice {

  urlApi = environment.urlApi;

 // Headers
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

  constructor(private httpClient: HttpClient) { }

  public login(cpf): Observable<any> {
    const url = `${this.urlApi}/pwa/AppViaVex/StatusDoCadastro/${cpf}`;
 
     return this.httpClient.get<any>(url)
       .pipe( retry(2),catchError(this.handleError))
   }


  public solicitarCodigo(cpf, celular): Observable<any> {
   const url = `${this.urlApi}/pwa/AppViaVex/solicitarCodigo/${celular}/${cpf}`;

    return this.httpClient.get<any>(url)
      .pipe( retry(2),catchError(this.handleError))
  }
 

  public enviarConfirmacao(cpf, celular): Observable<any> {
    const url = `${this.urlApi}/pwa/AppViaVex/EnviarConfirmacao/${celular}/${cpf}`;
 
     return this.httpClient.get<any>(url)
       .pipe( retry(2),catchError(this.handleError))
   }


   public carregarmenu(): Observable<any[]> {
    const url = `${this.urlApi}/pwa/AppViaVex/carregarmenu`;
 
     return this.httpClient.get<any[]>(url)
       .pipe( retry(2),catchError(this.handleError))
   }



  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}