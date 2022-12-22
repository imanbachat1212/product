import express from "express";
import Product from '../models/product.model.js';


const router = express.Router()

router.route('/').get(((req, res) => {
    res.status(200).json(Product)
}));

// // add product

router.route('/:add').post(async (req, res) => {
  const {name, price,description} = req.body;
  const product = await Product.create({
      name,
      price,
      description,
     
  })

  if(!product) {
      res.status(400)
      throw new Error('Bad Data!')
  }

  res.status(200).json(product)
})
//   if(!product) {
//     res.status(400)
//     throw new Error('Bad Data!')
// }

// res.status(200).json(product)

//    });
    



       
  //   router.route("/:add").post(async (req, res) => {
  //   const newproduct = new Product({
  //     name: req.body.name,
  //     price:req.body.price,
  //     description: req.body.description,
  //   });
  
  //   newproduct
  //     .save()
  //     .then((doc) => console.log(doc))
  //     .catch((err) => console.log(err));
  // });
  
//   router.route("/posts").get(( (req, res) => {
//     Product.find()
//       .then((Product) => res.json(Product))
//       .catch((err) => console.log(err));
//   }));


  // router.route('/:id').get((req, res) => {
//     const product = products.filter((product) => product.id === Number(req.params.id))[0]
//     res.status(200).json(product);
// })

//     if(!product) {
//         res.status(400)
//         throw new Error('Bad Data!')
//     }

//     res.status(200).json(product)
// })

  
//   app.get("/products/get", (req, res) => {
//     Products.find((err, data) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(data);
//       }
//     });
//   });
  

export default router;