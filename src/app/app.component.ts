import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-app';
  user : LoginModel;

  constructor(private service : UserService) {
    this.user = new LoginModel();
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.user == null) {
      this.user = new LoginModel();
      this.user.userid="Guest";
    }
  }

  logout() {
    this.service.logout();
  }
}

