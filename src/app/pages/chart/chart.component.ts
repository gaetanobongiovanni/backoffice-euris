import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartService } from '../../services/chart.service';
import { DataChart } from '../../models/data-chart';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})

export class ChartComponent implements OnInit{

  dataChart: DataChart[] = [];
  cfg: any;
  chart: any;
  constructor(
    private chartService: ChartService
  ) {}
  ngOnInit(): void {
    this.chartService.dataCategories().subscribe({
      next: (res: any) => {
        res.map((val: DataChart) => this.dataChart.push(new DataChart().deserialize(val)));
        this.createChart();
      },
      error: (err: any) => {

      }

    });
  }

  async createChart() {
    this.chart = new Chart(
      "MyChart",
      {
        type: 'bar',
        data: {
          labels: this.dataChart.map((row) => row.category),
          datasets: [
            {
              label: 'Prodotti Venduti',
              data: this.dataChart.map((row) => row.numberOfProducts)
            }
          ]
        }
      }
    );
  }

}
