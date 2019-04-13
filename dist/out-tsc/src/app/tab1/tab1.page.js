import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, ActionSheetController } from '@ionic/angular';
import { PopoverpageComponent } from '../popoverpage/popoverpage.component';
import ECharts from 'echarts';
var Tab1Page = /** @class */ (function () {
    // 设置默认选中页面
    function Tab1Page(popoverController, actionSheetController) {
        this.popoverController = popoverController;
        this.actionSheetController = actionSheetController;
    }
    Tab1Page.prototype.presentPopover = function (ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var popover;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: PopoverpageComponent,
                            event: ev,
                            translucent: false,
                            mode: 'ios'
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log('Delete clicked');
                                    }
                                }, {
                                    text: 'Share',
                                    icon: 'share',
                                    handler: function () {
                                        console.log('Share clicked');
                                    }
                                }, {
                                    text: 'Play (open modal)',
                                    icon: 'arrow-dropright-circle',
                                    handler: function () {
                                        console.log('Play clicked');
                                    }
                                }, {
                                    text: 'Favorite',
                                    icon: 'heart',
                                    handler: function () {
                                        console.log('Favorite clicked');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.ionViewDidEnter = function () {
        this.initChart();
        this.initChart2();
    };
    Tab1Page.prototype.initChart = function () {
        var element = this.chart.nativeElement;
        element.style.width = (document.body.clientWidth - 96) + 'px'; //设置容器宽度
        var myChart = ECharts.init(element);
        var option = {
            dataset: {
                source: [
                    ['score', 'amount', 'product'],
                    [89.3, 700, 'Matcha Latte'],
                    [57.1, 784, 'Milk Tea'],
                    [74.4, 412, 'Cheese Cocoa'],
                ]
            },
            // grid: {containLabel: true},
            xAxis: { name: 'amount', show: false },
            yAxis: { type: 'category', show: false },
            series: [
                {
                    name: '数量',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = [
                                    'rgba(196, 29, 127, 1) ', 'rgba(8, 151, 156, 1)', 'rgba(34, 50, 115, 1)'
                                ];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                show: true,
                                position: 'right',
                                formatter: '{c}',
                                color: 'rgba(0, 0, 0, 0.65)'
                            }
                        }
                    },
                    //设置柱的宽度
                    barWidth: 12,
                    data: [150, 350, 290]
                }
            ]
        };
        myChart.setOption(option);
    };
    Tab1Page.prototype.initChart2 = function () {
        var element = this.chart2.nativeElement;
        element.style.width = (document.body.clientWidth - 96) + 'px'; //设置容器宽度
        var myChart = ECharts.init(element);
        var option = {
            dataset: {
                source: [
                    ['score', 'amount', 'product'],
                    [89.3, 700, 'Matcha Latte'],
                    [57.1, 784, 'Milk Tea'],
                    [74.4, 412, 'Cheese Cocoa'],
                ]
            },
            // grid: {containLabel: true},
            xAxis: { name: 'amount', show: false },
            yAxis: { type: 'category', show: false },
            series: [
                {
                    name: '数量',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = [
                                    'rgba(179, 16, 29, 1)'
                                ];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                show: true,
                                position: 'right',
                                formatter: '{c}',
                                color: 'rgba(0, 0, 0, 0.65)'
                            }
                        }
                    },
                    //设置柱的宽度
                    barWidth: 12,
                    data: [1450, 350, 290, 200, 189, 289, 230, 330]
                }
            ]
        };
        myChart.setOption(option);
    };
    Tab1Page.prototype.todayClicked = function (event) {
        this.t;
        console.log("today:" + JSON.stringify(event));
    };
    tslib_1.__decorate([
        ViewChild('chart'),
        tslib_1.__metadata("design:type", ElementRef)
    ], Tab1Page.prototype, "chart", void 0);
    tslib_1.__decorate([
        ViewChild('chart2'),
        tslib_1.__metadata("design:type", ElementRef)
    ], Tab1Page.prototype, "chart2", void 0);
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PopoverController,
            ActionSheetController])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map