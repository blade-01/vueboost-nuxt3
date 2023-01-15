<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
    <div
      class="chart-bar flex justify-between items-center"
      v-for="{ count, title } in metrics"
    >
      <div class="flex flex-col gap-0.5 justify-between">
        <p class="text-xl">{{ count }}</p>
        <p class="chart-title text-xl">{{ title }}</p>
      </div>
      <span
        class="mdi mdi-chart-timeline-variant text-5xl font-semibold text-[#344675] dark:text-primary"
      ></span>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-0.5">
    <div class="chart-bar">
      <p class="chart-title">Bar Chart</p>
      <VueApexCharts
        type="bar"
        :options="barChartOptions"
        :series="barChartSeries"
      ></VueApexCharts>
    </div>
    <div class="chart-bar">
      <p class="chart-title">Area Chart</p>
      <VueApexCharts
        type="area"
        :options="areaChartOptions"
        :series="areaChartSeries"
      ></VueApexCharts>
    </div>
    <div class="chart-bar">
      <p class="chart-title">Polar Chart</p>
      <VueApexCharts
        type="polarArea"
        :options="polarChartOptions"
        :series="polarChartSeries"
      ></VueApexCharts>
    </div>
    <div class="chart-bar">
      <p class="chart-title">Radial Chart</p>
      <VueApexCharts
        type="radialBar"
        :options="radialOptions"
        :series="radialSeries"
      ></VueApexCharts>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

definePageMeta({ layout: 'custom' })

const metrics: { count: number; title: string }[] = [
  {
    count: 400,
    title: 'clicks'
  },
  {
    count: 422,
    title: 'views'
  },
  {
    count: 350,
    title: 'leads'
  },
  {
    count: 270,
    title: 'sales'
  }
]
const {
  barChartSeries,
  barChartOptions,
  polarChartOptions,
  polarChartSeries,
  radialOptions,
  radialSeries,
  areaChartOptions,
  areaChartSeries
} = useCharts()
</script>

<style scoped></style>
