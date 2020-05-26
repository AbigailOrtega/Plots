import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgModel } from '@angular/forms';
import { Permiso, AdministracionService } from 'src/app/services/administracion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  cotrasenaEqual } from 'src/app/validators/custom.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  textAdministracion:string;
 parentForm:FormGroup;
 dataPermisos:Permiso[]=[
   {name:"Agregar Nuevo Usuario", valor:".f"},
   {name:"Reportes y Estadísticas", valor:".f"},
   {name:"Consultar Histórico", valor:".f"},
   {name:"Agregar Noticia y Break News", valor:".f"},
   {name:"Agregar Encuesta", valor:".f"},
   {name:"Detener Envío", valor:".f"},
   {name:"Recbir Alertas SMS", valor:".f"}]
  constructor(private router:Router, private fb: FormBuilder, private modalService:NgbModal, private administracionService:AdministracionService) { 
    if(!localStorage.getItem('token') && !localStorage.getItem('user')){
      this.router.navigate(['/login']);
    }
    this.parentForm=this.fb.group({
      nombreUsuario: new FormControl("",[Validators.required,Validators.maxLength(12)]),
      contrasena: new FormControl("",[Validators.required,Validators.maxLength(12)]),
      confirmacionContrasena: new FormControl("",[Validators.required,Validators.maxLength(12),]),
      numeroTelefonico: new FormControl("",[Validators.required]),
      permisos: this.fb.array([], [Validators.required])
    },{validator:cotrasenaEqual( 'contrasena','confirmacionContrasena')})
  }

  ngOnInit(): void {
  }
get nombreUsuarioNoValido(){
  return this.parentForm.controls.nombreUsuario.touched && this.parentForm.controls.nombreUsuario.invalid;
}
get contrasenaNoValido(){
  return this.parentForm.controls.contrasena.touched && this.parentForm.controls.contrasena.invalid;
}
get confirmacionContrasenaNoValido(){
  return this.parentForm.controls.confirmacionContrasena.touched && (this.parentForm.controls.confirmacionContrasena.value!=this.parentForm.controls.contrasena.value);

}
get numeroTelefonicoNoValido(){
  return this.parentForm.controls.numeroTelefonico.touched && this.parentForm.controls.numeroTelefonico.invalid;
}
save(content:any,parentForm:any){
  console.log(parentForm.value);
  this.administracionService.crearUsuario(parentForm.value.nombreUsuario,parentForm.value.contrasena,parentForm.value.numeroTelefonico,parentForm.value.permisos).subscribe(data=>{
    this.textAdministracion=data;
    this.router.navigate(['/']);
  this.open(content);
  });
}
onCheckboxChange(e){
  const arrayPermisosF: FormArray = this.parentForm.get('permisos') as FormArray;
  if (e.target.checked) {
    arrayPermisosF.push(new FormControl(e.target.value));
  } else {
    let i: number = 0;
    arrayPermisosF.controls.forEach((item: FormControl) => {
      if (item.value == e.target.value) {
        arrayPermisosF.removeAt(i);
        return;
      }
      i++;
    });
  }
}
open(content) {
  this.modalService.open(content);
}
}
