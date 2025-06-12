import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import vi from '@angular/common/locales/vi';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [TranslateModule, CommonModule]
})
export class HomeComponent implements OnInit {

  constructor(private trans : TranslateService) { 
    this.trans.use('vi')
  }

  ngOnInit() {
  }

}
