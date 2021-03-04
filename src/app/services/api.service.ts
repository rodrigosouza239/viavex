import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private storage: Storage,public loadingController: LoadingController,private httpClient: HttpClient) { }

  urlApi = environment.urlApi;

public  async signIn(cpf:any){
  return new Promise((resolve, reject) =>{
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    this.httpClient.get(`${this.urlApi}/pwa/AppViaVex/StatusDoCadastro/${cpf}`).subscribe(res =>{
      resolve(JSON.stringify)
    },(err) =>{
      reject(err)
    });
     this.storage.set('clientes_cpfInfo', cpf)
     console.log(cpf)
  })
}



public  telefone(celular:any) {
  return new Promise(async (resolve, reject) =>{
    var headers = new Headers();
    const cpf = await this.storage.get("clientes_cpfInfo");
    console.log(cpf)
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    this.httpClient.get(`${this.urlApi}/pwa/AppViaVex/SolicitarCodigo/${celular}/${cpf}`).subscribe(res =>{
      resolve(JSON.stringify)
    },(err) =>{
      reject(err)
    });
  })
}



public  sms() {
  return new Promise(async (resolve, reject) =>{
    var headers = new Headers();
    const cpf = await this.storage.get("clientes_cpfInfo")
    const celular = await this.storage.get('clientes_celular')
    console.log(cpf)
    console.log(celular)
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    this.httpClient.get(`${this.urlApi}/pwa/AppViaVex/EnviarConfirmacao/${celular}/${cpf}`).subscribe(res =>{
      resolve(JSON.stringify)
    },(err) =>{
      reject(err)
    });
  })
}

public  Novasenha(
  celular,
  cpf,
  CodigoConfirmacao,
  Senha,
  TipoEndereco,
  Endereco,
  Complemento,
  Numero,
  Bairro,
  Cidade,
  ChaveIdwallDocumentosEnviados,
  ChaveIdwallRelatorio,
  Cep,
  TipoDeVeiculo,
  Regioes,
  ChaveIdqallDocumentoClrvEnviado,
  ChaveIdwallRelatorioClrv,
  URLCnhFrente,
  URLCnhVerso,
  Cnpj,
  CodigoFirebase,
  Latitude,
  Longitude){
  return new Promise(async (resolve, reject) =>{
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    this.httpClient.get(`${this.urlApi}/pwa/AppViaVex/EnviarDados/${celular}/${cpf}/${CodigoConfirmacao}/${Senha}/${TipoEndereco}/${Endereco}/${Complemento}/${Numero}/${Bairro}/${Cidade}/${ChaveIdwallDocumentosEnviados}/${ChaveIdwallRelatorio}/${Cep}/${TipoDeVeiculo}/${Regioes}/${ChaveIdqallDocumentoClrvEnviado}/${ChaveIdwallRelatorioClrv}/${URLCnhFrente}/${URLCnhVerso}/${Cnpj}/${CodigoFirebase}/${Latitude}/${Longitude}`).subscribe(res =>{
      resolve(JSON.stringify)
    },(err) =>{
      reject(err)
    });
  })
}

public  ListaDeFiliais(lat,lon,cpf) {
  return new Promise(async (resolve, reject) =>{
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    this.httpClient.get(`${this.urlApi}/pwa/AppViaVex/ListaDeFiliais/${lat}/${lon}/${cpf}`).subscribe(res =>{
      resolve(JSON.stringify)
    },(err) =>{
      reject(err)
    });
  })
}


public Perfil() {
  return new Promise(async (resolve, reject) =>{
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    this.httpClient.get(`${this.urlApi}/pwa/AppViaVex/Perfil`).subscribe(res =>{
      resolve(JSON.stringify)
    },(err) =>{
      reject(err)
    });
  })
}

public  foogot(){
  
}



public  deleteProductById() {

}





//   async foogot(cpf:any,telefone:any,novaSenha) {
//     const req = await fetch(`${BASE_API}/pwa/AppViaVex/AlterarSenha/${cpf}/${telefone}/${novaSenha}`, {
//       method: 'GET',
//       mode: 'cors',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       redirect: 'follow',
//     })
//     const json = await req.json();
//     return json;
//   }

//    handleError(error: HttpErrorResponse) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//       // Erro ocorreu no lado do client
//       errorMessage = error.error.message;
//     } else {
//       // Erro ocorreu no lado do servidor
//       errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
//   };
}
