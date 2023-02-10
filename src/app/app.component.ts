import { Component, Input } from '@angular/core';
import { bykesData } from '../data/bykes.data';
import { Byke } from 'src/model/byke.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment_1';

  bykes = bykesData;

  onMovieSelected(byke: Byke) {
    console.log("App Component onMovieSelected", byke);
  }
}

