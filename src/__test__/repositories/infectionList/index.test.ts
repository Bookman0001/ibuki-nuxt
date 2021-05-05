import axios from 'axios'
import { fetchInfectionList } from '~/repositories/infectionList'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

test('should return fetchedPrefectureList', () => {
  const fetchedPrefectureList = [
    {
      id: 1,
      name_ja: 'テスト都道府県',
      name_en: 'test-prefecture',
      lat: 0,
      lng: 0,
      population: 10000,
      cases: 10,
      deaths: 0,
      pcr: 1000,
      hospitalize: 0,
      severe: 0,
    },
    {
      id: 2,
      name_ja: 'テスト都道府県2',
      name_en: 'test-prefecture2',
      lat: 10,
      lng: 11,
      population: 30000,
      cases: 50,
      deaths: 0,
      pcr: 3000,
      hospitalize: 0,
      severe: 0,
    },
  ]

  const expectedPrefectureList = [
    {
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
    {
      id: 2,
      nameJa: 'テスト都道府県2',
      nameEn: 'test-prefecture2',
      lat: 10,
      lng: 11,
      population: 30000,
      cases: 50,
      deaths: 0,
      pcr: 3000,
      hospitalize: 0,
      severe: 0,
    },
  ]
  const resp = { data: fetchedPrefectureList }
  mockedAxios.get.mockResolvedValue(resp)

  return fetchInfectionList().then((data) => {
    expect(data).toEqual(expectedPrefectureList)
  })
})
