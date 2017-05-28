import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-attr',
  templateUrl: './char-attr.component.html',
  styleUrls: ['./char-attr.component.less']
})
export class CharAttrComponent implements OnInit {
  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
