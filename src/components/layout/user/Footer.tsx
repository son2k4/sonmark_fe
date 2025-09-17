import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Youtube from "../../../assets/icons/youtube.svg";
import X from "../../../assets/icons/x-twitter.svg";
import LinkedIn from "../../../assets/icons/linkedin.svg";
import Tiktok from "../../../assets/icons/tiktok.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__col">
                        <a href="./" className="logo footer__logo">
                            <img
                                src={Logo}
                                alt="grocerymart"
                                className="logo__img"
                            />
                            <h1 className="logo__title">grocerymart</h1>
                        </a>

                        <p className="footer__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam, maxime et veniam eligendi rem
                            voluptatibus.
                        </p>
                        <p className="footer__help-text">
                            Receive product news updates
                        </p>
                        <form action="" className="footer__form">
                            <input
                                type="text"
                                className="footer__input"
                                placeholder="Email address"
                            />
                            <button className="btn btn--primary">SEND</button>
                        </form>
                    </div>

                    <div className="footer__col">
                        <h3 className="footer__heading">Shop</h3>
                        <ul className="footer__list">
                            <li>
                                <a href="#!" className="footer__link">
                                    All Departments
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="footer__link">
                                    Fashion Deals
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="footer__link">
                                    Electronics Discounts
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="footer__link">
                                    Home & Living Specials
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="footer__link">
                                    Beauty Bargains
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h3 className="footer__heading">Support</h3>
                        <ul className="footer__list">
                            <li>
                                <a href="#!" className="footer__link">
                                    Store locator
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="footer__link">
                                    Order status
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h3 className="footer__heading">Company</h3>
                        <ul className="footer__list">
                            <li>
                                <a href="#!" className="footer__link">
                                    Customer Service
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="footer__link">
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="footer__link">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="footer__link">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="footer__link">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="footer__link">
                                    Affiliates
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h3 className="footer__heading">Contact</h3>
                        <ul className="footer__list">
                            <li>
                                <p className="footer__label">Email</p>
                                <a
                                    href="mailto:contact@grocerymart.com"
                                    className="footer__link"
                                >
                                    contact@grocerymart.com
                                </a>
                            </li>
                            <li>
                                <p className="footer__label">Hotline</p>
                                <a href="tel:18008888" className="footer__link">
                                    18008888
                                </a>
                            </li>
                            <li>
                                <p className="footer__label">Address</p>
                                <p className="footer__text">
                                    No. 11D, Lot A10, Nam Trung Yen urban area,
                                    Yen Hoa Ward, Cau Giay District, City. Hanoi
                                </p>
                            </li>
                            <li>
                                <p className="footer__label">Hours</p>
                                <p className="footer__text">
                                    M - F 08:00am - 06:00pm
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © 2010 - 2025 Grocery Mart. All rights reserved.
                    </p>
                    <div className="footer__socials">
                        <a
                            href="#!"
                            className="footer__social-link footer__social-link--facebook"
                        >
                            <img
                                src={Facebook}
                                alt=""
                                className="footer__social-icon"
                            />
                        </a>
                        <a
                            href="#!"
                            className="footer__social-link footer__social-link--youtube"
                        >
                            <img
                                src={Youtube}
                                alt=""
                                className="footer__social-icon"
                            />
                        </a>
                        <a
                            href="#!"
                            className="footer__social-link footer__social-link--tiktok"
                        >
                            <img
                                src={Tiktok}
                                alt=""
                                className="footer__social-icon"
                            />
                        </a>
                        <a
                            href="#!"
                            className="footer__social-link footer__social-link--twitter"
                        >
                            <img
                                src={X}
                                alt=""
                                className="footer__social-icon"
                            />
                        </a>
                        <a
                            href="#!"
                            className="footer__social-link footer__social-link--linkedin"
                        >
                            <img
                                src={LinkedIn}
                                alt=""
                                className="footer__social-icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
