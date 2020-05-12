import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input() noticiaNacional:Boolean;
  @Input() noticiaUrgente:Boolean;
  parentForm:FormGroup;
  dataEstados1:Array<any> = [
    { name: 'Aguascalientes', value: 'Aguascalientes' },
    { name: 'Chiapas', value: 'Chiapas' },
    { name: 'DF', value: 'DF' },
    { name: 'Hidalgo', value: 'Hidalgo' },
    { name: 'Morelos', value: 'Morelos' },
    { name: 'Puebla', value: 'Puebla'},
    { name: 'Sinaloa', value: 'Sinaloa' },
    { name: 'Tlaxcala', value: 'Tlaxcala' }
   
    
  ]
  dataEstados2:Array<any> = [
    { name: 'BCN', value: 'BCN' },
    { name: 'Chihuahua', value: 'Chihuahua' },
    { name: 'Durango', value: 'Durango' },
    { name: 'Jalisco', value: 'Jalisco' },
    { name: 'Nayarit', value: 'Nayarit' },
    { name: 'Querétaro', value: 'Queretaro' },
    { name: 'Sonora', value: 'Sonora' }, 	
    { name: 'Veracruz', value: 'Veracruz' }
    
  ]
  dataEstados3:Array<any> = [
    { name: 'BCS', value: 'BCS' },
    { name: 'Coahuila', value: 'Coahuila' },
    { name: 'Guanajuato', value: 'Guanajuato' },
    { name: 'Edo. de México', value: 'Edo' },
    { name: 'Nuevo León', value: 'NuevoLeon' },
    { name: 'Quintana Roo', value: 'QuintanaRoo' },
    { name: 'Tabasco', value: 'Tabasco' },
    { name: 'Yucatán', value: 'Yucatan' }
  ]
  dataEstados4: Array<any> = [
    { name: 'Campeche', value: 'Campeche' },
    { name: 'Colima', value: 'Colima' },
    { name: 'Guerrero', value: 'Guerrero' },
    { name: 'Michoacan', value: 'Michoacan' },
    { name: 'Oaxaca', value: 'Oaxaca' },
    { name: 'SLP', value: 'SLP' },
    { name: 'Tamaulipas', value: 'Tamaulipas' },
    { name: 'Zacatecas', value: 'Zacatecas' }
  ];

  constructor(    private modalService: NgbModal,private fb: FormBuilder
    ) {
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
    this.open(content);
    
  }

  open(content) {
    this.parentForm.controls.textoNoticia.setValue(" ");
    this.modalService.open(content);
  }
}
