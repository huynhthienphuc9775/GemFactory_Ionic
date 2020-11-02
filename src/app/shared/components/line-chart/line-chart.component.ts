import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit {
  @Input() yAxesTick: boolean;
  @Input() yAxesGridLines: boolean = false;
  @Input() showLineChartLegend: boolean = true;

  chart: Chart;
  options: any;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', lineTension: 0, },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', lineTension: 0, },
    { data: [20, 20, 20, 20, 20, 20, 20], label: 'Series C', lineTension: 0, },
    { data: [30, 30, 30, 30, 30, 30, 30], label: 'Series D', lineTension: 0, },
    { data: [40, 40, 40, 40, 40, 40, 40], label: 'Series E', lineTension: 0, },
    { data: [40, 40, 40, 40, 40, 40, 40], label: 'Series G', lineTension: 0, },

    { data: [40, 40, 40, 40, 40, 40, 40], label: 'Series G', lineTension: 0, },

    { data: [40, 40, 40, 40, 40, 40, 40], label: 'Series J', lineTension: 0, },
    { data: [70, 70, 70, 70, 70, 70, 70], label: 'Series M', lineTension: 0, },

    { data: [40, 40, 40, 40, 40, 40, 40], label: 'Series N', lineTension: 0, },

    { data: [40, 40, 40, 40, 40, 40, 40], label: 'Series B', lineTension: 0, },
    { data: [40, 40, 40, 40, 40, 40, 40], label: 'Series J', lineTension: 0, },
    { data: [40, 40, 40, 40, 40, 40, 40], label: 'Series M', lineTension: 0, },

    { data: [40, 40, 40, 40, 40, 40, 40], label: 'Series N', lineTension: 0, },

    { data: [40, 40, 40, 40, 40, 40, 40], label: 'Series B', lineTension: 0, },


  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any });
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  // @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }
  ngOnInit() {
    this.init();
  }

  init() {
    this.options = {
      margin: 0,
      title: {
        style: {
           color: '#FFFFFF',
        }
     },
      yAxis: {
        title: {
            text: null
        }
      },
      chart: {
        type: 'line'
      },
      credits: {
        enabled: false
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        maxHeight: 200,
        verticalAlign: 'top',
        y: 30,
        navigation: {
          activeColor: '#3E576F',
          animation: true,
          arrowSize: 12,
          inactiveColor: '#CCC',
          style: {
            fontWeight: 'bold',
            color: '#333',
            fontSize: '12px'
          }
        }

      },

      series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      },
      {
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      },
      {
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }]
    };
    let chart = new Chart(this.options);
    chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);

    chart.ref$.subscribe(c => console.log(c.options.chart));
  }
}