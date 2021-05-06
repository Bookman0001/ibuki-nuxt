import Prefecture from './Prefecture.vue'

export default {
  title: 'Prefecture',
}

const severe = {
  id: 1,
  nameJa: 'テスト都道府県',
  nameEn: 'test prefecture',
  lat: 0,
  lng: 0,
  population: 1000,
  cases: 10000,
  deaths: 0,
  pcr: 500,
  hospitalize: 10,
  severe: 0,
}

export const Severe = () => ({
  components: { Prefecture },
  data() {
    return {
      prefectureInfection: severe,
    }
  },
  template: '<Prefecture :prefectureInfection="prefectureInfection"/>',
})

const danger = {
  id: 1,
  nameJa: 'テスト都道府県',
  nameEn: 'test prefecture',
  lat: 0,
  lng: 0,
  population: 1000,
  cases: 4000,
  deaths: 0,
  pcr: 500,
  hospitalize: 10,
  severe: 0,
}

export const Danger = () => ({
  components: { Prefecture },
  data() {
    return {
      prefectureInfection: danger,
    }
  },
  template: '<Prefecture :prefectureInfection="prefectureInfection"/>',
})

const caution = {
  id: 1,
  nameJa: 'テスト都道府県',
  nameEn: 'test prefecture',
  lat: 0,
  lng: 0,
  population: 1000,
  cases: 800,
  deaths: 0,
  pcr: 500,
  hospitalize: 10,
  severe: 0,
}

export const Caution = () => ({
  components: { Prefecture },
  data() {
    return {
      prefectureInfection: caution,
    }
  },
  template: '<Prefecture :prefectureInfection="prefectureInfection"/>',
})

const normal = {
  id: 1,
  nameJa: 'テスト都道府県',
  nameEn: 'test prefecture',
  lat: 0,
  lng: 0,
  population: 1000,
  cases: 100,
  deaths: 0,
  pcr: 500,
  hospitalize: 10,
  severe: 0,
}

export const Normal = () => ({
  components: { Prefecture },
  data() {
    return {
      prefectureInfection: normal,
    }
  },
  template: '<Prefecture :prefectureInfection="prefectureInfection"/>',
})
