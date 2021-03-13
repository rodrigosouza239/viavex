import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { _ } from 'core-js';
import { Validacoes } from '../../shared/util/validacoes';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { ToastService } from './../../services/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [ApiService],
})
export class LoginPage {
  loginForm: FormGroup;
  codigoRecebido = "";
  cpf: '';

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
  };

  constructor(
    public router: Router,
    public menu: MenuController,
    public loadingController: LoadingController,
    private toastService: ToastService,
    private service: ApiService,
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


  validateInputs() {
    console.log(this.cpf);
    let cpf = this.cpf.trim();
    return (
      this.cpf &&
      cpf.length > 9
    );
  }



  public async haldlePageLogin() {
    if(this.validateInputs()){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor, espere...',
      duration: 3000,
      spinner:'lines'
     });
     await loading.present()
    try{
      //  const response = await this.service.signIn(this.cpf)
       this.router.navigate(['sms']);
    }catch(error){
      this.toastService.presentToast("CPF INVALIDO");
    }
  }
  }


  public async haldlePagForgot() {
    this.router.navigate(['login']);
  }

  haldlePagMaps(){
    this.router.navigate(['home'])
  }
}

