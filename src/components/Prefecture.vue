<template>
  <div
    :class="{
      'safe-zone prefecture-item': prefectureInfection.cases < 700,
      'caution-zone prefecture-item': prefectureInfection.cases >= 700,
      'danger-zone prefecture-item': prefectureInfection.cases >= 2000,
      'most-danger-zone prefecture-item': prefectureInfection.cases >= 5000,
    }"
  >
    <div class="wrapper">
      <span>{{ prefectureInfection.nameJa }}</span>
    </div>
    <div class="wrapper">
      <label class="label-item">これまでの感染者数</label>
      <span>{{ prefectureInfection.cases }}人</span>
    </div>
    <div class="wrapper">
      <label class="label-item">これまでのPCR検査数</label>
      <span>{{ prefectureInfection.pcr }}人</span>
    </div>
    <div class="wrapper">
      <label class="label-item">これまでの死者数</label>
      <span>{{ prefectureInfection.deaths }}人</span>
    </div>
    <div class="wrapper">
      <label class="label-item">入院患者数</label>
      <span>{{ prefectureInfection.hospitalize }}人</span>
    </div>
    <div class="wrapper">
      <label class="label-item">重症者数</label>
      <span>{{ prefectureInfection.severe }}人</span>
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
        pct: 0,
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
  font-size: 1rem;
  font-weight: 500;
  border-radius: 10px;
  border: 1px solid #303030;
  padding: 10px;
  margin: 10px;
}
.safe-zone {
  background-color: #26499d;
  color: #fff;
}
.caution-zone {
  background-color: #ff9;
}
.danger-zone {
  background-color: #d70035;
  color: #fff;
}
.most-danger-zone {
  background-color: #a50082;
  color: #fff;
}
.wrapper {
  width: 100%;
}
.label-item {
  margin: 5px;
}
</style>
