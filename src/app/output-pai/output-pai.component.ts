import { Component } from '@angular/core';

@Component({
  selector: 'app-output-pai',
  templateUrl: './output-pai.component.html',
  styleUrls: ['./output-pai.component.css']
})
export class OutputPaiComponent {
  public recebendoDados(dados:any){
    let nome:string = 'Obrigado por se cadastrar ' + dados.nome + '.'
    nome = nome + ' O email ' + dados.email + ' foi cadastrado com sucesso!'

    alert(nome)
  }
}
