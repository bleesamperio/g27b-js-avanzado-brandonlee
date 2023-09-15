class Asincronia{
    ejecucion(){
        console.log('==== Bloque 2 ====');
        const ValidatePayment = () => {
            setTimeout(()=>{
                console.log("Proceso 2(B2): Validando la tarjeta de credito");
        }, 100)
    }
    console.log("Proceso 1: Presionael boton comprar");
    ValidatePayment();
    console.log("Proceso 3: Compra Exitosa"); 
    }
}

export default new Asincronia;