import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.less']
})
export class CharInfoComponent implements OnInit {
  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
