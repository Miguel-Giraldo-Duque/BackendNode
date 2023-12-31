// const express = require("express")

// const router = express.Router()
// const ProductService = require("../services/products.services")


// const service = new ProductService()

// router.get("/",  async (req, res) =>{
//   const data = await service.find()
//   res.json(data)
// })

// router.get("/:id",  async (req, res , next) =>{
//     try{
//       const {id} = req.params;
//       const product = await service.findOne(id)
//       res.json(product)
//     }catch(err){
//       next(err)
//     }
// })


// router.post("/" ,  async (req, res) =>{
//   const body = req.body
//   const newProduct = await service.create(body)
//  res.json(newProduct)
// })





// router.patch("/:id" ,  async (req, res , next) =>{
//  try{
//   const {id} = req.params
//   const body = req.body


//   const info = await service.update(id , body)

//   res.json(info)
//  }catch(error){
//     next(error)
//  }
// })


// router.delete("/:id" , (req, res) =>{
//   const {id} = req.params
//   const info = service.delete(id)

//   res.json(info)
// })



// module.exports = router




const express = require('express');

const ProductsService = require('../services/products.services');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }

});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
