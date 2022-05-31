import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"


class HousesService {
  constructor() {

  }

  async getHouses() {
    const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/houses')
    console.log('getHouses', res.data)
    ProxyState.houses = res.data.map(h => new House(h))
  }

  async deleteHouse(id) {
    const res = await axios.delete('https://bcw-sandbox.herokuapp.com/api/houses/' + id)
    console.log('deleteHouse: ' + res.data)
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
  }
}

export const housesService = new HousesService()