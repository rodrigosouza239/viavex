import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { _ } from 'core-js';
import { Validacoes } from '../../shared/util/validacoes';
import { ApiService  } from '../../services/api.service';
import { LoadingController } from '@ionic/angular';
import { ToastService } from './../../services/toast.service';
@Component({
  selector: 'app-validationsms',
  templateUrl: './validationsms.page.html',
  styleUrls: ['./validationsms.page.scss'],
  providers: [ApiService],
})
export class ValidationsmsPage {
  loginForm: FormGroup;
  celular:'';
  cpf: '';

  codigo: '';
  validation_messages = {
    'celular': [
      { type: 'required', message: 'Celular é obrigatório.' },
      { type: 'pattern', message: 'Entre com um celular válido (xx999999999).' }
    ],
    'password': [
      { type: 'required', message: 'Informe o código SMS.' },
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
    public loadingController: LoadingController,
    private toastService: ToastService,
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
    console.log(this.codigo);
    let codigo = this.codigo.trim();
    return (
      this.codigo &&
      codigo.length > 2
    );
  }


  public async AuthSenhas() {
    if(this.validateInputs()){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor, espere...',
      duration: 3000,
      spinner:'lines'
     });
     await loading.present()
    try{
      //  const response = await this.service.sms()
       this.router.navigate(['senha']);
    }catch(error){
      this.toastService.presentToast("Celular INVALIDO");
    }
  }
  }
}
