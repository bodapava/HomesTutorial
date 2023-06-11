import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { HouseService } from 'src/app/houses.service';
import { Houses } from 'src/app/models/houses';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnChanges {
  houseList: any;
  filteredList: any;
  @Input() location: any;
  constructor(private houseService: HouseService) {
    console.log('houses', this.location);
    this.getListHouses();
    // this.filteredListVal();
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('houses', changes);
    this.filteredListVal(this.location);
  }

  getListHouses() {
    this.houseService.getHouses().then((data) => {
      console.log(data);
      this.houseList = this.filteredList = data;
      console.log('Components data ', this.houseList);
    });
    return this.houseList;
  }

  filteredListVal(value?: String) {
    if (this.houseList?.length != 0) {
      this.filteredList = value
        ? this.houseList?.filter((house: any) =>
            house.location.toLowerCase().startsWith(value?.toLowerCase())
          )
        : this.houseList;
    }

    console.log('filter', this.filteredList);

    return this.filteredList;
  }
}
