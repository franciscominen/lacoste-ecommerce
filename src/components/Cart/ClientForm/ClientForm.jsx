import React, { useContext, useState } from 'react';
import firebase from 'firebase/app'
import {Link} from "react-router-dom";
import { cartContext } from "../../../context/CartContext";
import { Icon, Button, Divider } from 'semantic-ui-react';
import { getFirestore } from "../../../firebaseConfig";
import CartStep from "../CartStep";
import FadeIn from "react-fade-in";
import PurchaseData from './PurchaseData';
import "../styles/form.scss";

const EnvioFormComponent = (elemento) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [hogarTipo, sethogarTipo] = useState('');
    const [aclaracion, setAclaracion] = useState('');
    const [orderId, setOrderId] = useState();
    const [date, setDate] = useState('');
    const [total, setTotal]= useState(0);
    const [purchase, setPurchase]= useState([]);
    const { cart, actualizarTotal, clearCart } = useContext(cartContext);

    const finalizarCompra = (evt) => {
        evt.preventDefault();
        let purchaseDate = new Date();
        setDate(purchaseDate.toLocaleString());

        const newOrder = {
            buyer: {
                name: name,
                surname: surname,
                email: email,
                phone: phone,
                address: {
                    provincia: provincia,
                    localidad: localidad,
                    domicilio: domicilio, 
                    hogarTipo: hogarTipo,
                    aclaracion: aclaracion
                }
            },
            items: [...cart],
            total: actualizarTotal(),
            date: firebase.firestore.Timestamp.fromDate(purchaseDate)
        };

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
    
    return (
        <>

            <>
                <CartStep />
            </>
            <FadeIn>
            <section className='checkoutEnvio_container'>
                {orderId ?
                    <div className="checkoutCongratsContainer">
                        <Icon name='check circle outline'/>
                        <h2>¡Muchas gracias por tu compra, {name}!</h2><br/>
                        <p>
                            Tu número de orden es: <span id="order">{orderId}</span>
                        </p>
                        <p>El detalle de compra y el <strong>codigo de seguimiento</strong> fueron enviados a la casilla de correo electronico proporcionada ({email}).</p>
                        <Link to="/catalogo"><Button className='volverCatalogo_btn' onClick={() => clearCart()}>Volver al catalogo</Button></Link>
                    </div>
                    :
                    <div className='form_container'>
                        <form className="checkoutForm" onSubmit={(evt) => {finalizarCompra(evt); setTotal(actualizarTotal); setPurchase(cart)}}>

                            <h2>Direccion de envio:</h2>

                            <div className="form-group">
                                <Icon name='user circle'/>
							    <input type="text" className="form-control" placeholder='Ingrese su nombre*' id="name" name="name" value={name} onChange={(evt) => {setName(evt.target.value)}}></input>
						    </div>
                            <div className="form-group">
                                <Icon name='user circle'/>
                                <input type="text" className="form-control" placeholder='Ingrese su apellido*' id="surname" name="surname" value={surname} onChange={(evt) => {setSurname(evt.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <Icon name='mail'/>
                                <input type="email" className="form-control" placeholder='Ingrese su email*' id="email" name="email" value={email} onChange={(evt) => {setEmail(evt.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <Icon name='mail'/>
                                <input type="email" className="form-control" placeholder='Confirme su email*' id="confirmEmail" name="confirmEmail" value={confirmEmail} onChange={(evt) => {setConfirmEmail(evt.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <Icon name='phone'/>
                                <input type="text" className="form-control" placeholder='Ingrese su telefono*' id="phone" name="phone" value={phone} onChange={(evt) => {setPhone(evt.target.value)}}/>
                            </div>
                            
                            <Divider/>

                            <div className="form-group">
                                <Icon name='map marker alternate'/>
                                <input type="text" className="form-control" placeholder='Provincia*' id="provincia" name="provincia" value={provincia} onChange={(evt) => {setProvincia(evt.target.value)}}/>
                            </div>

                            <div className="form-group">
                                <Icon name='map marker alternate'/>
                                <input type="text" className="form-control" placeholder='Localidad*' id="localidad" name="localidad" value={localidad} onChange={(evt) => {setLocalidad(evt.target.value)}}/>
                            </div>

                            <div className="form-group">
                            <Icon name='map pin'/>
                                <input type="text" className="form-control" placeholder='Domicilio*' id="domicilio" name="domicilio" value={domicilio} onChange={(evt) => {setDomicilio(evt.target.value)}}/>
                            </div>

                            <div className="form-group">
                            <Icon name='building'/>
                                <input type="text" className="form-control" placeholder='Departamento / Piso / Lote' id="hogarTipo" name="hogarTipo" value={hogarTipo} onChange={(evt) => {sethogarTipo(evt.target.value)}}/>
                            </div>

                            <div className="form-group">
                                <textarea type="text" className="form-control" placeholder='Aclaracion' id="aclaracion" name="aclaracion" value={aclaracion} onChange={(evt) => {setAclaracion(evt.target.value)}}/>
                            </div>

                            <div className="checkoutButtonContainer">
                                {email === confirmEmail && name && surname && phone && provincia && localidad && domicilio ? 
                                <Button type="submit" className='finalizarCompra_btn'>Finalizar compra <Icon name='arrow right'/></Button> 
                                : 
                                <Button disabled className='finalizarCompra_btn' type="submit" >Finalizar compra</Button>}
                            </div>
                        </form>
                    </div>
                }
                <>
                    <PurchaseData/>
                </>
            </section>
            </FadeIn>
        </>
    )
}

export default EnvioFormComponent;