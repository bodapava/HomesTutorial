import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-housecard',
  templateUrl: './housecard.component.html',
  styleUrls: ['./housecard.component.css'],
})
export class HousecardComponent {
  @Input() house: any;
}
