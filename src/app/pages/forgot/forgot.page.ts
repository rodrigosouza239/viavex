import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { _ } from 'core-js';
import { Validacoes } from '../../shared/util/validacoes';
import { LoadingController } from '@ionic/angular';
import { ApiService  } from '../../services/api.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
  providers: [ApiService],
})
export class ForgotPage {
  loginForm: FormGroup;
  codigoRecebido = "";
  cpf: '';
  telefone: '';
  novaSenha: ''

  validation_messages = {
    'celular': [
      { type: 'required', message: 'Celular é obrigatório.' },
      { type: 'pattern', message: 'Entre com um celular válido (xx999999999).' }
    ],
    'cpf': [
      { type: 'required', message: 'CPF é obrigatório.' },
      { type: 'pattern', message: 'Entre com um CPF válido.' },
      { type: 'validaCpf', message: 'Entre com um CPF válido.' }
    ],

    'password': [
      { type: 'required', message: 'senha é obrigatório.' },
      { type: 'pattern', message: 'Entre com um CPF válido.' },
      { type: 'validaCpf', message: 'Entre com um CPF válido.' }
    ],
  };

  constructor(
    public router: Router,
    public menu: MenuController,
    private service: ApiService,
    public loadingController: LoadingController
  ) { 
    this.loginForm = new FormGroup({
      'celular': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ])),

      'cpf': new FormControl('', Validators.compose(
        [Validators.required,
        Validacoes.validaCpf,
        Validators.minLength(11),
        Validators.maxLength(11)]
      )),

      'password': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

 
public  async haldlePageLogin (){
   if(this.telefone,this.cpf){
     let json = await this.service.foogot(this.cpf,this.telefone,this.novaSenha);
     if(json){
       const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Por favor, espere...',
        duration: 6000,
        spinner:'lines'
       });
       await loading.present()
       const{} = await loading.onDidDismiss();
       this.router.navigate(['login']);
     }else{
       alert("CPF ERRADO!")
     }
   }else{
    alert("Preencha os campos!")
   }
}
public  async  haldlePagForgot(){
  this.router.navigate(['forgot']);
}
}
