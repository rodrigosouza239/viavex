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
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
  providers: [ApiService],
})
export class SmsPage{
  loginForm: FormGroup;
  codigoRecebido = "";
  celular: '';

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

  public async haldlePageValidationsms() {
    if(this.validateInputs()){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor, espere...',
      duration: 3000,
      spinner:'lines'
     });
     await loading.present()
    try{
      //  const response = await this.service.telefone(this.celular)
       this.router.navigate(['validationsms']);
    }catch(error){
      this.toastService.presentToast("Celular INVALIDO");
    }
  }
  }

// public  async haldlePageValidationsms(){
// if(this.celular){
// const loading = await this.loadingController.create({
// cssClass: 'my-custom-class',
// message: 'Por favor, espere...',
// duration: 5000,
// spinner:'lines'
//  });
// //        await loading.present()
// //        const{} = await loading.onDidDismiss();
// //       let json = await this.service.telefone(this.celular);
// //       if(json){
// //         this.router.navigate(['validationsms']);
// //       }else{
// //         alert("CPF ERRADO!")
// //       }
// //     }else{
// //      alert("Preencha os campos!")
// }
// }

}
