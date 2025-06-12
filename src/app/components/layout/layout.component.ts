import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  gitMerge: number = 0;
  gitMerge1: number = 1;
  gitRebase1: number = 0;
  gitRebase2: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
