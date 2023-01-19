import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  subtitulo: string = '5 filmes sensacionais!'

  arrayFilmes: Filme[] = [
    { titulo: 'O poderoso Chefão', direcao: 'Francis Ford Coppola', elenco: 'Marlon Brando, Al Pacino, JamesCaan', anoLancamento: '10 de setembro, 1972' },
    { titulo: 'Um Estranho no Ninho', direcao: 'MilosForman', elenco: 'Jack Nicholson LouiseFletcher, MichaelBerryman', anoLancamento: '26 de maio, 1976' },
    { titulo: 'A lista de Schindler', direcao: 'StevenSpielberg', elenco: 'Liam Neeson, Ralph Fiennes, BenKingsley', anoLancamento: '11 de março, 1993'},
    { titulo: 'Forrest Gump - O contador de histórias', direcao: 'Robert Zemeckis', elenco: 'Tom Hanks, RobinWright, Gary Sinise', anoLancamento: '7 de dezembro, 1994'},
    { titulo: 'Laranja Mecânica', direcao: 'StanleyKubrik', elenco: 'MalcolmMcDowell, Patrick Magee, Michael  Bates ', anoLancamento: '04 de setembro, 1971' }
  ]
}

class Filme {
  titulo!: string
  direcao!: string
  elenco!: string
  anoLancamento!: string
}
