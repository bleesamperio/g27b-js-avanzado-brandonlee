class Callback{
    ejecucion(){
        console.log('==== Bloque 3 ====')

        const showSuccesMessage = () => {
            console.log('Proceso 3: Compra Exitosa')
        }

        const ValidatePaymentCallback = (showSuccesMessage) =>{
            setTimeout(()=>{
                console.log("Proceso 2: Validando la tarjeta de credito");
                showSuccesMessage();
            }, 1000)
        }
        console.log("Proceso 1: Presionael boton comprar");
        ValidatePaymentCallback(showSuccesMessage);
        console.log("Proceso 4: Notificacion de mi telefono");
    }
}

export default new Callback;