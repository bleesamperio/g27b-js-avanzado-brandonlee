import express from "express"
import morgan from "morgan"

import productRoutes from "./routers/index.routes"



const app = express();
/** Se setea el puerto en que se busca correr el server */
app.set("port",4000);

/** Aqui nosotros declaramos que hacemos uso de middlewares */
app.use(morgan("dev"));
app.use(express.json());

/** Importamos nuestras rutas de la API (endpoint) de productos.routes */
app.use("/api-restfull/productos", productRoutes);

export default app;