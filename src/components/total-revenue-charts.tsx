'use client'

import { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'

export function TotalRevenueBarChart() {
  const { chart: chartOptions, ...options }: ApexOptions = {
    chart: {
      id: 'bar-chart',
      type: 'bar',
      height: 336,
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 5,
      lineCap: 'round',
      colors: ['hsla(var(--bg-secondary))'],
    },
    colors: ['#696cff', '#03c3ec'],
    legend: {
      offsetX: -10,
      position: 'top',
      fontSize: '14px',
      horizontalAlign: 'left',
      labels: {
        useSeriesColors: true,
      },
      itemMargin: {
        vertical: 4,
        horizontal: 10,
      },
      markers: {
        width: 8,
        height: 8,
        radius: 10,
        offsetX: -4,
      },
    },
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    grid: {
      padding: {
        bottom: 5,
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: 35,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: {
          fontSize: '14px',
          colors: 'hsla(var(--text-muted))',
        },
      },
    },
    yaxis: {
      stepSize: 10,
      labels: {
        style: {
          fontSize: '14px',
          colors: 'hsla(var(--text-muted))',
        },
      },
    },
    tooltip: {
      theme: 'dark',
    },
  }
  const series: ApexOptions['series'] = [
    {
      name: `${new Date().getFullYear() - 1}`,
      data: [18, 7, 15, 29, 18, 12, 9],
    },
    {
      name: `${new Date().getFullYear() - 2}`,
      data: [-13, -18, -9, -14, -5, -17, -15],
    },
  ]

  return (
    <div>
      <Chart options={options} series={series} {...chartOptions} />
    </div>
  )
}

export function TotalRevenueRadialChart() {
  const {
    chart: chartOptions,
    series,
    ...options
  }: ApexOptions = {
    chart: {
      type: 'radialBar',
      height: 250,
      offsetY: -10,
      sparkline: { enabled: true },
    },
    labels: ['Growth'],
    stroke: { dashArray: 5 },
    colors: [`hsla(var(--text-secondary))`],
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: ['hsla(var(--text-secondary))'],
        shade: 'dark',
        shadeIntensity: 0.5,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [30, 70, 100],
      },
    },
    plotOptions: {
      radialBar: {
        endAngle: 150,
        startAngle: -140,
        hollow: { size: '55%' },
        track: { background: 'transparent' },
        dataLabels: {
          name: {
            offsetY: 25,
            fontWeight: 600,
            fontSize: '16px',
            color: 'hsla(var(--text-muted))',
          },
          value: {
            offsetY: -15,
            fontWeight: 500,
            fontSize: '24px',
            color: 'hsla(var(--text-active))',
            formatter: (val) => {
              return val + '%'
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 900,
        options: {
          chart: { height: 200 },
        },
      },
      {
        breakpoint: 735,
        options: {
          chart: { height: 200 },
        },
      },
      {
        breakpoint: 660,
        options: {
          chart: { height: 200 },
        },
      },
      {
        breakpoint: 600,
        options: {
          chart: { height: 280 },
        },
      },
    ],
    series: [78],
  }
  return (
    <div>
      <Chart options={options} series={series} {...chartOptions} />
    </div>
  )
}
