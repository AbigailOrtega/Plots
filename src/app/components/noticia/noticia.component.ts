import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoticiaService } from 'src/app/services/noticia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  textoModal:any;
  @Input() noticiaNacional:Boolean;
  @Input() noticiaUrgente:Boolean;
  parentForm:FormGroup;
  dataEstados1:Array<any> = [
    { name: 'Aguascalientes', value: '1' },
    { name: 'Chiapas', value: '7' },
    { name: 'DF', value: '9' },
    { name: 'Hidalgo', value: '13' },
    { name: 'Morelos', value: '17' },
    { name: 'Puebla', value: '21'},
    { name: 'Sinaloa', value: '25' },
    { name: 'Tlaxcala', value: '29' }
   
    
  ]
  dataEstados2:Array<any> = [
    { name: 'BCN', value: '2' },
    { name: 'Chihuahua', value: '8' },
    { name: 'Durango', value: '10' },
    { name: 'Jalisco', value: '14' },
    { name: 'Nayarit', value: '18' },
    { name: 'Querétaro', value: '22' },
    { name: 'Sonora', value: '26' }, 	
    { name: 'Veracruz', value: '30' }
    
  ]
  dataEstados3:Array<any> = [
    { name: 'BCS', value: '3' },
    { name: 'Coahuila', value: '5' },
    { name: 'Guanajuato', value: '11' },
    { name: 'Edo. de México', value: '15' },
    { name: 'Nuevo León', value: '19' },
    { name: 'Quintana Roo', value: '23' },
    { name: 'Tabasco', value: '27' },
    { name: 'Yucatán', value: '31' }
  ]
  dataEstados4: Array<any> = [
    { name: 'Campeche', value: '4' },
    { name: 'Colima', value: '6' },
    { name: 'Guerrero', value: '12' },
    { name: 'Michoacan', value: '16' },
    { name: 'Oaxaca', value: '20' },
    { name: 'SLP', value: '24' },
    { name: 'Tamaulipas', value: '28' },
    { name: 'Zacatecas', value: '32' }
  ];

  constructor( private router: Router,private noticiaService:NoticiaService,private modalService: NgbModal,private fb: FormBuilder
    ) {
      if(!localStorage.getItem('token') && !localStorage.getItem('user')){
        this.router.navigate(['/login']);
      }else{
        if(!localStorage.getItem('5')){
          this.router.navigate(['/ayuda']);
        }
    }
    this.parentForm=this.fb.group({
      textoNoticia: new FormControl("",[Validators.required,Validators.maxLength(160)]),
      arrayEstados: this.fb.array([])
    })
   }

  ngOnInit(): void {
  }

  onCheckboxChange(e) {
    const arrayEstadosF: FormArray = this.parentForm.get('arrayEstados') as FormArray;
    if (e.target.checked) {
      arrayEstadosF.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      arrayEstadosF.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          arrayEstadosF.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  borrar(){
     this.parentForm.controls.textoNoticia.setValue("");
  }
  get textoNoticiaNoValido(){
    return this.parentForm.controls.textoNoticia.touched && this.parentForm.controls.textoNoticia.invalid;
  }
  get textoNoticiaNumberCaracter(){
    return this.parentForm.controls.textoNoticia.value.length;
  }
  save(content,form:any){
    console.log(form.value);
    console.log("Noticia Urgente"+this.noticiaUrgente);
    console.log("Noticia Nacional"+this.noticiaNacional);
    if(this.noticiaNacional && !this.noticiaUrgente){
      this.noticiaService.guardarNoticiaRegularNacional(form.value.textoNoticia).subscribe( data=>{
        this.textoModal=data;
         this.open(content);
      },
      Error =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('time');
        localStorage.removeItem('date');
        this.router.navigate(['/login']);
        return false;
      }
      )
    }else if(!this.noticiaNacional && !this.noticiaUrgente){
      this.noticiaService.guardarNoticiaRegularLocal(form.value.textoNoticia,form.value.arrayEstados).subscribe(data=>{
        this.textoModal=data;
         this.open(content);
      },
      Error =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('time');
        localStorage.removeItem('date');
        this.router.navigate(['/login']);
        return false;
      });
    }else if(this.noticiaNacional && this.noticiaUrgente){
      this.noticiaService.guardarNoticiaUrgenteNacional(form.value.textoNoticia).subscribe(data=>{
        this.textoModal=data;
        this.open(content);
      },
      Error =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('time');
        localStorage.removeItem('date');
        this.router.navigate(['/login']);
        return false;
      })
    }else{
      this.noticiaService.guardarNotciaUrgenteLocal(form.value.textoNoticia,form.value.arrayEstados).subscribe(data=>{
        this.textoModal=data;
        this.open(content);
      },
      Error =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('time');
        localStorage.removeItem('date');
        this.router.navigate(['/login']);
        return false;
      });
    }
   
    
  }

  open(content) {
    this.parentForm.controls.textoNoticia.setValue(" ");
    this.modalService.open(content);
  }
}
