import {Router} from "express"
import { getproducts,getspecificproduct,createproduct } from "../controllers/products_controller"
const products=Router()
 
products.get("/",getproducts)
products.get("/:id",getspecificproduct)


products.post("/",createproduct)


export {products}