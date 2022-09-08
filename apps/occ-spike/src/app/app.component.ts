import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'occ-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'occ-spike';

  ngOnInit() {
    console.log('Test');
  }
}
