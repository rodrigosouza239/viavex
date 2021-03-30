import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { _ } from 'core-js';
import { Validacoes } from '../../shared/util/validacoes';
import { ApiService  } from '../../services/api.service';
import { LoadingController } from '@ionic/angular';
import { ToastService } from './../../services/toast.service';
import { HttpClient,HttpErrorResponse, } from  '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../../environments/environment';
import * as yup from 'yup';



@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
  providers: [ApiService],
})
export class SmsPage{
  loginForm: FormGroup;
  codigoRecebido = "";
  celular: '';

  urlApi = environment.urlApi;

  validation_messages = {
    'celular': [
      { type: 'required', message: 'Celular é obrigatório.' },
      { type: 'pattern', message: 'Entre com um celular válido (xx999999999).' }
    ],
    'password': [
      { type: 'required', message: 'Informe o código SMS.' },
      { type: 'minlength', message: 'Informe o código SMS corretamente.' }
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
    private service: ApiService,
    public loadingController: LoadingController,
    private toastService: ToastService,
  ) {
    this.loginForm = new FormGroup({
      'celular': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)        
      ])),

      'cpf': new FormControl('',  Validators.compose(
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
    console.log(this.celular);
    let celular = this.celular.trim();
    return (
      this.celular &&
      celular.length > 11
    );
  }

  codigosms = {
    codigo: String,
  }

  public async haldlePageValidationsms(){
    if(this.validateInputs()){
      return new Promise(async resolve => {
        const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Por favor, espere...',
          duration: 5000,
          spinner: "circles"
        });
        await loading.present()
        this.service.sms(this.celular).then(
          response =>{
            this.toastService.presentToast("Codigo enviado com sucesso");
            this.router.navigate(['validationsms']);
          }
        )
      })
    }
  }
}
