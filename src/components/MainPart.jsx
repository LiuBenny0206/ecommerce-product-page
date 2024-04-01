import React, {useState} from "react";
import FirstShoesPic from "../images/image-product-1.jpg";
import SecondShoesPic from "../images/image-product-2.jpg";
import ThirdShoesPic from "../images/image-product-3.jpg";
import FourthShoesPic from "../images/image-product-4.jpg";
import FirstSmallShoesPic from "../images/image-product-1-thumbnail.jpg";
import SecondSmallShoesPic from "../images/image-product-2-thumbnail.jpg";
import ThirdSmallShoesPic from "../images/image-product-3-thumbnail.jpg";
import FourthSmallShoesPic from "../images/image-product-4-thumbnail.jpg";
import { ReactComponent as Minus } from "../images/icon-minus.svg"
import { ReactComponent as Plus } from "../images/icon-plus.svg"
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import Modal from "./Modal";

const images = [
    { id: 'first', src: FirstShoesPic, alt: 'First pair of sneakers' },
    { id: 'second', src: SecondShoesPic, alt: 'Second pair of sneakers' },
    { id: 'third', src: ThirdShoesPic, alt: 'Third pair of sneakers' },
    { id: 'fourth', src: FourthShoesPic, alt: 'Fourth pair of sneakers' }
  ];



function MainPart(props){
    const [amount, setAmount] = useState(0);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const [isModalOpen, setModalOpen] = useState(false); // 新的状态变量

    const handleImageClick = index => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };


    
    
    const increase = () => setAmount(prev => prev + 1);
    const decrease = () => setAmount(prev => (prev > 0 ? prev - 1 : 0));
    const addToCart = () => props.setShoesAmount(prev => prev + amount);



    return (
        <div className="main-part">
            <div className="pic-part" onClick={() => handleImageClick(currentImageIndex)}>
                <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
                <div className="small-pic-part">
                {images.map((image, index) => (
                    <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    className={currentImageIndex === index ? 'active' : ''}
                    onClick={() => handleImageClick(index)}
                    />
                ))}
                </div>
            </div>
            <div className="info-part">
                <p id="company">SNEAKER COMPANY</p>
                <p id="title">Fall Limited Edition Sneakers</p>
                <p id="caption">
                    These low-profile sneakers are your perfect casual wear companion. 
                    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <div className="price-part">
                    <p id="price">$125.00</p>
                    <p id="discount">50%</p>
                </div>
                <p id="original-price">$250.00</p>
                <div className="button-part">
                        <div className="plus-minus-part">
                            <Minus onClick={decrease}/>
                            <p>{amount}</p>
                            <Plus onClick={increase}/>
                        </div>
                        <button type="button" onClick={addToCart}>
                            <CartIcon id="button-cart-icon"/>
                            Add to Cart
                        </button>
                </div>
            </div>
            {isModalOpen && (
             <Modal onClose={() => setModalOpen(false)}>
                <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
            </Modal>
            )}
        </div>
    );
}

export default MainPart;