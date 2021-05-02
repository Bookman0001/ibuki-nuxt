<template>
  <div>
    <h1 class="title">都道府県別感染者データ</h1>
    <div class="container">
      <div
        v-for="prefectureInfection in infectionList"
        :key="prefectureInfection.id"
      >
        <Prefecture :prefectureInfection="prefectureInfection" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch, Ref } from '@nuxtjs/composition-api'
import { fetchInfectionList } from '~/repositories/infectionList'
import Prefecture from '~/components/Prefecture.vue'
import { Infection } from '~/types'

export default defineComponent({
  name: 'Top',
  components: {
    Prefecture,
  },
  setup() {
    const infectionList: Ref<Infection[]> = ref([])
    useFetch(async () => {
      infectionList.value = await fetchInfectionList()
    })
    return {
      infectionList,
    }
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2rem;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}

@media screen and (max-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 480px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
