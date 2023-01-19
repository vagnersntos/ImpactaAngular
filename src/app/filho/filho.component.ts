import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {
  @Input() public mensagem:string = ''
  @Input('alerta') public outraMensagem:string = ''

  public exibirMensagemAlerta():void{
    alert(this.outraMensagem)
  }
}
