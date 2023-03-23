import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo=1;
placart1=0;
placart2=0;
totalt1=0;
totalt2=0;

  constructor() {}
  mudarpeso(cont:number){
    this.valendo=cont;


     }


     somarplacart1(){
    this.placart1+=this.valendo
    if (this.placart1===12){
      this.placart1=0;
    this.totalt1+=1;
    }



     }

     diminuir_placart1(){
    this.placart1-=this.valendo

     }

     somarplacart2(){
      this.placart2+=this.valendo

    if (this.placart2===12){
      this.placart2=0;
    this.totalt2+=1;
    }


       }

       diminuir_placart2(){
      this.placart2-=this.valendo

       }

       limpar(){
        this.valendo=1;
        this.placart1=0;
        this.placart2=0;
        this.totalt1=0;
        this.totalt2=0;
       }

}
