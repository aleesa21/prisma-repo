import { Request,Response } from "express";

let gethome=(req:Request,res:Response)=>{
        res.status(200).send("this is home page");
}



export{gethome}