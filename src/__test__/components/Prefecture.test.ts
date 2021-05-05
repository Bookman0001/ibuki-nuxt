import { mount } from '@vue/test-utils'
import Prefecture from '~/components/Prefecture.vue'

describe('Prefecture', () => {
  test('render correctly', () => {
    const prefecture = mount(Prefecture, {
      propsData: {
        id: 1,
        nameJa: 'テスト都道府県',
        nameEn: 'test-prefecture',
        lat: 0,
        lng: 0,
        population: 10000,
        cases: 10,
        deaths: 0,
        pcr: 1000,
        hospitalize: 0,
        severe: 0,
      },
    })
    expect(prefecture.element).toMatchSnapshot()
  })
})
