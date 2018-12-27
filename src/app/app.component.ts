import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:number = 0;
  getType123() {
    //console.log(123);
    return typeof this.name;
  }
}
