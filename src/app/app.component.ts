import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = {
    name: 'name',
    jobTitle: 'title',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/220px-Grosser_Panda.JPG',
    textColor: 'red'
  };
  urgent = false;
  connected = false;
}
