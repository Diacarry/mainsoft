import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  formulario: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  pulsado (){
    if(this.formulario){
      this.formulario=false;
    }
    else{
      this.formulario=true;
    }
  }

}
