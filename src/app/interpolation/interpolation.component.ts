import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  public x:number = 10;
  public umArray:Array<number> = [10,22,14]
  public datahoje:Date = new Date()

  public statusBooleano:boolean = true

  public exibirtexto():string{
    return 'Texto retornado a partir de um método!'
  }
}
