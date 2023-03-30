import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
    public heroes     : string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor']
    public heroeDelete: string   = ''; 
   
    borrarHeroe(){
      this.heroeDelete = this.heroes.pop() || '';
      console.log('Heroe borrando...', this.heroeDelete)
    }
}
