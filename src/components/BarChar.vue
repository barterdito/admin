<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
<script setup>
const chartLabels = defineModel('chartLabels')
const dataLabel = defineModel('dataLabel')
const dataCharts = defineModel('dataCharts')


const chartData = {
        labels:chartLabels.value,
        datasets: [
          {
            label: dataLabel.value,
            backgroundColor: '#f87979',
            data: dataCharts.value
          }
        ]
      }

</script>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>