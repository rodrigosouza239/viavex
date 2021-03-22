import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { _ } from 'core-js';
import { Validacoes } from '../../shared/util/validacoes';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../../services/api';
import { ToastService } from './../../services/toast.service';
import { Storage } from '@ionic/storage';

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
  api: '';

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
    private actRouter: ActivatedRoute,
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

  ngOnInit() {
    this.actRouter.params.subscribe((data: any) => {
    })
  }



  validateInputs() {
    console.log(this.cpf);
    let cpf = this.cpf.trim();
    return (
      this.cpf &&
      cpf.length > 9
    );
  }

  async mensagem(chave, cor) {
    const toast = await this.toastService.toastController.create({
      message: chave,
      duration: 2000,
      color: cor
    });
    toast.present();
  }

  public async login(form){
    if(this.validateInputs()){
      return new Promise(async resolve => {
        const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Por favor, espere...',
          duration: 5000,
          spinner: "circles"
        });
        await loading.present()
        this.service.apiget(`/pwa/AppViaVex/StatusDoCadastro/${this.cpf}`).subscribe(
          response => {
            if (response['chave'] === "CADASTROAPROVADO") {
              this.mensagem(response['chave'], 'success');
              this.router.navigate(['logincpf']);
            } else {
              this.mensagem(response['chave'], 'danger')
              this.router.navigate(['sms']);
            }
          }, (error) => {
            console.error('Error Login', error);
          }),
          this.storage.set('clientes_cpfInfo', this.cpf)
      })
    }
  }


  public async haldlePagForgot() {
    this.router.navigate(['login']);
  }

  haldlePagMaps() {
    this.router.navigate(['home'])
  }

  getCor(){

  }
  cnhVerson(){
    
  }
}

