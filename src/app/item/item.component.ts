import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item : Item = {
    position: '',
    title:'',
    quantity:'',
    expirationDate:'',
    description:'',
    weight:'',
    url:''
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let position = this.route.snapshot.paramMap.get('position');
    let title = this.route.snapshot.paramMap.get('title');
    let quantity = this.route.snapshot.paramMap.get('quantity');
    let expirationDate = this.route.snapshot.paramMap.get('expirationDate');
    let description = this.route.snapshot.paramMap.get('description');
    let weight = this.route.snapshot.paramMap.get('weight');
    let url = this.route.snapshot.paramMap.get('url');
    
    this.item = {
      position: position,
      title:title,
      quantity:quantity,
      expirationDate:expirationDate,
      description:description,
      weight:weight,
      url:url
    }
    
  }
}

export interface Item {
    position: string | null;
    weight: string | null;
    quantity: string | null;
    title: string | null;
    description: string | null;
    url: string | null;
    expirationDate: string | null
  };