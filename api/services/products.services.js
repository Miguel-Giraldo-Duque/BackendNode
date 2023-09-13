
// const {faker} = require("@faker-js/faker")
// const boom = require("@hapi/boom")

// class productServices {
//   constructor(){
//     this.products = []
//     this.generate()
//   }

//   generate(){
//     const limit =  10

//     for (let i = 0; i < limit ; i++) {
//       this.products.push({
//         id: faker.string.uuid(),
//         name : faker.commerce.productName(),
//         price: parseInt(faker.commerce.price(), 10)
//       })
//     }
//   }

//   async create(data){
//     const newProduct = {
//       id: faker.string.uuid(),
//       ...data
//     }
//     this.products.push(newProduct)
//     return newProduct
//   }


//   async findOne(id){
//     const product =  this.products.find(e => e.id === id)
//     if (!product) {
//       throw boom.notFound("Not found men ")
//     }

//     return product
//   }

//   find() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(this.products);
//       }, 5000);
//     })
//   }


//   async update(id , changes){
//     const index = this.products.findIndex( e => e.id === id)

//     if (index === -1 ) {
//       throw boom.notFound("Product not found babe ")
//     }
//       let info = this.products[index]
//       this.products[index] = {
//         ...info,
//         ...changes
//       }
//       return this.products[index]
//   }

//   async delete(id){
//     const index = this.products.findIndex( e => e.id === id)

//     if (index === -1 ) {
//       throw boom.notFound("No se pudo encontro el producto")
//     }
//     this.products.splice(index , 1)
//     return{
//         message: "deleted",
//         id
//       }
//   }
// }

// module.exports = productServices

const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    })
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
