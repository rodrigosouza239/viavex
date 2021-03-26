import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [ApiService],
})

export class HomePage implements OnInit{
  cpf: string = "";
  celular:string = "";
  nome:string = "";
  tipo:string = "";
  logradouro:string = "";
  numero:string = "";
  complemento:string = "";
  bairro:string = "";
  cidade:string = "";
  uf:string = "";
  cep:string = "";
  latitude:string = "";
  longitude:string = "";
  urlSelfie:string = "";
  id:string = "";
  constructor(private router:Router, private service: ApiService,private storage: Storage,) { }

  async ngOnInit() {
    const dadosString = await this.storage.get("cliente");
    let dados = JSON.parse(dadosString)
    this.id = dados.id
    this.nome = dados.nome
    this.cpf = dados.cpf
    this.celular = dados.celular
  }

 

  maps(){
    this.router.navigate(['maps'])
  }

  public async login(form){
  
    
  }

}
