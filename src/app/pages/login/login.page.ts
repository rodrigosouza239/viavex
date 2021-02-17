import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { _ } from 'core-js';
import { Validacoes } from '../../shared/util/validacoes';
import { AppSevice } from '../../../service/api';

import { Login }from '../../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AppSevice]
})
export class LoginPage{
  loginForm: FormGroup;
  codigoRecebido = "";

  cpf:''
  celular:''

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
    private service: AppSevice
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




  public Login() {
    if(this.loginForm.get("cpf").value == "")
    return;
    this.service.login(this.loginForm.get("cpf").value)
      .subscribe(result => {
        this.codigoRecebido = result;
      });
      this.router.navigate(['sms']);
  }



  public confirmarCodigo() {
    if(this.loginForm.get("password").value == "")
      return;

    if (this.codigoRecebido == this.loginForm.get("password").value)
    {

 this.service
      .enviarConfirmacao(this.loginForm.get("cpf").value, this.loginForm.get("celular").value)
      .subscribe(result => {
        this.codigoRecebido = result;
        //alert("Codigo correto : " + result);
      });
      
      this.router.navigate(['app/categories']);
    }
    else
    {
      alert("Código incorreto");
      this.loginForm.get("password").setValue("");
    }
  }

}
