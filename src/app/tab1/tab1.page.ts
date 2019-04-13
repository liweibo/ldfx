import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, ActionSheetController } from '@ionic/angular';
import { PopoverpageComponent } from '../popoverpage/popoverpage.component';
import ECharts from 'echarts';
import { PickerController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {

  todaySelected: any = true;
  weekSelected: any = false;
  monSelected: any = false;
  yearSelected: any = false;
  diytimeSelected: any = false;

  jwd: any = '机务段';
  cj: any = '车间';
  cd: any = '车队';
  zdz: any = '指导组';
  cwy: any = '乘务员';
  flag: any = 'isflag1';
  flag1: any = 'isflag1';
  flag2: any = 'isflag2';
  flag3: any = 'isflag3';



  @ViewChild('chart') chart: ElementRef;
  @ViewChild('chart2') chart2: ElementRef;
  @ViewChild('chart3') chart3: ElementRef;


  // 设置默认选中页面

  constructor(public popoverController: PopoverController,
    public actionSheetController: ActionSheetController,
    public pickerCtrl: PickerController) {

  }

  async openPickerjwd() {
    const picker = await this.pickerCtrl.create({
      buttons: [{
        text: '取消',
        handler: () => {
          console.log('取消点击了');
        }
      },{
        text:'确定'
      }],
      columns: [
        {
          name: 'years',
          options: [
            {
              text: '重庆机务段',
              value: 1992
            },
            {
              text: '内江机务段',
              value: 1993
            },
            {
              text: '城东机务段',
              value: 1994
            },
          ]
        },
      ]
    });
    await picker.present();
    let w= picker.getColumn('years')
    console.log(w);
  }

  async openPickercj() {
    const picker = await this.pickerCtrl.create({
      buttons: [{
        text: '取消',
        handler: () => {
          console.log('取消点击了');
        }
      },{
        text:'确定'
      }],
      columns: [
        {
          name: 'chejian',
          options: [
            {
              text: '1车间',
              value: 1992
            },
            {
              text: '2车间',
              value: 1993
            },
            {
              text: '3车间',
              value: 1994
            },
          ]
        },
      ]
    });
    await picker.present();
    let w= picker.getColumn('years')
    console.log(w);
  }

  async openPickercd() {
    const picker = await this.pickerCtrl.create({
      buttons: [{
        text: '取消',
        handler: () => {
          console.log('取消点击了');
        }
      },{
        text:'确定'
      }],
      columns: [
        {
          name: 'chedui',
          options: [
            {
              text: '1车队',
              value: 1992
            },
            {
              text: '2车队',
              value: 1993
            },
            {
              text: '3车队',
              value: 1994
            },
          ]
        },
      ]
    });
    await picker.present();
    let w= picker.getColumn('years')
    console.log(w);
  }

  async openPickerzdz() {
    const picker = await this.pickerCtrl.create({
      buttons: [{
        text: '取消',
        handler: () => {
          console.log('取消点击了');
        }
      },{
        text:'确定'
      }],
      columns: [
        {
          name: 'zhidaozu',
          options: [
            {
              text: '1指导组',
              value: 1992
            },
            {
              text: '2指导组',
              value: 1993
            },
            {
              text: '3指导组',
              value: 1994
            },
          ]
        },
      ]
    });
    await picker.present();
    let w= picker.getColumn('years')
    console.log(w);
  }


  async openPickercwy() {
    const picker = await this.pickerCtrl.create({
      buttons: [{
        text: '取消',
        handler: () => {
          console.log('取消点击了');
        }
      },{
        text:'确定'
      }],
      columns: [
        {
          name: 'chnegwuyuan',
          options: [
            {
              text: '小明',
              value: 1992
            },
            {
              text: '小黄',
              value: 1993
            },
            {
              text: '小胖',
              value: 1994
            },
          ]
        },
      ]
    });
    await picker.present();
    let w= picker.getColumn('years')
    console.log(w);
  }

  

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverpageComponent,
      event: ev,
      translucent: false,
      mode: 'ios'
    });
    return await popover.present();
  }




  ionViewDidEnter() {
    this.initChart();
    this.initChart2();
    this.initChart3();


  }

  initChart() {
    let element = this.chart.nativeElement;
    element.style.width = (document.body.clientWidth) + 'px';//设置容器宽度
    let myChart = ECharts.init(element);
    var option = {
      dataset: {
        source: [
          ['score', 'amount', 'product'],
          [89.3, 582, 'LKJ上传'],
          [57.1, 754, '退勤分析'],
          [74.4, 432, '日勤分析'],

        ],

      },
      grid: { containLabel: true },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.65)', // 颜色
            width: 1 // 粗细
          }
        }
      },
      yAxis: { type: 'category' },

      series: [
        {
          barWidth: 12,
          type: 'bar',
          encode: {

            x: 'amount',

            y: 'product'
          },
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = [
                  'rgba(196, 29, 127, 1) ', 'rgba(8, 151, 156, 1)', 'rgba(34, 50, 115, 1)'
                ];
                return colorList[params.dataIndex]
              },
              label: {
                show: true,
                position: 'right',

                color: 'rgba(0, 0, 0, 0.65)'

              }
            }
          },
        }
      ]
    };



    myChart.setOption(option);
  }

  initChart2() {
    let element = this.chart2.nativeElement;
    element.style.width = (document.body.clientWidth - 96) + 'px';//设置容器宽度
    let myChart = ECharts.init(element);
    var option = {
      dataset: {
        source: [
          ['score', 'amount', 'product'],
          [89.3, 52, '监控关机'],
          [57.1, 54, '监控解锁'],
          [74.4, 22, 'LKJ启用日常制动'],
          [57.1, 43, 'LKJ启用紧急制动'],
          [57.1, 54, '20km/h限速模式'],
          [57.1, 49, '区间停车'],
          [57.1, 74, '离岗(司机室无人)'],
          [57.1, 24, '玩电子产品'],
          [57.1, 94, '间断瞭望'],
        ],

      },
      grid: { containLabel: true },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.65)', // 颜色
            width: 1 // 粗细
          }
        }
      },
      yAxis: { type: 'category' },

      series: [
        {
          barWidth: 12,
          type: 'bar',
          encode: {

            x: 'amount',

            y: 'product'
          },
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = [
                  '#B3101D'
                ];
                return colorList[params.dataIndex]
              },
              label: {
                show: true,
                position: 'right',

                color: 'rgba(0, 0, 0, 0.65)'

              }
            }
          },
        }
      ]
    };


    myChart.setOption(option);
  }
  initChart3() {
    let element = this.chart3.nativeElement;
    element.style.width = (document.body.clientWidth) + 'px';//设置容器宽度
    let myChart = ECharts.init(element);
    var option = {

      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['LKJ上传', '退勤分析', '日勤分析'],
        icon: 'rectangle',
        textStyle: {//图例文字的样式
          color: 'rgba(0, 0, 0, 0.65)',
          fontSize: 12
        }
      },
      color: ['rgba(34, 50, 115, 1)', 'rgba(8, 151, 156, 1)', 'rgba(196, 29, 127, 1)'],
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['03/25', '03/26', '03/27', '03/28', '03/29', '03/30', '03/31'],
        axisLine: {
          lineStyle: {
            width: '1'
          }
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: '#fff',//左边线的颜色
            width: '0'//坐标线的宽度
          }
        }
      },
      series: [
        {
          name: 'LKJ上传',
          animation: true,
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210],
          lineStyle: {
            normal: {
              color: 'rgba(34, 50, 115, 1)'
            },

          }
        },
        {
          name: '退勤分析',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310],
          lineStyle: {
            normal: {
              color: 'rgba(8, 151, 156, 1)'
            },

          }
        },
        {
          name: '日勤分析',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410],
          lineStyle: {
            normal: {
              color: 'rgba(196, 29, 127, 1)'
            },

          }
        },

      ]
    };

    myChart.setOption(option);
  }


  todayClicked(event) {
    this.todaySelected = true;
    this.weekSelected = false;
    this.monSelected = false;
    this.yearSelected = false;
    this.diytimeSelected = false;
  }
  weekClicked(event) {
    this.todaySelected = false;
    this.weekSelected = true;
    this.monSelected = false;
    this.yearSelected = false;
    this.diytimeSelected = false;
  }
  monthClicked(event) {
    this.todaySelected = false;
    this.weekSelected = false;
    this.monSelected = true;
    this.yearSelected = false;
    this.diytimeSelected = false;
  }
  yearClicked(event) {
    this.todaySelected = false;
    this.weekSelected = false;
    this.monSelected = false;
    this.yearSelected = true;
    this.diytimeSelected = false;
  }
  diytimeClicked(event) {
    this.todaySelected = false;
    this.weekSelected = false;
    this.monSelected = false;
    this.yearSelected = false;
    this.diytimeSelected = true;
  }

  clickbar() {
    this.flag = 'isflag1';
  }
  clickline() {
    this.flag = 'isflag2';
  }
  clicktable() {
    this.flag = 'isflag3';
  }
  clickbar1() {
    this.flag1 = 'isflag1';
  }
  clickline1() {
    this.flag1 = 'isflag2';
  }
  clicktable1() {
    this.flag1 = 'isflag3';
  }

  clickbar2() {
    this.flag2 = 'isflag1';
  }
  clickline2() {
    this.flag2 = 'isflag2';
  }
  clicktable2() {
    this.flag2 = 'isflag3';
  }

  clickbar3() {
    this.flag3 = 'isflag1';
  }
  clickline3() {
    this.flag3 = 'isflag2';
  }
  clicktable3() {
    this.flag3 = 'isflag3';
  }
}
