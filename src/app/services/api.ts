import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators'

@Injectable()
export class ApiService{
  server: string  = 'https://vex.facility-cloud.com.br/facilityapi';
  constructor(private http : HttpClient){}

  apiget(api:string){
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: true };
    const url = this.server + api;
    return this.http.get(url,options).pipe()
  }
}

