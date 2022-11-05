import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  data = 'Local Data To check';
  sharedData!: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.sharedData$
      .subscribe(sharedData => this.sharedData = sharedData);
  }

  updateData() {
    this.sharedService.setData(this.data);
  }

}