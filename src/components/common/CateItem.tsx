import React from "react";

const CateItem = () => {
    return (
        <article className="cate-item">
            <img
                src="./assets/img/category-item/item-1.png"
                alt=""
                className="cate-item__thumb"
            />
            <div className="cate-item__info">
                <h3 className="cate-item__title">$24 - $150</h3>
                <p className="cate-item__desc">
                    New sumatra mandeling coffe blend
                </p>
            </div>
        </article>
    );
};

export default CateItem;
