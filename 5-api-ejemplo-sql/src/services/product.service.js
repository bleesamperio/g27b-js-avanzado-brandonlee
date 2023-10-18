import { response } from "express";
import{getConnection} from "./../common/connection"
async function readAllProducts(response) {
    const connection = await getConnection();
    const resultado = await connection.query("SELECT * FROM products")
    return response.json(resultado)
}

/**
 * 
 */
//C create 
async function createProduct(sku, name, description, precio, url_image){
    if(sku === undefined || name === undefined || description === undefined || price === undefined || price === undefined){
        return response.status(400).jason({message:"Bad request, por favor agrega todos los valores necesarios para añadir un producto nuevo"})
    }
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO `products`(`sku`, `name`, `description`, `precio`, `url_image`) Value (?,?,?,?,?)")
    return response.json(result)
}

export const methods ={
    readAllProducts
}