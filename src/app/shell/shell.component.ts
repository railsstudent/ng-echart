import { Component, OnInit } from '@angular/core';

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
    grid: {
      left: '50px',
      right: '50px',
      bottom: '50px',
      containLabel: false,
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
    },
    yAxis: {
      type: 'value',
    },
    legend: {
      data: ['Sales'],
    },
    series: [
      {
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  options2 = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    title: {
      text: 'Landscape Chart',
    },
    grid: {
      left: '50px',
      right: '50px',
      bottom: '50px',
      containLabel: false,
    },
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
    yAxis: {
      type: 'value',
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
    },
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        label: {
          show: true,
          position: 'inside',
        },
        data: [320, 332, 301, 334, 390],
      },
      {
        name: 'Steppe',
        type: 'bar',
        barGap: 0,
        label: {
          show: true,
          position: 'inside',
        },
        data: [220, 182, 191, 234, 290],
      },
      {
        name: 'Desert',
        type: 'bar',
        barGap: 0,
        label: {
          show: true,
          position: 'inside',
        },
        data: [150, 232, 201, 154, 190],
      },
      {
        name: 'Wetland',
        type: 'bar',
        barGap: 0,
        label: {
          show: true,
          position: 'inside',
        },
        data: [98, 77, 101, 99, 40],
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
