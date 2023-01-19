import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-filho',
  templateUrl: './output-filho.component.html',
  styleUrls: ['./output-filho.component.css']
})
export class OutputFilhoComponent {
  @Output() emitter = new EventEmitter<any>()

  public objDados:any = {}

  public enviarDados():void{
    this.emitter.emit(this.objDados)
  }
}
