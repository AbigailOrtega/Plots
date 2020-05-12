import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { NoticiaHistoricoService, Historico } from 'src/app/services/noticia-historico.service';
import { ExcelServiceService } from 'src/app/services/excel-service.service';

@Component({
  selector: 'app-noticia-historico',
  templateUrl: './noticia-historico.component.html',
  styleUrls: ['./noticia-historico.component.css']
})
export class NoticiaHistoricoComponent implements OnInit {
  showTable:Boolean;
  formHistorico:FormGroup;
   historico:Historico[];

  constructor(private historicoService: NoticiaHistoricoService, private excelService: ExcelServiceService) {
    this.showTable=false;
    this.formHistorico= new FormGroup({
      startDate: new FormControl("",[Validators.required]),
      endDate: new FormControl("",[Validators.required])     
    })
   }

  ngOnInit(): void {
  }

  save(form:any){
    console.log(form.value.startDate);
    console.log(form.value.endDate);
    this.historico=this.historicoService.getHistoricoList(form.value.startDate,form.value.endDate);
    this.showTable=true;
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.historico, 'HistoricoNoticias');
 }
}
