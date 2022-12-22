import  express from "express";
import productsRoutes from './routes/productsRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
// const Product=require("./config/db")

dotenv.config();
await connectDB();


const app = express();
const PORT = 5000;
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(express.json())

app.get('/health',(req,res)=>{
    res.send('API is working ...');
})

      
app.use('/products',productsRoutes);




app.listen(PORT,console.log('Server is running'));
