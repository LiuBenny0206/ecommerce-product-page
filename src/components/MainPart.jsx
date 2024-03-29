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

function MainPart(props){
    const [amount, setAmount] = useState(0);
    const [activeImage, setActiveImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(FirstShoesPic);

    const [isModalOpen, setModalOpen] = useState(false); // 新的状态变量

    const openModal = () => {
      setModalOpen(true); // 打开模态对话框
    };
  
    const closeModal = () => {
      setModalOpen(false); // 关闭模态对话框
    };

    const handleClick = (imageId) => {
        setActiveImage(imageId);
        switch (imageId) {
            case 'first':
                setCurrentImage(FirstShoesPic);
                break;
            case 'second':
                setCurrentImage(SecondShoesPic);
                break;
            case 'third':
                setCurrentImage(ThirdShoesPic);
                break;
            case 'fourth':
                setCurrentImage(FourthShoesPic);
                break;
            default:
                setCurrentImage(FirstShoesPic);
        }
    };

    const getActiveClass = (imageId) => {
        return activeImage === imageId ? 'active' : '';
    };
    
    function increase(){
        const newAmount = amount + 1
        setAmount(newAmount);
    };

    
    function decrease() {
        if (amount > 0) {
            const newAmount = amount - 1;
            setAmount(newAmount);
        };
    };

    function addToCart(){
        props.setShoesAmount(amount);

    };


    return (
        <div className="main-part">
            <div className="pic-part" onClick={openModal}>
                <img src={currentImage} alt="shoes" />
                <div className="small-pic-part">
                    <img
                        src={FirstSmallShoesPic}
                        alt="First small pic shoes"
                        className={getActiveClass('first')}
                        onClick={() => handleClick('first')}
                    />
                    <img
                        src={SecondSmallShoesPic}
                        alt="Second small pic shoes"
                        className={getActiveClass('second')}
                        onClick={() => handleClick('second')}
                    />
                    <img
                        src={ThirdSmallShoesPic}
                        alt="Third small pic shoes"
                        className={getActiveClass('third')}
                        onClick={() => handleClick('third')}
                    />
                    <img
                        src={FourthSmallShoesPic}
                        alt="Fourth small pic shoes"
                        className={getActiveClass('fourth')}
                        onClick={() => handleClick('fourth')}
                    />
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
            <Modal onClose={closeModal}>
                <img id="modal-content" src={currentImage} alt="Full size shoes" />
            </Modal>
            )}
        </div>
    );
}

export default MainPart;