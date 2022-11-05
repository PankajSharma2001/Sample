import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FirstComponent } from './first/first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  nameObject = {
    name: 'Angular',
  };

  @ViewChild(FirstComponent) component!: FirstComponent;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users', {
        observe: 'response',
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  onNameChange(changedName :any) {
    this.name = changedName;
  }
}
