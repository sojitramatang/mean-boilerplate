import {client} from '@/services/api'

export function getCoffee() {
  return client.get('/coffee/hot')
}