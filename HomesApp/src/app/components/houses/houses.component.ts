import { Component } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { HouseService } from 'src/app/houses.service';
import { Houses } from 'src/app/models/houses';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent {
  houseList: any;
  constructor(private houseService: HouseService) {
    this.getListHouses();
  }

  getListHouses() {
    this.houseService.getHouses().then((data) => {
      console.log(data);
      this.houseList = data;

      console.log('Components data ', this.houseList);
    });

    return this.houseList;
  }
}
