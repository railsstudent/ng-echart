import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as echart from 'echarts';

@Component({
  selector: 'my-chart',
  styles: [
    `
      :host {
        display: block;
      }

      .chart {
        height: 100%;
        width: 100%;
      }
    `,
  ],
  template: `
    <div class="chart" #chart></div>
  `,
})
export class ChartComponent implements OnInit {
  @ViewChild('chart', { static: true })
  elChart: ElementRef | undefined;

  @Input()
  options: echart.EChartOption | undefined;

  constructor() {}

  ngOnInit() {
    if (!this.elChart || !this.elChart.nativeElement || !this.options) {
      return;
    }

    const chart = echart.init(this.elChart.nativeElement);
    chart.setOption(this.options);
  }
}
