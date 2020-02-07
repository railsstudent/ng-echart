import { Component, OnInit } from '@angular/core';

const GRID = {
  left: '50px',
  right: '50px',
  bottom: '50px',
  containLabel: false,
};

const VALUE_TYPE = {
  type: 'value',
};

const LABEL_INSIDE_RIGHT = {
  show: true,
  position: 'insideRight',
};

const LABEL_INSIDE = {
  show: true,
  position: 'inside',
};

@Component({
  selector: 'my-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  options = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    title: {
      text: 'Sales',
    },
    grid: GRID,
    xAxis: {
      type: 'category',
      data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
    },
    yAxis: VALUE_TYPE,
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Sales'],
    },
    series: [
      {
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        label: {
          show: true,
          position: 'top',
        },
      },
    ],
  };

  options2 = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    title: {
      text: 'Landscape Chart',
    },
    grid: GRID,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    xAxis: {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016'],
    },
    yAxis: VALUE_TYPE,
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
    },
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        label: LABEL_INSIDE,
        data: [320, 332, 301, 334, 390],
      },
      {
        name: 'Steppe',
        type: 'bar',
        barGap: 0,
        label: LABEL_INSIDE,
        data: [220, 182, 191, 234, 290],
      },
      {
        name: 'Desert',
        type: 'bar',
        barGap: 0,
        label: LABEL_INSIDE,
        data: [150, 232, 201, 154, 190],
      },
      {
        name: 'Wetland',
        type: 'bar',
        barGap: 0,
        label: LABEL_INSIDE,
        data: [98, 77, 101, 99, 40],
      },
    ],
  };

  options3 = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    grid: GRID,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    xAxis: VALUE_TYPE,
    yAxis: {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016'],
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
    },
    series: [
      {
        name: 'Forest',
        type: 'bar',
        stack: '总量',
        label: LABEL_INSIDE_RIGHT,
        data: [20, 32, 37, 34, 40],
      },
      {
        name: 'Steppe',
        type: 'bar',
        stack: '总量',
        label: LABEL_INSIDE_RIGHT,
        data: [60, 52, 91, 34, 35],
      },
      {
        name: 'Desert',
        type: 'bar',
        stack: '总量',
        label: LABEL_INSIDE_RIGHT,
        data: [50, 32, 21, 54, 10],
      },
      {
        name: 'Wetland',
        type: 'bar',
        stack: '总量',
        label: LABEL_INSIDE_RIGHT,
        data: [38, 17, 11, 49, 40],
      },
    ],
  };

  options4 = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e', 'goldenrod'],
    grid: GRID,
    xAxis: {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016'],
    },
    yAxis: VALUE_TYPE,
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland', 'Prairie'],
    },
    tooltip: {
      trigger: 'axis',
    },
    series: [
      {
        name: 'Forest',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390],
      },
      {
        name: 'Steppe',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290],
      },
      {
        name: 'Desert',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190],
      },
      {
        name: 'Wetland',
        type: 'line',
        stack: '总量',
        data: [98, 77, 101, 99, 40],
      },
      {
        name: 'Prairie',
        type: 'line',
        stack: '总量',
        data: [198, 177, 201, 199, 140],
      },
    ],
  };

  options5 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    toolbox: {
      feature: {
        // dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    grid: GRID,
    legend: {
      data: ['Vaporization', 'Rainfall', 'Average Tempereature'],
    },
    xAxis: [
      {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Volume',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} ml',
        },
      },
      {
        type: 'value',
        name: 'Temperature',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} °C',
        },
      },
    ],
    series: [
      {
        name: 'Vaporization',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      },
      {
        name: 'Rainfall',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      },
      {
        name: 'Average Tempereature',
        type: 'line',
        yAxisIndex: 1,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
