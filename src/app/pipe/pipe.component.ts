import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  title:string = 'Pipes no Angular'
  numFloat:number = 678.94
  dataHoje:Date = new Date()
  numDecimal:number = 789456.9563

  //variaveis para uso do Pipe Personalizado

  raizUm:number = 25
  raizDois:number = 150
  raizTres:number = 1458
}
