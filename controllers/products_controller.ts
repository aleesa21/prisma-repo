import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { products } from "../routes/products-route";

let getproducts = async (req: Request, res: Response) => {
  const products_list = await prisma.product.findMany();
  res.status(200).send(products_list);
};

let getspecificproduct = async (req: Request, res: Response) => {
  try {
    let specificprod = await prisma.product.findUnique({
      where: { id: Number(req.params.id) },
    });
    res.status(200).send(specificprod);
    if(specificprod== null ){
        throw new Error("yo  error ho ")
    }
    console.log(specificprod)
  } 
  catch (error) {
    console.log(error)
    res.status(404).send("Product not found");
  }
};

let createproduct = async (req: Request, res: Response) => {
  console.log(req.body);
  const { title, price, description, category, image } = req.body;
  const newproduct = await prisma.product.create({
    data: {
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
    },
  });
  console.log(newproduct);
  res
    .status(201)
    .send(`Products added sucessfully ${JSON.stringify(newproduct)}`);
};

let updateproduct = async (req: Request, res: Response) => {
  let requestedid = req.params.id;
  const { title, price, description, category, image } = req.body;
  try {
    const updatedProd = await prisma.product.update({
      where: { id: Number(requestedid) },
      data: {
        title: title,
        price: price,
        description: description,
        category: category,
        image: image,
      },
    });
    res
      .status(200)
      .send(`Products updated sucessfully ${JSON.stringify(updatedProd)}`);
  } catch (error) {
    res.status(404).send("Product not found");
  }
};

let deleteproduct = async (req: Request, res: Response) => {
  let requestedid = req.params.id;
  try {
    const deleteUser = await prisma.product.delete({
      where: {
        id: Number(requestedid),
      },
    });
    res.status(200).send(`deleted data of id:${requestedid}`);
  } catch (error) {
    res.status(404).send("Product not found");
  }
};

export {
  getproducts,
  getspecificproduct,
  createproduct,
  updateproduct,
  deleteproduct,
};
