import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
