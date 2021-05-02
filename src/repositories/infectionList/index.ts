import { get } from '~/services'
import { Infection } from '~/types'

/* eslint-disable camelcase */
type InfectionListResponse = {
  id: number
  name_ja: string
  name_en: string
  lat: number
  lng: number
  population: number
  cases: number
  deaths: number
}[]
/* eslint-enable camelcase */

export const fetchInfectionList = async (): Promise<Infection[]> => {
  return await get<InfectionListResponse>('/prefectures').then(
    (response: InfectionListResponse) => {
      return response.map((data) => {
        return {
          id: data.id,
          nameJa: data.name_ja,
          nameEn: data.name_en,
          lat: data.lat,
          lng: data.lng,
          population: data.population,
          cases: data.cases,
          deaths: data.deaths,
        }
      })
    }
  )
}
