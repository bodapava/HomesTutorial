import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Output() searchEvent = new EventEmitter();
  sendValues(e: any) {
    console.log('navbar', e.target.value);
    this.searchEvent.emit(e.target.value);
  }
}
