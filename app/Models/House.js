import { generateId } from "../Utils/generateId.js"

//   bedrooms: {
//   type: "Number",
//   required: true

//   bathrooms: {
//   type: "Number",
//   required: true

//   levels: {
//   type: "Number",
//   required: true

//   imgUrl: {
//   type: "String"

//   year: {
//   type: "Number",
//   required: true

//   price: {
//   type: "Number",
//   required: true

//   description: {
//   type: "String"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }

  get Template() {
    return `
    <div class=" col-6 col-md-3">
      <div class="rounded shadow bg-white p-2" ">
        <img class="img-fluid" src="${this.imgUrl}" alt="">
        <h5 class="text-center">${this.year} | ${this.levels} Story</h5>
        <h5 class="text-center">${this.bedrooms} Bed | ${this.bathrooms} Bath</h5>
        <h4 class="text-center">$${this.price}</h4>
        <p>${this.description}</p>
        <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
        <button class="btn btn-warning" onclick="app.housesController.openEditForm('${this.id}')"><i class="mdi mdi-pencil"></i></button>
      </div>
    </div>`
  }
}