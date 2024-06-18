/* eslint-disable react/no-unescaped-entities */
import cart from '../../assets/icon-cart.svg'
import { useContext, useEffect, useState } from "react"
import { EcommerceContext } from '../../context/Context';

const ProductInfo = () => {

    const [count, setCount] = useState(0)
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const { agregarAlCarro } = useContext(EcommerceContext);

    const add = () =>{
        setCount(count + 1)
    }
    const remove = () =>{
        setCount(count - 1)
    }

    useEffect(() => {
        const handleResize = () => {
            setDeviceWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isMobile = deviceWidth >= 800;

    const addToCart = () =>{
        agregarAlCarro(count)
    }


  return (
    <>
        <div className="mt-4">
            <h2 className="subtitulo">SNEAKER COMPANY</h2>
            <h2 className="titulo mt-3">Fall Limited Edition Sneakers</h2>
            <p className="parrafo mt-3">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer
            </p>
            <div className="d-flex gap-5 justify-content-between align-items-center mt-4">
                <div className='d-flex align-items-center'>
                    <p style={{fontSize: '24px', fontWeight: '800',  margin: 0, padding: '10px'}}>$125.00</p>
                    <p style={{fontSize: '16px', fontWeight: '600', color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '10px', margin: 0}}>50%</p>
                </div>
                <del>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: 'grey',  margin: 0, padding: '10px' }}>$250.00</p>
                </del>
            </div>
        </div>
        <div className={`${isMobile ? 'd-flex w-100 justify-content-between align-items-center mt-4': 'd-flex w-100 justify-content-between align-items-center mt-4 flex-column'}`}>
            <div className="d-flex align-items-center justify-content-around w-100">
                <button onClick={remove} className="btnMenos">-</button>
                <p className="m-0">{count}</p>
                <button onClick={add} className="btnMas">+</button>
            </div>
            <div className="my-5 d-flex align-items-center justify-content-center w-100">
                <button onClick={addToCart} className="btnCart"><img src={cart} alt="" />Add to cart</button>
            </div>
        </div>
    </>
  )
}

export default ProductInfo