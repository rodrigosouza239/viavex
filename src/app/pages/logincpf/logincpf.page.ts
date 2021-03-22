import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { _ } from 'core-js';
import { Validacoes } from '../../shared/util/validacoes';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { ToastService } from './../../services/toast.service';
import { HttpClient,HttpErrorResponse, } from  '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-logincpf',
  templateUrl: './logincpf.page.html',
  styleUrls: ['./logincpf.page.scss'],
  providers: [ApiService],
})
export class LogincpfPage{
  loginForm: FormGroup;
  codigoRecebido = "";
  senha: '';

  urlApi = environment.urlApi;

  validation_messages = {
    'celular': [
      { type: 'required', message: 'Celular é obrigatório.' },
      { type: 'pattern', message: 'Entre com um celular válido (xx999999999).' }
    ],
    'cpf': [
      { type: 'required', message: 'Senha é obrigatório.' },
      { type: 'pattern', message: 'Entre com um Senha válido.' },
      { type: 'validaCpf', message: 'Entre com um CPF válido.' }
    ],
  };

  constructor(
    public router: Router,
    public menu: MenuController,
    public loadingController: LoadingController,
    private toastService: ToastService,
    private service: ApiService,
    private httpClient: HttpClient,
    private storage: Storage
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
    console.log(this.senha);
    let senha = this.senha.trim();
    return (
      this.senha &&
      senha.length > 0
    );
  }


  public async haldlePageLogin(){
    if(this.validateInputs()){
      return new Promise(async resolve => {
        const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Por favor, espere...',
          duration: 5000,
          spinner: "circles"
        });
        await loading.present()
        const cpf = await this.storage.get("clientes_cpfInfo");
        this.service.apiget(`/pwa/AppViaVex/Login/${cpf}/${this.senha}`).subscribe(
          response => {
            this.router.navigate(['home'])
            this.toastService.presentToast("Seja bem Vindo!");
          }, (error) => {
            this.toastService.presentToast("Senha invalida");
          })
      })
    }
  }


  public async haldlePagForgot() {
    this.router.navigate(['login']);
  }

  haldlePagMaps(){
    this.router.navigate(['home'])
  }

}
