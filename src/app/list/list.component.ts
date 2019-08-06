import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // Create an object to hold our Json response:::
  brews: object;

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpService ) { }

  ngOnInit() {
    // returns an observable:::
    this._http.getBeer().subscribe( data => {
      this.brews = data;
      console.log(this.brews);
    });
  }
}
