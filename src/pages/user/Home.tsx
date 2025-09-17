import React from "react";
import SlideShow from "../../components/common/SlideShow";
import CateItem from "../../components/common/CateItem";
import ProductCard from "../../components/common/ProductCard";
import Filter from "../../assets/icons/filter.svg";

const Home = () => {
    return (
        <>
            <div className="home__container">
                <SlideShow />
            </div>

            <section className="home__container">
                <h2 className="home__heading">Everyone’s Buying</h2>
                <div className="home__cate row row-cols-3 row-cols-md-1">
                    <div className="col">
                        <a href="#!">
                            <CateItem />
                        </a>
                    </div>
                </div>
            </section>

            <section className="home__container">
                <div className="home__row">
                    <h2 className="home__heading">Browser Products</h2>
                    <button className="filter-btn">
                        Filter
                        <img
                            src={Filter}
                            alt=""
                            className="filter-btn__icon icon"
                        />
                    </button>
                </div>

                <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3">
                    <div className="col">
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
