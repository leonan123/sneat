import { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'

export function ProfitReportChart() {
  const {
    chart: chartOptions,
    series,
    ...options
  }: ApexOptions = {
    chart: {
      type: 'line',
      height: 131,
      width: '80%',
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: false,
        top: 0,
        left: 0,
        blur: 3,
        color: 'hsla(var(--warning))',
        opacity: 0.35,
      },
    },
    tooltip: { enabled: false },
    colors: ['hsla(var(--warning))'],
    stroke: {
      width: 4,
      curve: 'smooth',
      lineCap: 'round',
    },
    grid: {
      show: false,
      padding: {
        top: -21,
        left: -5,
        bottom: -8,
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    series: [{ data: [30, 58, 35, 53, 50, 68] }],
  }

  return (
    <div>
      <Chart options={options} series={series} {...chartOptions} />
    </div>
  )
}
