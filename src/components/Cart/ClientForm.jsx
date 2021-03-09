import React, { useContext, useState } from 'react';
import { cartContext } from "../../context/CartContext";
import { Icon, Input, Button } from 'semantic-ui-react';
import { getFirestore } from "../../firebaseConfig";
import FadeIn from "react-fade-in";

const ClientForm = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [orderId, setOrderId] = useState();
    const { cart, setCart, actualizarTotal, removeItem, clearCart } = useContext(cartContext);

    const finalizarCompra = () => {
        
        const newOrder = { buyer:{ name: name, email: mail, phone: phone},  items: [...cart], total: actualizarTotal() }

        const fsDB = getFirestore();
        const ordenesCollection = fsDB.collection("ORDENES");

        ordenesCollection
            .add(newOrder)
            .then(({ id }) => {
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });
    } 

    console.log(cart);
    
    return (
        <>
        { orderId ? 
            <FadeIn>
            <section>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'80px 0'}}>
                    <h2>Su compra fue realizada con exito.</h2>
                    <p>Su numero de orden es: <strong>{orderId}</strong> </p>
                    <Button style={{marginTop:'40px'}}>Coordinar envio</Button>
                </div>
            </section>
            </FadeIn>
        :   
            <FadeIn>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <br/>
                <br/>
                <Input iconPosition='left' placeholder='Ingrese su nombre' style={{margin:'10px 0'}}>
                    <Icon name='user outline' />
                    <input type='text' onChange={(e) => { setName(e.target.value) }} required/>
                </Input>
                
                <Input iconPosition='left' placeholder='Ingrese su email' style={{margin:'10px 0'}}>
                    <Icon name='at' />
                    <input type='email' onChange={(e) => { setMail(e.target.value) }} required/>
                </Input>
                
                <Input iconPosition='left' placeholder='Ingrese un numero de telefono' style={{margin:'10px 0'}}>
                    <Icon name='phone' />
                    <input type='text' onChange={(e) => { setPhone(e.target.value) }} required/>
                </Input>
                
                <Button onClick={() => { finalizarCompra() }} style={{margin:'10px 0'}}>Finalizar compra</Button>
            </div>
            </FadeIn>
        }
    </>
    )
}

export default ClientForm;