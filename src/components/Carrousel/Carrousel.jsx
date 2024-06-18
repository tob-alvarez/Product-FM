import { useEffect, useState } from 'react';
import image1 from '../../assets/image-product-1.jpg'; 
import image2 from '../../assets/image-product-2.jpg'; 
import image3 from '../../assets/image-product-3.jpg';
import image4 from '../../assets/image-product-4.jpg';
import image1t from '../../assets/image-product-1-thumbnail.jpg'; 
import image2t from '../../assets/image-product-2-thumbnail.jpg'; 
import image3t from '../../assets/image-product-3-thumbnail.jpg';
import image4t from '../../assets/image-product-4-thumbnail.jpg';
import ProductInfo from '../ProductInfo/ProductInfo';

const Carrousel = () => {
    const imagesN = [image1, image2, image3, image4]; 
    const imagesT = [image1t, image2t, image3t, image4t]; 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

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

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagesN.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagesN.length - 1 ? 0 : prevIndex + 1));
    };

    const selectImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-1'>
                </div>
                <div className="carousel col-12 col-md-4">
                    <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {imagesN.map((images, index) => (
                            <img key={index} src={images} className="carousel-image" alt={`Slide ${index + 1}`} />
                        ))}
                    </div>
                    {!isMobile ? <>
                        <button className="carousel-button prev" onClick={prevImage}>
                            &lt;
                        </button>
                        <button className="carousel-button next" onClick={nextImage}>
                            &gt;
                        </button>
                    </> : <></>}
                    {isMobile ? (
                        <div className="thumbnails">
                            {imagesT.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                                    onClick={() => selectImage(index)}
                                    alt={`Thumbnail ${index + 1}`}
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
                <div className='col-12 col-md-6 container'>
                    <ProductInfo/>
                </div>
            </div>
        </div>
    );
};

export default Carrousel;
