import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  album : AlbumModel;
  title : string;
  criteria : string;
  constructor(private service : AlbumService, private router : Router) { 
    this.album = new AlbumModel();
  }

  ngOnInit(): void {
    if(localStorage.getItem("user") == null)
    this.router.navigate(['login']);  
  }
  search(){
    if(this.criteria=="Title")
      this.album = this.service.findByTitle(this.title);
    else if(this.criteria == "Artist")
      this.album = this.service.findByArtist(this.title);
    else
      this.album = this.service.findByGenre(this.title);
    
    this.router.navigate(['search']);
  }
}
