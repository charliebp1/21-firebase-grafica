import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  votarJuego(juego: Game) {
    
    let gameVote;
    //console.log(juego.id);
    this.gameService.votarJuego(juego.id)
        .subscribe( (resp: any) => {
            if(resp.ok){
              //console.log(resp);
              Swal.fire('Gracias por su Voto!',resp.mensaje,'success')
            } else {
              Swal.fire('Oops!', resp.mensaje, 'error')
            }
            
        });
  }

  ngOnInit(): void {

    this.gameService.getNominados()
        .subscribe( resp => {
          //console.log(resp);
          this.juegos = resp;
        });
  }

}
