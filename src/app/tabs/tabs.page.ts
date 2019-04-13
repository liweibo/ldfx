import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  flag = 'tab1';
  // flag1 = 'tab2';
  // flag2 = 'tab3';
  change(event) {
    this.flag = event.detail.tab;
    // this.flag1 = event.detail.tab;
    // this.flag2 = event.detail.tab;
  }


}
