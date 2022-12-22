import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name:String,
    price:{type:Number,required:true},
    description:{type:String,required:false}
 
  }
 
);


const Product = mongoose.model("Product", productSchema);

export default Product;