import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  title = 'List items';
  items : any;
  allItems: any;

  constructor(private itemsfaker : ItemsService) { }

  ngOnInit(): void {

    this.itemsfaker.getApiData().subscribe((data : any)  => {
      this.allItems = data;
      this.items = this.itemsfaker.filterDataByUser(this.allItems)
    });
  }

}
