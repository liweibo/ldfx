import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  todaySelected: any = false;
  weekSelected: any = false;
  monSelected: any = false;
  yearSelected: any = false;
  diytimeSelected: any = true;

  todayClicked() {
    this.todaySelected = true;
    this.weekSelected = false;
    this.monSelected = false;
    this.yearSelected = false;
    this.diytimeSelected = false;
  }
  weekClicked() {
    this.todaySelected = false;
    this.weekSelected = true;
    this.monSelected = false;
    this.yearSelected = false;
    this.diytimeSelected = false;
  }
  monthClicked() {
    this.todaySelected = false;
    this.weekSelected = false;
    this.monSelected = true;
    this.yearSelected = false;
    this.diytimeSelected = false;
  }
  yearClicked() {
    this.todaySelected = false;
    this.weekSelected = false;
    this.monSelected = false;
    this.yearSelected = true;
    this.diytimeSelected = false;
  }
  diytimeClicked() {
    this.todaySelected = false;
    this.weekSelected = false;
    this.monSelected = false;
    this.yearSelected = false;
    this.diytimeSelected = true;
  }
}
