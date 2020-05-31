import { Component, ViewEncapsulation } from '@angular/core';
import { listaPotworow } from './listaPotworow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  numeryNaLoterii = [];
  potworyHTML = "";

  ngOnInit() {
    this.wylosujNumeryNaLoterie()
    this.numeryNaLoterii.sort((a, b) => a - b);
    this.pokazPotwory()
  }

  wylosujNumeryNaLoterie() {
    for (let i=0; i<8; i++) {
      this.wylosujKolejnyNumer()
    }
  }

  pokazPotwory() {
    // Wzorując się na funkcji "wylosuj numery na loterię"
    // uzupełnij tę funkcję tak by pokazywała 5 potworów.
    // Do wyświetlania danego potwora uzyj funkcji this.wyswietlPotwora(i)
    
  }

  wylosujKolejnyNumer() {
    const min = 1;
    const max = 50;
    let nextNumber = Math.floor(Math.random() * (max - min + 1) + min)
    while (this.numeryNaLoterii.includes(nextNumber)) {
      nextNumber = Math.floor(Math.random() * (max - min + 1) + min)
    }
    this.numeryNaLoterii.push(nextNumber)
  }

  wyswietlPotwora(index) {
    let potworHTML = `
    <div class="potwor">
      <img class="potwor-img" src="${listaPotworow[index].icon}" [style]="width: 60px; height: 60px;">
      ${listaPotworow[index].name}
    </div>
    `;
    console.log(listaPotworow[0].icon)
    this.potworyHTML += potworHTML;
  }
}
