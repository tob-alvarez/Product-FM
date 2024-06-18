import menuH from '../../assets/icon-menu.svg';
import menuC from '../../assets/icon-close.svg';
import logo from '../../assets/logo.svg';
import cart from '../../assets/icon-cart.svg';
import avatar from '../../assets/image-avatar.png';
import { useContext, useState } from 'react';
import { EcommerceContext } from '../../context/Context';
import foto from '../../assets/image-product-1.jpg'
import trash from '../../assets/icon-delete.svg'

const Navbar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [carritoAbierto, setCarritoAbierto] = useState(false);
    const { cantidad, agregarAlCarro } = useContext(EcommerceContext);
    const abrirMenu = () => {
        setMenuAbierto(!menuAbierto);
    }
    const abrirCarrito = () =>{
        setCarritoAbierto(!carritoAbierto)
    }

    let precioTotal = 125.00 * cantidad;

    const handleBorrar = () =>{
        setCarritoAbierto(false)
        agregarAlCarro(0)
    }

    return (
        <>
            <div className={`${menuAbierto ? 'overlay open' : ''}`} onClick={abrirMenu}></div>
            <div className={`menuLateral container py-4 d-flex flex-column align-items-start ${menuAbierto ? 'open' : ''}`}>
                <img src={menuC} onClick={abrirMenu} style={{ height: '16px', width: '16px' }} alt="Close Menu" />
                <ul className='listaNav'>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="container py-4 d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-2'>
                    <img src={menuH} onClick={abrirMenu} style={{ height: '16px', width: '16px' }} alt="Open Menu" className='menuIcon'/>
                    <img src={logo} alt="Logo" />
                    <ul className='listaNavD'>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </div>
                <div className='d-flex align-items-center gap-4'>
                    <div className='d-flex align-items-center'>
                    <img src={cart} onClick={abrirCarrito} alt="Cart" className='cartSvg'/>
                    <p className='m-0 cantidad'>{cantidad}</p>
                    </div>
                    <img src={avatar} alt="User" style={{ height: '45px' }} className='avatar'/>
                </div>
            </div>
            <div className={`${carritoAbierto? "d-flex justify-content-end container" : "d-none"}`}>
                <div className='contenedorCart d-flex flex-column justify-content-center aling-items-center'>
                    <h2 className='tituloCart'>Cart</h2>
                    <div className='d-flex mt-4'>
                        <img src={foto} className='fotoCart' />
                        <div className='d-flex flex-column'>
                            <p className='m-0 ps-3'>Fall Limited Edition Sneakers</p>
                            <p className='m-0 ps-3'>$125.00 x {cantidad} <b>${precioTotal}.00</b></p>
                        </div>
                        <img src={trash} onClick={handleBorrar} className='trash'/>
                    </div>
                    <button className='mt-4 btnCheckout'>Checkout</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
