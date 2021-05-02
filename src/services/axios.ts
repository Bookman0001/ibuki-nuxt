import axios, { AxiosError } from 'axios'

const API_END_POINT: string = process.env.apiEndPoint || ''

export async function get<T = any>(path: string) {
  const response = await axios
    .get<T>(API_END_POINT + path, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .catch((error: AxiosError) => {
      throw error
    })
  return response.data
}
