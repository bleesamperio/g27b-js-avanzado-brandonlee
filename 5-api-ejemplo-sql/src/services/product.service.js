import{getConnection} from "./../common/connection"
async function realAlProducts(response) {
    const connection = await getConnection();
    const resultado = await connection.query("SELECT * FROM products")
    return responde.json(resultado)
}

export const methods ={
    realAlProducts
}