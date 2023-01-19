import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent {
  public texto:string ='Este é o texto que sera exibido na janela de Alerta!'
  public outroTexto:string = 'Texto enviado do componente pai para o componente filho!'
}
