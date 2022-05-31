import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


function _drawHouses(){
  // get all the houses and build a template
  let html = ''
  for (let h = 0; h < ProxyState.houses.length; h++) {
    html += ProxyState.houses[h].Template
  }
  document.getElementById('listings').innerHTML = html
}


export class HousesController{
 constructor(){
   console.log('Houses controller loaded', ProxyState.houses);
   ProxyState.on('houses', _drawHouses)
 }

 viewHouses(){
  housesService.getHouses()
  _drawHouses()
 }

 deleteHouse(id) {
   housesService.deleteHouse(id)
 }

 openEditForm(id) {
   console.log('open edit form')
 }
}