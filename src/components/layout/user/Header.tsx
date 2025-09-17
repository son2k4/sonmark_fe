import React, { useEffect } from "react";
import More from "../../../assets/icons/more.svg";
import Logo from "../../../assets/icons/logo.svg";
import ArrowLeft from "../../../assets/icons/arrow-left.svg";
import Buy from "../../../assets/icons/buy.svg";
import Heart from "../../../assets/icons/heart.svg";
import ArrowDown from "../../../assets/icons/arrow-down.svg";
import { initHelpers } from "../../../assets/js/scripts";
import Search from "../../../assets/icons/search.svg";

const Header = () => {
    useEffect(() => {
        initHelpers();
        window.dispatchEvent(new Event("template-loaded"));
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="top-bar">
                    <button
                        className="top-bar__more d-none d-lg-block js-toggle"
                        toggle-target="#navbar"
                    >
                        <img
                            src={More}
                            alt=""
                            className="top-bar__more-icon icon"
                        />
                    </button>

                    <a href="./" className="logo">
                        <img
                            src={Logo}
                            alt="grocerymart"
                            className="logo__img"
                        />
                        <h1 className="logo__title">grocerymart</h1>
                    </a>

                    <nav id="navbar" className="navbar hide">
                        <button
                            className="navbar__close-btn js-toggle"
                            toggle-target="#navbar"
                        >
                            <img className="icon" src={ArrowLeft} alt="" />
                        </button>

                        <a href="#!" className="nav-btn d-none d-md-flex">
                            <img
                                src={Buy}
                                alt=""
                                className="nav-btn__icon icon"
                            />
                            <span className="nav-btn__title">Card</span>
                            <span className="nav-btn__qnt">3</span>
                        </a>

                        <a href="#!" className="nav-btn d-none d-md-flex">
                            <img
                                src={Heart}
                                alt=""
                                className="nav-btn__icon icon"
                            />
                            <span className="nav-btn__title">Favorite</span>
                            <span className="nav-btn__qnt">3</span>
                        </a>

                        <ul className="navbar__list js-dropdown-list">
                            <li className="navbar__item">
                                <a href="#!" className="navbar__link">
                                    Departments
                                    <img
                                        src={ArrowDown}
                                        alt=""
                                        className="navbar__arrow icon"
                                    />
                                </a>
                                <div className="dropdown js-dropdown">
                                    <div className="dropdown__inner">
                                        <div className="top-menu">
                                            <div className="top-menu__main">
                                                <div className="menu-column">
                                                    <div className="menu-column__icon d-lg-none">
                                                        <img
                                                            src="./assets/img/category/cate-1.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="./assets/img/category/cate-1.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading d-lg-none">
                                                            All Departments
                                                        </h2>
                                                        <ul className="menu-column__list js-menu-list">
                                                            <li className="menu-column__item">
                                                                <a
                                                                    href="#!"
                                                                    className="menu-column__link"
                                                                >
                                                                    Savings &
                                                                    Featured
                                                                    Shops
                                                                </a>
                                                                <div className="sub-menu">
                                                                    <div className="sub-menu__column">
                                                                        <div className="menu-column">
                                                                            <div className="menu-column__icon">
                                                                                <img
                                                                                    src="./assets/img/category/cate-2.1.svg"
                                                                                    alt=""
                                                                                    className="menu-column__icon-1"
                                                                                />
                                                                                <img
                                                                                    src="./assets/img/category/cate-2.2.svg"
                                                                                    alt=""
                                                                                    className="menu-column__icon-2"
                                                                                />
                                                                            </div>
                                                                            <div className="menu-column__content">
                                                                                <h2 className="menu-column__heading">
                                                                                    TV
                                                                                    &
                                                                                    Video
                                                                                </h2>
                                                                                <ul className="menu-column__list">
                                                                                    <li className="menu-column__item">
                                                                                        <a
                                                                                            href="#!"
                                                                                            className="menu-column__link"
                                                                                        >
                                                                                            Shop
                                                                                            all
                                                                                            TVs
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="navbar__item">
                                <a href="#!" className="navbar__link">
                                    Grocery
                                    <img
                                        src={ArrowDown}
                                        alt=""
                                        className="navbar__arrow icon"
                                    />
                                </a>
                                <div className="dropdown js-dropdown">
                                    <div className="dropdown__inner">
                                        <div className="top-menu">
                                            <div className="sub-menu sub-menu--not-main">
                                                <div className="sub-menu__column">
                                                    <div className="menu-column">
                                                        <div className="menu-column__icon">
                                                            <img
                                                                src="./assets/img/category/cate-2.1.svg"
                                                                alt=""
                                                                className="menu-column__icon-1"
                                                            />
                                                            <img
                                                                src="./assets/img/category/cate-2.2.svg"
                                                                alt=""
                                                                className="menu-column__icon-2"
                                                            />
                                                        </div>
                                                        <div className="menu-column__content">
                                                            <h2 className="menu-column__heading">
                                                                TV & Video
                                                            </h2>
                                                            <ul className="menu-column__list">
                                                                <li className="menu-column__item">
                                                                    <a
                                                                        href="#!"
                                                                        className="menu-column__link"
                                                                    >
                                                                        Shop all
                                                                        TVs
                                                                    </a>
                                                                </li>
                                                                <li className="menu-column__item">
                                                                    <a
                                                                        href="#!"
                                                                        className="menu-column__link"
                                                                    >
                                                                        TVs by
                                                                        Size
                                                                    </a>
                                                                </li>
                                                                <li className="menu-column__item">
                                                                    <a
                                                                        href="#!"
                                                                        className="menu-column__link"
                                                                    >
                                                                        Smart
                                                                        TVs
                                                                    </a>
                                                                </li>
                                                                <li className="menu-column__item">
                                                                    <a
                                                                        href="#!"
                                                                        className="menu-column__link"
                                                                    >
                                                                        Roku TVs
                                                                    </a>
                                                                </li>
                                                                <li className="menu-column__item">
                                                                    <a
                                                                        href="#!"
                                                                        className="menu-column__link"
                                                                    >
                                                                        Streaming
                                                                    </a>
                                                                </li>
                                                                <li className="menu-column__item">
                                                                    <a
                                                                        href="#!"
                                                                        className="menu-column__link"
                                                                    >
                                                                        TV
                                                                        Mounts &
                                                                        Accessories
                                                                    </a>
                                                                </li>
                                                                <li className="menu-column__item">
                                                                    <a
                                                                        href="#!"
                                                                        className="menu-column__link"
                                                                    >
                                                                        DVD &
                                                                        Blu-Ray
                                                                        Players
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="navbar__item">
                                <a href="#!" className="navbar__link">
                                    Beauty
                                    <img
                                        src={ArrowDown}
                                        alt=""
                                        className="navbar__arrow icon"
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div
                        className="navbar__overlay js-toggle"
                        toggle-target="#navbar"
                    ></div>
                    <div className="top-act">
                        <div className="top-act__group d-md-none top-act__group--single">
                            <button className="top-act__btn">
                                <img
                                    src={Search}
                                    alt=""
                                    className="top-act__icon icon"
                                />
                            </button>
                        </div>
                        <div className="top-act__group d-md-none">
                            <button className="top-act__btn">
                                <img
                                    src={Heart}
                                    alt=""
                                    className="top-act__icon icon"
                                />
                                <span className="top-act__title">03</span>
                            </button>
                            <div className="top-act__separate"></div>
                            <button className="top-act__btn">
                                <img
                                    src={Buy}
                                    alt=""
                                    className="top-act__icon icon"
                                />
                                <span className="top-act__title">$65.42</span>
                            </button>
                        </div>
                        <div className="top-act__user">
                            <img
                                src="./assets/img/avatar.jpg"
                                alt=""
                                className="top-act__avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
