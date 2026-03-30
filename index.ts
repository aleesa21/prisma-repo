import { prisma } from "./lib/prisma";

// const users = await prisma.user.findMany();
// console.log(users)


import express from "express";
import { products } from "./routes/products-route";
import { gethome } from "./controllers/index_controller";

const app=express()

app.use(express.json())

app.get("/",gethome)

app.use("/products",products)
 

app.listen(3000,()=>{
    console.log("server is running")
})