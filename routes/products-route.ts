import {Router} from "express"
import { getproducts,getspecificproduct,createproduct,updateproduct,deleteproduct } from "../controllers/products_controller"
const products=Router()
 
products.get("/",getproducts)
products.get("/:id",getspecificproduct)


products.post("/",createproduct)

products.put("/:id",updateproduct)
products.delete("/:id",deleteproduct)

export {products}