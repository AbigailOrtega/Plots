import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { NoticiaHistoricoService, Historico, Subscriptror } from 'src/app/services/noticia-historico.service';
import { ExcelServiceService } from 'src/app/services/excel-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia-historico',
  templateUrl: './noticia-historico.component.html',
  styleUrls: ['./noticia-historico.component.css']
})
export class NoticiaHistoricoComponent implements OnInit {
  showTable:Boolean;
  formHistorico:FormGroup;
  subscriptores: Subscriptror[];
   historico:Historico[];

  constructor(private router:Router, private modalService: NgbModal,private historicoService: NoticiaHistoricoService, private excelService: ExcelServiceService) {
    if(!localStorage.getItem('token') && !localStorage.getItem('user')){
      this.router.navigate(['/login']);
    }
    this.showTable=false;
    this.formHistorico= new FormGroup({
      startDate: new FormControl("",[Validators.required]),
      endDate: new FormControl("",[Validators.required])     
    })
   }

  ngOnInit(): void {
  }

  showHistorico(form:any){
    console.log(form.value.startDate);
    console.log(form.value.endDate);
    const dayStart=(form.value.startDate.day<10)?"0"+form.value.startDate.day:form.value.startDate.day.toString();
    const monthStart=(form.value.startDate.month<10)?"0"+form.value.startDate.month:form.value.startDate.month.toString();
    const dayEnd=(form.value.endDate.day<10)?"0"+form.value.endDate.day:form.value.endDate.day.toString();
    const monthEnd=(form.value.endDate.month<10)?"0"+form.value.endDate.month:form.value.endDate.month.toString();
    this.historicoService.getHistoricoList(form.value.startDate.year+"-"+monthStart+"-"+dayStart,form.value.endDate.year+"-"+monthEnd+"-"+dayEnd).subscribe(data=>{
      console.log(data);
      this.historico=data;
    },
    Error =>{
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('time');
      localStorage.removeItem('date');
      this.router.navigate(['/login']);
      return false;
    })
    this.showTable=true;
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.historico, 'HistoricoNoticias');
 }

 showSupcriptroes(content){
  this.historicoService.getSubscriptores().subscribe(data=>{
    console.log(data);
    this.subscriptores=data;
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
  
 }

 open(content) {
  this.modalService.open(content);
}
}
