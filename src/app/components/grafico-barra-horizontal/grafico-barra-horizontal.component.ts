import { Component, Input, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from '../../data';
@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{
  
  @Input() results: any[] = []; 
  /*results: any[] = [
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 25
    },
    {
      "name": "Juego 3",
      "value": 15
    },
    {
      "name": "Juego 4",
      "value": 30
    }
  ];*/


  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Juegos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() {

    /*this.intervalo = setInterval( () => {
      console.log('tick');

      const newResults = [...this.results];

      for(let i in newResults) {
        newResults[i].value = Math.round(Math.random() * 500);
      }

      this.results = [...newResults];
    }, 1500);*/
    
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
    //clearInterval(this.intervalo);
  }
}
