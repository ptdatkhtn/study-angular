import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  status123 = false;
  status789 = false;
  status456 = '456';
  eventName = 'testing';
  num: number = 0;
  serverNames = ['server1', 'server2'];
  constructor() {
    setTimeout(() => {
      this.status123 = true;
    }, 2000);
  }
  ngOnInit() {
  }
  changeStatus() {
    this.status456 = '789';
    console.log(this.status456);
  }
  onUpdateData(event) {
    this.eventName = event.target.value;
  }
  increase() {
    console.log(typeof this.status123);
    this.num += 10;
    this.status456 =  `new num is ${this.num}`;
    this.status789 = true;
    this.serverNames.push(this.eventName);
  }
}
