import type { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'

export function OrderStatisticsChart() {
  const {
    chart: chartOptions,
    series,
    ...options
  }: ApexOptions = {
    chart: {
      type: 'donut',
      width: 130,
      height: 150,
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    stroke: {
      width: 6,
      colors: ['hsla(var(--card))'],
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['Fashion', 'Electronic', 'Sports', 'Decor'],
    colors: [
      'hsla(var(--info))',
      'hsla(var(--text-secondary))',
      'hsla(var(--success))',
      'hsla(var(--text-primary))',
    ],
    grid: {
      padding: {
        top: -7,
        bottom: 5,
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
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              offsetY: 17,
              fontSize: '14px',
              color: 'hsla(var(--text-muted))',
              fontFamily: 'Public Sans',
            },
            value: {
              offsetY: -17,
              fontSize: '24px',
              color: 'hsla(var(--text-primary))',
              fontFamily: 'Public Sans',
            },
            total: {
              show: true,
              label: 'Weekly',
              fontSize: '14px',
              formatter: () => '38%',
              color: 'hsla(var(--text-muted))',
              fontFamily: 'Public Sans',
            },
          },
        },
      },
    },
    series: [45, 80, 20, 40],
  }

  return (
    <div>
      <Chart options={options} series={series} {...chartOptions} />
    </div>
  )
}
