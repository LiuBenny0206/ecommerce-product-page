import React, { useState } from "react";
import FirstShoesPic from "../images/image-product-1.jpg";
import SecondShoesPic from "../images/image-product-2.jpg";
import ThirdShoesPic from "../images/image-product-3.jpg";
import FourthShoesPic from "../images/image-product-4.jpg";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import { ReactComponent as NextIcon } from "../images/icon-next.svg";
import { ReactComponent as PreviousIcon } from "../images/icon-previous.svg";

function Modal({ onClose }) {
    const images = [FirstShoesPic, SecondShoesPic, ThirdShoesPic, FourthShoesPic];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showPrevious = () => {
        setCurrentImageIndex((prevIndex) => {
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        });
    };

    const showNext = () => {
        setCurrentImageIndex((prevIndex) => {
            return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        });
    };

    const handleClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button id="close-icon"onClick={onClose}><CloseIcon /></button>
                <div className="big-pic-part">
                    <button onClick={showPrevious}><PreviousIcon /></button>
                    <img src={images[currentImageIndex]} alt="Shoes" />
                    <button onClick={showNext}><NextIcon /></button>
                </div>
                <div className="small-pic-part">
                    {images.map((imgSrc, index) => (
                        <img
                            key={imgSrc}
                            src={imgSrc}
                            alt={`Thumbnail ${index + 1}`}
                            className={currentImageIndex === index ? 'active' : ''}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Modal;
