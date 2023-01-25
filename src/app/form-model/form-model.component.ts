import { Component } from '@angular/core';
import{ FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent {
  dadosForm:any
  email:any
  senha:any

  ngOnInit(){
    this.dadosForm = new FormGroup({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', this.validaSenha)
    })
  }

  validaSenha(senha:any){
    if(senha.value.length < 6){
      return{senha:true}
    }
    return null
  }

  exibirDados(dados:any){
    this.email = dados.email
    this.senha = dados.senha
  }
}
