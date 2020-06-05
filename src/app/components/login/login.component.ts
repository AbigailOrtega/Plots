import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService, User } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showButton:boolean;
  errorCredentials:boolean;
  textoOlvidarPassword:string;
  formModalRecueperarPassword: FormGroup;
  contrasenaEnviada: Boolean;
  parentForm: FormGroup;
  formModalSMS: FormGroup;
  userLogin:User={
    password:" ",
    userName:" ",
    token:" "
  };
  constructor(private modalService: NgbModal, private loginService: LoginService, private router:Router) {
    this.showButton=true;
    if(localStorage.getItem('token') && localStorage.getItem('user')){
      this.router.navigate(['/ayuda']);
    }
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
    this.errorCredentials=false;
    this.showButton=false;
    //check login and sent sms
    console.log(form.value.nombreUsuario);
    this.userLogin.password=form.value.contrasena;
    this.userLogin.userName=form.value.nombreUsuario;
    this.loginService.sentTokenSMSLogin(form.value.nombreUsuario).subscribe(data=>{
      this.open(content);
    });
  }
  checkSMSToken(form: any) {
    this.errorCredentials=false;
    this.userLogin.token=form.value.smsClave;
    this.loginService.checkUsuarioPasswordandToken(this.userLogin).subscribe(
      response => {
        let date=new Date();
        console.log(date);
        response.token.replace('\n','');
        localStorage.removeItem('4');
        localStorage.removeItem('6');
        localStorage.removeItem('1');
        localStorage.removeItem('5');
        localStorage.removeItem('11');
        localStorage.removeItem('12');
        localStorage.removeItem('13');
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', response.username);
        localStorage.setItem('time', date.toTimeString());
        localStorage.setItem('date', date.toDateString());
        for(let i of response.autorities){
         localStorage.setItem(i, i);
        }
        this.showButton=true;
        this.router.navigate(['/ayuda']);
        this.modalService.dismissAll();
      },
      Error =>{
        this.showButton=true;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('time');
        localStorage.removeItem('date');
        this.errorCredentials=true;
        return false;
      }
    )
   
  }
  recuperarPassword(content) {
    this.open(content);
  }
  enviarSMSPasswordModal(form: any) {
    //enviar sms parar recuperar contraseña
    this.loginService.recuperarPasswordXNumero(form.value.numero).subscribe(data=>{
      this.textoOlvidarPassword=data;
      this.contrasenaEnviada = true;
    },Error=>{
      this.textoOlvidarPassword="Contraseña no enviada ocurrio un error.";
      this.contrasenaEnviada = true;
    }
    )
    
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
