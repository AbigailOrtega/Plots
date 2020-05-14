import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModalRecueperarPassword: FormGroup;
  contrasenaEnviada: Boolean;
  parentForm: FormGroup;
  formModalSMS: FormGroup;
  constructor(private modalService: NgbModal, private loginService: LoginService) {
    this.formModalRecueperarPassword =new FormGroup({
      numero: new FormControl("",[Validators.required, Validators.minLength(10),Validators.maxLength(10)])
    })
    this.contrasenaEnviada = false;
    this.parentForm = new FormGroup({
      nombreUsuario: new FormControl("", [Validators.required]),
      contrasena: new FormControl("", [Validators.required])
    })
    this.formModalSMS = new FormGroup({
      smsClave: new FormControl("", [Validators.required])
    })
    
  }

  ngOnInit(): void {
  }
  login(content: any, form: any) {
    //check login and sent sms
    this.loginService.checkUsuarioPassword(form);
    this.open(content);
  }
  checkSMSToken(form: any) {
    //check sms clave y cerrar
    this.loginService.checkTokenSMSLogin(form);
    this.modalService.dismissAll();
  }
  recuperarPassword(content) {
    this.open(content);
  }
  enviarSMSPasswordModal(form: any) {
    //enviar sms parar recuperar contraseña
    this.loginService.recuperarPasswordXNumero(form)
    this.contrasenaEnviada = true;
  }
  open(content) {
    this.modalService.open(content);
  }
  close(content){
    this.contrasenaEnviada = false;
    this.modalService.dismissAll();
  }
  get nombreUsuarioNoValido() {
    return this.parentForm.controls.nombreUsuario.touched && this.parentForm.controls.nombreUsuario.invalid;
  }

  get contrasenaNoValido() {
    return this.parentForm.controls.contrasena.touched && this.parentForm.controls.contrasena.invalid;
  }
  get smsClaveNoValido(){
    return this.formModalSMS.controls.smsClave.touched && this.formModalSMS.controls.smsClave.invalid;
  }
  get numeroNoValido(){
    return this.formModalRecueperarPassword.controls.numero.touched && this.formModalRecueperarPassword.controls.numero.invalid;
  }
}
