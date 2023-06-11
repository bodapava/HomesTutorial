import { Injectable } from '@angular/core';
import { getApp, initializeApp } from 'firebase/app';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { firebaseConfig } from './environment';
import { Houses } from './models/houses';
@Injectable({
  providedIn: 'root',
})
export class HouseService {
  houses: any;
  constructor() {}

  async getHouses(): Promise<any> {
    this.houses = [];
    console.log('get house service');
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const q = query(collection(db, 'houses'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let house = new Houses();
        house.imageUrl = doc.data()['imageUrl'];
        house.key = doc.id;
        house.name = doc.data()['name'];
        house.location = doc.data()['location'];

        this.houses.push(house);
      });
      console.log('Current houses are ', this.houses);
    });

    return this.houses;
  }
}
