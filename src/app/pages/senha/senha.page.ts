import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { _ } from 'core-js';
import { Validacoes } from '../../shared/util/validacoes';
import { LoadingController } from '@ionic/angular';
import { ApiService  } from '../../services/api.service';
@Component({
  selector: 'app-senha',
  templateUrl: './senha.page.html',
  styleUrls: ['./senha.page.scss'],
  providers: [ApiService],
})
export class SenhaPage{
  loginForm: FormGroup;
  codigoRecebido = "";

  validation_messages = {
    'celular': [
      { type: 'required', message: 'Celular é obrigatório.' },
      { type: 'pattern', message: 'Entre com um celular válido (xx999999999).' }
    ],
    'password': [
      { type: 'required', message: 'Informe o código Senha.' },
      { type: 'minlength', message: 'Informe o código SMS corretamente.' }
    ],
    'codigo': [
      { type: 'required', message: 'codigo é obrigatório.' },
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

      'codigo': new FormControl('',  Validators.compose(
        [Validators.required, 
          Validacoes.validaCpf, 
          Validators.minLength(6), 
          Validators.maxLength(6)]
        )),       
      
      'password': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  
  public  async selfie(){
    // if(this.codigoRecebido){
    //   let json = await this.service.EnviarDados();
    //   if(json){
    //     const loading = await this.loadingController.create({
    //       cssClass: 'my-custom-class',
    //       message: 'Por favor, espere...',
    //       duration: 6000,
    //       spinner:'lines'
    //      });
    //      await loading.present()
    //      const{} = await loading.onDidDismiss();
    //      this.router.navigate(['selfie']);
    //   }else{
    //     alert("CPF ERRADO!")
    //   }
    // }else{
    //  alert("Preencha os campos!")
    // }
 }
}
