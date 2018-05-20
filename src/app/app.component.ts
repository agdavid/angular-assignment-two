import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Assignment Two';
  userName = '';
  userNamePresent = false;

  onInputChange(event: Event) {
    this.userNamePresent = true;
  }

  onClearUserName() {
    this.userName = '';
    this.userNamePresent = false;
  }

}
