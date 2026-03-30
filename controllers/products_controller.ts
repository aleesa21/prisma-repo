import { Request,Response } from "express"
import { prisma } from "../lib/prisma";
import { products } from "../routes/products-route";


let getproducts=async(req:Request,res:Response)=>{
    const products_list = await prisma.product.findMany();
    res.status(400).send(products_list)
} 

let getspecificproduct=(req:Request,res:Response)=>{
    res.status(200).send(`this is product id: ${req.params.id}`)
} 

let createproduct= async (req:Request,res:Response)=>{
    console.log(req.body)
    const{title,price,description,category,image}=req.body
    const newproduct=await prisma.product.create({
  data: {
    title:title,
    price:price,
    description:description,
    category:category,
    image:image
    
  },
});  
console.log(newproduct)
    res.status(201).send(`Products added sucessfully ${JSON.stringify(newproduct)}`)
}

export{getproducts,getspecificproduct,createproduct}
