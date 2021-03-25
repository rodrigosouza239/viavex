import { Storage } from '@ionic/storage';
import { isPlatform, LoadingController } from '@ionic/angular';
import { Injectable } from  '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse  } from  '@angular/common/http';
import { environment } from '../../environments/environment';
import { from,throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
import { ToastService } from '../services/toast.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private storage: Storage,public loadingController: LoadingController,private httpClient: HttpClient,   private toastService: ToastService,) { }

  urlApi = environment.urlApi;

  async login(cpf:any,) {
     const req = await fetch(`${this.urlApi}/pwa/AppViaVex/StatusDoCadastro/${cpf}`, {
    method: 'GET',
    mode: 'cors',
   headers: {
    'Content-Type': 'application/json'
   },
   redirect: 'follow',
    });
    this.storage.set('clientes_cpfInfo',cpf)
    const json = await req.json();
    return json;
   }

  async sms(celular:any,) {
  const cpf = await this.storage.get("clientes_cpfInfo");
  const req = await fetch(`${this.urlApi}/pwa/AppViaVex/SolicitarCodigo/${celular}/${cpf}`, {
   method: 'GET',
   mode: 'cors',
  headers: {
   'Content-Type': 'application/json'
  }
   })
   const json = await req.json();
   return json;
  }

  async sign(senha:any,) {
    const cpf = await this.storage.get("clientes_cpfInfo");
    const req = await fetch(`${this.urlApi}/pwa/AppViaVex/Login/${cpf}/${senha}`, {
     method: 'GET',
     mode: 'cors',
    headers: {
     'Content-Type': 'application/json'
    },
    redirect: 'follow',
     })
     const json = await req.json();
     return json;
    }

    async validationsms() {
      const cpf = await this.storage.get("clientes_cpfInfo");
      const celular = await this.storage.get('clientes_celular');
      const req = await fetch(`${this.urlApi}/pwa/AppViaVex/EnviarConfirmacao/${celular}/${cpf}`, {
       method: 'GET',
      headers: {
       'Content-Type': 'application/json'
      },
       })
       const json = await req.json();
       return json;
      }

       // Manipulação de erros
 async handleError(error: HttpErrorResponse) {
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
