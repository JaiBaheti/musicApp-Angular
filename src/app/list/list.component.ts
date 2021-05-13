import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../album.model';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : AlbumModel[]= [];

  constructor(private service : AlbumService, private router : Router) { }

  ngOnInit(): void {
    this.list = this.service.getList();
    if(localStorage.getItem("user") == null)
      this.router.navigate(['login']);
  }
  delete(index: number){
    var ans = confirm("Sure ?");
    if(ans)
      this.service.delAlbum(index);
  }
  orderByTitle(){
    this.service.sortbyTitle();
  }
  orderByArtist(){
    this.list.sort((a,b)=> a.artist > b.artist ? 1 : ((a.artist < b.artist ? -1:0)));
  }
}
