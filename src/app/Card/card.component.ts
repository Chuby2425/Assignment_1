import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Byke } from 'src/model/byke.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  byke!: Byke;

  @Output()
  movieSelected = new EventEmitter<Byke>();

  onCardClicked(){
    console.log("card Component onCardClicked");
    this.movieSelected.emit(this.byke);
  }

  isImageAvailable(){
    return this.byke && this.byke.Photo;
  }

  cardClasses(){
    return this.byke.Model;
  }
}
