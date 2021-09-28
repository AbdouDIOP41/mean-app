
import { Component, OnInit } from '@angular/core';
import { Album } from '../Interface/photos';
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

  constructor(private itemsService : ItemsService) { }

  ngOnInit(): void {

    this.itemsService.getApiData().subscribe((data : any)  => {
      this.allItems = data;
      this.items = this.itemsService.filterDataByUser(this.allItems)
      for(const item in this.items){
      // console.log(this.items[item].albumId)
        var x = this.registerPhotos(this.items[item]);
        x.albumData.forEach(element => {
          console.log("element " + element.id + ": ");
          console.log(element)
        });
      }
    });

  }

  public registerPhotos( data : any): Album{
    var array = data.url.split("/");
    var lien = 'https://via.placeholder.com/';
    var taillePhotoUrl = 600
    var taillePhotoThumbnailUrl = 150
    var album : Album = {
      albumId : data.albumId,
      albumData : [
        {
          id : data.id,
          title : data.title,
          url : {
            src : lien,
            taille : taillePhotoUrl,
            rgb : array[4],
          },
          thumbnailUrl : {
            src : lien,
            taille : taillePhotoThumbnailUrl,
            rgb : array[4]
          }

        }
      ]
    };
   // console.log(album);
    return album;
  }

}
