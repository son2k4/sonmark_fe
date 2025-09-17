import React from "react";

import Heart from "../../assets/icons/heart.svg";
import HeartRed from "../../assets/icons/heart-red.svg";
import Star from "../../assets/icons/star.svg";

const ProductCard = () => {
    return (
        <article className="product-card">
            <div className="product-card__img-wrap">
                <a href="#!">
                    <img
                        src="./assets/img/product/item-1.png"
                        alt=""
                        className="product-card__thumb"
                    />
                </a>
                <button className="like-btn product-card__like-btn">
                    <img src={Heart} alt="" className="like-btn__icon icon" />
                    <img
                        src={HeartRed}
                        alt=""
                        className="like-btn__icon--liked"
                    />
                </button>
            </div>
            <h3 className="product-card__title">
                <a href="#!">
                    Coffee Beans - Espresso Arabica and Robusta Beans Lavazza
                </a>
            </h3>
            <p className="product-card__brand">Lavazza</p>
            <div className="product-card__row">
                <span className="product-card__price">$47.00</span>
                <img src={Star} alt="" className="product-card__star" />
                <span className="product-card__score">4.3</span>
            </div>
        </article>
    );
};

export default ProductCard;
