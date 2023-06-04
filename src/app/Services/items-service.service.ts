import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { PeriodicElement } from '../items/items.component';

@Injectable({
  providedIn: 'root',
})
export class ItemsServiceService {
  constructor() {}

  getItems(): Observable<PeriodicElement[]> {
    const items = [
      {
        position: 0,
        url: 'cocacola.png',
        title: 'Cocacola Can',
        expirationDate: '12-3-23',
        quantity: 4,
        weight: 12,
        description: 'NB: dont drink everyday!',
      },
      {
        position: 1,
        url: 'cocacola.png',
        title: 'Cocacola Can',
        expirationDate: '12-3-23',
        quantity: 4,
        weight: 12,
        description: 'NB: dont drink everyday!',
      },
      {
        position: 2,
        url: 'cocacola.png',
        title: 'Cocacola Can',
        expirationDate: '12-3-23',
        quantity: 4,
        weight: 12,
        description: 'NB: dont drink everyday!',
      },
    ];
    return of(items);
  }

  addItem(
    items: {
      position: number;
      url: string;
      title: string;
      expirationDate: string;
      quantity: number;
      weight: number;
      description: string;
    }[]
  ): void {
    console.log('items', items);
  }
}
