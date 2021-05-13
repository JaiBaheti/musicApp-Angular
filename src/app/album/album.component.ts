import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumModel } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album : AlbumModel;
  genres : string[];
  submitted : boolean;

  constructor(private service: AlbumService, private router: Router) {
    this.album = new AlbumModel();
    this.genres = ["Rock","Jazz","Pop","Rap"];
   }

  ngOnInit(): void {
    if(localStorage.getItem("user") == null)
    this.router.navigate(['login']);
  }
  saveAlbum(){
    this.service.addAlbum(this.album);
    this.router.navigate(['list']);
  }
  validate(){
    console.log("Artist"+" "+this.album.artist+" Genre"+this.album.genre+" Title"+this.album.title);
  }
 
}
