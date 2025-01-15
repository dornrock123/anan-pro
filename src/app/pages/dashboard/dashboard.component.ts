import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  fallsToday: number = 5; // จำนวนการล้มวันนี้
  maxVibration: number = 15.6; // แรงสั่นสะเทือนสูงสุด
  avgVibration: number = 9.3; // ค่าเฉลี่ยแรงสั่นสะเทือน

  fallEvents = [
    { timestamp: '2025-01-13 09:30:00', vibration: 12.5, location: 'Living Room' },
    { timestamp: '2025-01-13 11:15:00', vibration: 14.8, location: 'Bedroom' },
    { timestamp: '2025-01-13 13:50:00', vibration: 10.2, location: 'Bathroom' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const ctx = (document.getElementById('fallTrendChart') as HTMLCanvasElement)
      .getContext('2d');

    new Chart(ctx!, {
      type: 'line',
      data: {
        labels: ['7 Days Ago', '6 Days Ago', '5 Days Ago', '4 Days Ago', '3 Days Ago', '2 Days Ago', 'Today'],
        datasets: [
          {
            label: 'Number of Falls',
            data: [3, 4, 5, 2, 6, 4, this.fallsToday],
            borderColor: 'rgba(59, 130, 246, 0.8)',
            backgroundColor: 'rgba(59, 130, 246, 0.3)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }
}
