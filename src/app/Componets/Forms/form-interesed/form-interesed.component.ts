import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-interesed',
  templateUrl: './form-interesed.component.html',
  styleUrls: ['./form-interesed.component.css']
})
export class FormInteresedComponent implements OnInit {

  interesados = [
    {nombre:'Universidades y Otros'},
    {nombre:'Universidades y Otros (EUR)'},
    {nombre:'Embajada con presupuesto'},
    {nombre:'Embajada y otros sin presupuestos'},
    {nombre:'Certificacion bancos'},
    {nombre:'Universidades y otros (CAD)'},
    {nombre:'Universidades y otros (GBP)'},
    {nombre:'Universidades y otros (AUD)'},
    {nombre:'Practica Profesional'}
  ];
  constructor() { }

  ngOnInit() {
  }
  changeIdiom(idiom: string){
    switch(idiom){
      case 'idioma1':{
        this.interesados = [
          {nombre:'Universidades y Otros'},
          {nombre:'Universidades y Otros (EUR)'},
          {nombre:'Embajada con presupuesto'},
          {nombre:'Embajada y otros sin presupuestos'},
          {nombre:'Certificacion bancos'},
          {nombre:'Universidades y Otros (CAD)'},
          {nombre:'Universidades y Otros (GBP)'},
          {nombre:'Universidades y Otros (AUD)'},
          {nombre:'Practica Profesional'}
        ];
        break;
      }
      case 'idioma2':{
        this.interesados = [
          {nombre: 'Universities and Others'},
          {nombre: 'Universities and Others (EUR)'},
          {nombre: 'Embassy with a budget'},
          {nombre: 'Embassy and others without budgets'},
          {nombre: 'Bank Certification'},
          {nombre: 'Universities and others (CAD)'},
          {nombre: 'Universities and others (GBP)'},
          {nombre: 'Universities and others (AUD)'},
          {nombre: 'Professional Practice'}
        ];
        break;
      }
      case 'idioma3':{
        this.interesados = [
          {nombre: 'Universités et autres'},
          {nombre: 'Universités et autres (EUR)'},
          {nombre: 'Ambassade avec un budget'},
          {nombre: 'Embassy and others without budgets'},
          {nombre: 'certificat bancaire'},
          {nombre: 'Universités et autres (CAD)'},
          {nombre: 'Universités et autres (GBP)'},
          {nombre: 'Universités et autres (AUD)'},
          {nombre: 'Pratique professionnelle'}
        ];
        break;
      }
      case 'idioma4':{
        this.interesados = [
          {nombre: 'Università e altro'},
          {nombre: 'Università e altro (EUR)'},
          {nombre: 'Ambasciata con un budget'},
          {nombre: 'Ambasciata e altri senza budget'},
          {nombre: 'certificato di banca'},
          {nombre: 'Università e altro (CAD)'},
          {nombre: 'Università e altro (GBP)'},
          {nombre: 'Università e altro (AUD)'},
          {nombre: 'Pratica professionale'}
        ];
        break;
      }
      case 'idioma5':{
        this.interesados = [
          {nombre: 'Universitäten und andere'},
          {nombre: 'Universitäten und andere (EUR)'},
          {nombre: 'Botschaft mit Budget'},
          {nombre: 'Botschaft und andere ohne Budget'},
          {nombre: 'Bankbescheinigung'},
          {nombre: 'Universitäten und andere (CAD)'},
          {nombre: 'Universitäten und andere (GBP)'},
          {nombre: 'Universitäten und andere (AUD)'},
          {nombre: 'Berufspraxis'}
        ];
        break;
      }
    }
  }
}