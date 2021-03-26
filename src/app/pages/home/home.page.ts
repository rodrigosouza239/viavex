import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
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
  constructor(private router:Router, private service: ApiService,private storage: Storage, public loadingController: LoadingController,) { }

  async ngOnInit() {
    const dadosString = await this.storage.get("cliente");
    let dados = JSON.parse(dadosString)
    this.id = dados.id
    this.nome = dados.nome
    this.cpf = dados.cpf
    this.celular = dados.celular
    this.urlSelfie = `data:image/png;base64,${dados.urlSelfie}`;
  }

 

  maps(){
    return new Promise(async resolve => {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Por favor, espere...',
        duration: 5000,
        spinner: "circles"
      });
      await loading.present()
      this.service.ofertacargas().then(
        response => {
          this.router.navigate(['maps'])
          console.log(response)
        })
    })
  }

  public async login(form){
  
    
  }

}
