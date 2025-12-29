import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-21';
  count = 0;
  callFunc() {
    setTimeout(() => {
      this.title = 'Changed and updated'+this.count++;
    },1000)
  }

  increaseCounter():void{
    this.count++;
  }
}
