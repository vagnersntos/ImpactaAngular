import { Component } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  recebedorDados(dadosRecebidos:any){
    alert('O email recebido foi: ' + dadosRecebidos.email)
  }
}
