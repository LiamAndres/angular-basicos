import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  /* styleUrls: ['./listado.component.css'] */
})
export class ListadoComponent {

  heroes: string [] = ["Spiderman", "Ironman", "Thor", "Captain America"];
  heroesBorrados: string[] = [];

  borrarHeroe(){
    const heroeBorrado = this.heroes.pop();
    this.heroesBorrados.push(heroeBorrado?heroeBorrado:"Ningun heroe borrado");

    /* 
    this.heroesBorrados = this.heroes.pop() || "";
    */
  }

}


