import { Component } from '@angular/core';

@Component({
  selector: 'ng2-google-chart',
  templateUrl: './view/google-chart.html'
})

export class GoogleChartComponent {

  //bar or column chart options
  columnChartOptions = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Country', 'Performance', 'Profits'],
      ['Germany', 700, 1200],
      ['USA', 300, 600],
      ['Brazil', 400, 500],
      ['Canada', 500, 1000],
      ['France', 600, 1100],
      ['RU', 800, 1000]
    ],
    options: {
      'title': 'Countries',
      animation: {
        duration: 200,
        easing: 'inAndOut',
      }
    },
  };

  //pie chart options
  pieChartOptions = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {
      'title': 'Tasks',
      animation: {
        duration: 200,
        easing: 'inAndOut',
      }
    },
  };

  //gauge chart options
  gaugeChartOptions = {
    chartType: 'Gauge',
    dataTable: [
      ['Label', 'Value'],
      ['Value', 1.78]
    ],
    options: {
      animation: { easing: 'out' ,duration:100},
      width: 200, height: 200,
      greenFrom: 1, greenTo: 4,
      minorTicks: 5,
      min: 0, max: 5,
      majorTicks: ['0', '1', '2', '3', '4', '5'],
      greenColor: '#d0e9c6'
    },
  };


  //scatter Chart Options
  scatterChartOptions = {
    chartType: 'ScatterChart',
    dataTable: [
      ['Age', 'Weight'],
      [8, 12],
      [4, 5.5],
      [11, 14],
      [4, 5],
      [3, 3.5],
      [6.5, 7]
    ],
    options: {
      title: 'Age vs. Weight comparison',
      hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
      vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
      legend: 'none'
    }
  };

  //line chart options
  lineChartOptions = {
    chartType: 'Line',
    dataTable: [
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540]],
    options: {
      animation: { easing: 'out' },
      title: "Sales Data"
    },
  };

  //bubble chart options
  bubbleChartOptions = {
    chartType: 'BubbleChart',
    dataTable: [
      ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
      ['CAN', 80.66, 1.67, 'North America', 33739900],
      ['DEU', 79.84, 1.36, 'Europe', 81902307],
      ['DNK', 78.6, 1.84, 'Europe', 5523095],
      ['EGY', 72.73, 2.78, 'Middle East', 79716203],
      ['GBR', 80.05, 2, 'Europe', 61801570],
      ['IRN', 72.49, 1.7, 'Middle East', 73137148],
      ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
      ['ISR', 81.55, 2.96, 'Middle East', 7485600],
      ['RUS', 68.6, 1.54, 'Europe', 141850000],
      ['USA', 78.09, 2.05, 'North America', 307007000]],
    options: {
      animation: { easing: 'out' },
      title: "Country Data"
    },
  };

  //candle chart options
  candleChartOptions = {
    chartType: 'CandlestickChart',
    dataTable: [
      ['Day', 'Low', 'Opening value', 'Closing value', 'High'],
      ['Mon', 28, 28, 38, 38],
      ['Tue', 38, 38, 55, 55],
      ['Wed', 55, 55, 77, 77],
      ['Thu', 77, 77, 66, 66],
      ['Fri', 66, 66, 22, 22]
    ],
    options: {
      animation: { easing: 'out' },
      bar: { groupWidth: '100%' }, // Remove space between bars.
      candlestick: {
        fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
        risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
      }
    },
  };

  //generate random data
  randomData() {
    // forces a reference update (otherwise angular doesn't detect the change)
    this.columnChartOptions = Object.create(this.columnChartOptions);
    for (let i = 1; i < 7; i++) {
      this.columnChartOptions.dataTable[i][1] = Math.round(
        Math.random() * 1000);
      this.columnChartOptions.dataTable[i][2] = Math.round(
        Math.random() * 1000);
    }
  }

}