import React from "react";
import SlideShow1_1 from "../../assets/img/slideshow/item-1.png";
import SlideShow1_2 from "../../assets/img/slideshow/item-1-md.png";

const SlideShow = () => {
    return (
        <div className="slideshow">
            <div className="slideshow__inner">
                <div className="slideshow__item">
                    <a href="#!" className="slideshow__link">
                        <picture>
                            <source
                                media="(max-width: 767.98px)"
                                srcSet={SlideShow1_2}
                            />
                            <img
                                src={SlideShow1_1}
                                alt=""
                                className="slideshow__img"
                            />
                        </picture>
                    </a>
                </div>
            </div>
            <div className="slideshow__page">
                <span className="slideshow__num">1</span>
                <span className="slideshow__slider"></span>
                <span className="slideshow__num">5</span>
            </div>
        </div>
    );
};

export default SlideShow;
