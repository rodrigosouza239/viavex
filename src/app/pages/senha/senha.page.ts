import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { _ } from 'core-js';
import { Validacoes } from '../../shared/util/validacoes';
import { LoadingController } from '@ionic/angular';
import { ApiService  } from '../../services/api.service';
import { ToastService } from './../../services/toast.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-senha',
  templateUrl: './senha.page.html',
  styleUrls: ['./senha.page.scss'],
  providers: [ApiService],
})
export class SenhaPage{
  loginForm: FormGroup;
  CodigoConfirmacao: "";
  Senha: "";
  SenhaConfime: "";

  validation_messages = {
    'celular': [
      { type: 'required', message: 'Celular é obrigatório.' },
      { type: 'pattern', message: 'Entre com um celular válido (xx999999999).' }
    ],
    'password': [
      { type: 'required', message: 'Informe Senha.' },
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
    public loadingController: LoadingController,
    private toastService: ToastService,
    private storage: Storage
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

  validateInputs() {
    console.log(this.Senha);
    let Senha = this.Senha.trim();
    return (
      this.Senha &&
      Senha.length > 4
    );
  }


  public async selfie(){
    if(this.validateInputs()){
      return new Promise(async resolve => {
        const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Por favor, espere...',
          duration: 5000,
          spinner: "circles"
        });
        await loading.present()
        this.router.navigate(['selfie']);
        this.toastService.presentToast("Senha Criada com Sucesso");
        this.storage.set('clientes_senha',this.Senha)
        this.storage.set('clientes_senha',this.SenhaConfime),
        console.log(this.Senha)
      })
    }
  }
}
