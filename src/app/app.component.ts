import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'this is a test';
  isAuth = false;

  // appareilOne = 'Machine à laver';
  // appareilTwo = 'Frigo';
  // appareilThree = 'Ordinateur';

  appareils = [
    {
      name: 'Machnine à laver',
      status: 'éteint',
      timeAlive : 100
    },
    {
      name: 'Frigo',
      status: 'allumé',
      timeAlive : 200
    },
    {
      name: 'Ordinateur',
      status: 'éteint',
      timeAlive : 10
    }
  ]



  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }
}
