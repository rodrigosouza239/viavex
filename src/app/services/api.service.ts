import { Storage } from '@ionic/storage';
const BASE_API = 'http://vex.facility-cloud.com.br/facilityapi';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private storage: Storage) { }

  async signIn(cpf: any) {
    const req = await fetch(`${BASE_API}/pwa/AppViaVex/StatusDoCadastro/${cpf}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
    })
    const json = await req.json();
    await this.storage.set('clientes_cpfInfo', cpf)
    console.log(cpf)
    return json;
  }


  async telefone(celular: any) {
    const cpf = await this.storage.get("clientes_cpfInfo");
    console.log(cpf)
    const req = await fetch(`${BASE_API}/pwa/AppViaVex/SolicitarCodigo/${celular}/${cpf}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
    })
    const json = await req.json();
    await this.storage.set('clientes_celular', celular)
    console.log(celular)
    return json;
  }



  async sms() {
    const cpf = await this.storage.get("clientes_cpfInfo")
    const celular = await this.storage.get('clientes_celular')
    console.log(cpf)
    console.log(celular)
    const req = await fetch(`${BASE_API}/pwa/AppViaVex/EnviarConfirmacao/${celular}/${cpf}`, {
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


  async foogot(cpf:any,telefone:any,novaSenha) {
    const req = await fetch(`${BASE_API}/pwa/AppViaVex/AlterarSenha/${cpf}/${telefone}/${novaSenha}`, {
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
}
