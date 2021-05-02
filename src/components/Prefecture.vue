<template>
  <div
    :class="{
      'safe-zone prefecture-item': prefectureInfection.cases < 500,
      'caution-zone prefecture-item': prefectureInfection.cases >= 500,
      'danger-zone prefecture-item': prefectureInfection.cases >= 1000,
    }"
  >
    <div class="wrapper">
      <span>{{ prefectureInfection.nameJa }}</span>
    </div>
    <div class="wrapper">
      <label class="label-item">感染者数</label>
      <span>{{ prefectureInfection.cases }}</span>
    </div>
    <div class="wrapper">
      <label class="label-item">感染による死者数</label>
      <span>{{ prefectureInfection.deaths }}</span>
    </div>
    <div class="wrapper">
      <label class="label-item">都道府県人口</label>
      <span>{{ prefectureInfection.population }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Infection } from '~/types'

export default defineComponent({
  props: {
    prefectureInfection: {
      type: Object as PropType<Infection>,
      default: () => ({
        id: 0,
        nameJa: '',
        nameEn: '',
        lat: '',
        lng: '',
        population: 0,
        cases: 0,
        deaths: 0,
      }),
    },
  },
})
</script>

<style scoped>
.prefecture-item {
  border-radius: 10px;
  border: 1px solid #303030;
  padding: 10px;
  margin: 10px;
}
.safe-zone {
  background-color: #48d1cc;
}
.caution-zone {
  background-color: #ff9;
}
.danger-zone {
  background-color: #ffa3a3;
}
.wrapper {
  width: 100%;
}
.label-item {
  margin: 5px;
}
</style>
