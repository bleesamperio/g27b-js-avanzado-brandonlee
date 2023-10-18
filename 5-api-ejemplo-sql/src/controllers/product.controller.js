import { query } from "express";
import { methods as productServices } from "../services/product.service";
const getAllProducts = async (req, res)=>{
    try {
        const sentencia = await productServices.readAllProducts(res); //PIDE INFORMACION A LA BASE DE DATOS PARA TRAER TODOS LOS PRODUCTOS MEDIANTE UN SERVICIO
        return sentencia
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}
const postProduct = async (req, res)=>{
    try {
        const{sku, name, description, precio, url_image} =req.body;
        constquery = await productServices.createProduct(sku, name, description, precio, url_image,res)
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}
export const methods = {
    getAllProducts
}