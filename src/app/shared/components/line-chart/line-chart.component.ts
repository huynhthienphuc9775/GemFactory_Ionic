import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit {
  @Input() yAxesTick: boolean;
  @Input() yAxesGridLines: boolean = false;
  @Input() showLineChartLegend: boolean = true;

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

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
    this.lineChartLegend = this.showLineChartLegend;

    this.lineChartOptions = {
      legend: {
        position: 'bottom',
      },
      tooltips: { enabled: false },
      responsive: true,
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
        }],
        yAxes: [{
          gridLines: {
            display: this.yAxesGridLines
          },
          ticks: {
            display: this.yAxesTick
          }
        }]
      },
      annotation: {
  
      },
    }
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor(): void {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel(): void {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
  }
}