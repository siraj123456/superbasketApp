import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'underscore';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from '../dialogs/add-item-dialog/add-item-dialog.component';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { ItemsServiceService } from '../Services/items-service.service';
import { AttentionDialogComponent } from '../attention-dialog/attention-dialog.component';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ItemsComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;

  dataSource = new BehaviorSubject([
    {
      position: 0,
      url: 'cocacola.png',
      title: 'Cocacola Can',
      expirationDate: '12-3-23',
      quantity: 4,
      weight: 12,
      description: 'NB: dont drink everyday!',
    },
  ]);

  columnsToDisplay = [
    'title',
    'quantity',
    'expirationDate',
    'description',
    'position',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null | undefined;
  name = '';
  animal = '';
  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private itemsServiceService: ItemsServiceService
  ) {}

  ngOnInit(): void {
    this.itemsServiceService.getItems().subscribe((res: PeriodicElement[]) => {
      this.dataSource = new BehaviorSubject(res);
    });
    // this.items = this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts`).pipe(shareReplay());//hotObersvable: broadcasted the values we got from the api call to both subscribers (listing in ngfor and .length)
  }
  edit(position: any) {
    console.log("edit",position);
    
  }
  delete(positionVal: any) {
    const sett = new Set(this.dataSource.value);
    let elToDelete = _.findWhere(this.dataSource.value, {position: positionVal});
    if (elToDelete) {
      sett.delete(elToDelete);
      console.log("set after delete",Array.from(sett));
      this.dataSource = new BehaviorSubject(Array.from(sett));
      this.table.renderRows(); 
    }
  }
  
  
  openAddItemDialog(): void {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      data: { data:this.dataSource.value },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("result afterclose", result);
      if(result?.title && result?.expirationDate && result?.quantity && result?.description) {
        let currentData = this.dataSource.value;
        currentData.push(result);
  
        this.dataSource = new BehaviorSubject(currentData);
        console.log('value: ', this.dataSource.value);
        this.itemsServiceService.addItem(this.dataSource.value);
        this.table.renderRows();
        this.animal = result;
      }
    });
  }

  openAttentionDialog(): void {
    const dialogRef = this.dialog.open(AttentionDialogComponent, {
      data: { name: this.name, animal: this.animal },
    });
  }


    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

}

export interface PeriodicElement {
  position: number;
  weight: number;
  quantity: number;
  title: string;
  description: string;
  url: string;
  expirationDate: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     position: 0,
//     url:'cocacola.png',
//     title: 'Cocacola Can',
//     expirationDate: '12-3-23',
//     quantity: 4,
//     weight: 12,
//     description : 'NB: dont drink everyday!'
//    },

//    {
//     position: 1,
//     url:'courgette.png',
//     title: 'Cucumber',
//     expirationDate: '12-3-23',
//     quantity: 1345,
//     weight: 12,
//     description : 'Eat your veggies!'
//    }
// ];
