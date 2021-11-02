import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-12 col-sm-6">
                        <Link to="/">
                            <img
                                src="/images/logo.png"
                                alt=""
                                className="footer__logo"
                            />
                        </Link>
                        <ul className="list__menu">
                            <li className="list__item">
                                <i className="fas fa-map-marker-alt"></i>
                                30 Đường 2/9, Phường Bình Hiên, Quận Hải Châu,
                                Đà Nẵng
                            </li>
                            <li className="list__item">
                                <i className="fas fa-phone-alt"></i>
                                <Link
                                    to="tel:0123456789"
                                    className="list__link"
                                    title="0123456789"
                                >
                                    0123 456 789
                                </Link>
                            </li>
                            <li className="list__item">
                                <i className="fas fa-envelope"></i>
                                <Link
                                    to="mailto:evoteamthemes@gmail.com"
                                    className="list__link"
                                    title="evoteamthemes@gmail.com"
                                >
                                    evoteamthemes@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-12 col-sm-6">
                        <span className="footer__tittle">MUA HÀNG</span>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link
                                    to="/products/category/men"
                                    className="footer__link"
                                    title="Nam"
                                >
                                    NAM
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link
                                    to="/products/category/women"
                                    className="footer__link"
                                    title="Nữ"
                                >
                                    NỮ
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link
                                    to="/products/category/extra"
                                    className="footer__link"
                                    title="Phụ kiện"
                                >
                                    PHỤ KIỆN
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-12 col-sm-6">
                        <span className="footer__tittle">
                            DỊCH VỤ KHÁCH HÀNG
                        </span>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link
                                    to="/products/category/men"
                                    className="footer__link"
                                    title="Nam"
                                >
                                    NAM
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link
                                    to="/products/category/women"
                                    className="footer__link"
                                    title="Nữ"
                                >
                                    NỮ
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link
                                    to="/products/category/extra"
                                    className="footer__link"
                                    title="Phụ kiện"
                                >
                                    PHỤ KIỆN
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-12 col-sm-6">
                        <span className="footer__tittle">ĐĂNG KÝ NHẮN TIN</span>
                        <p className="footer__text">
                            Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và
                            nhiều hơn nữa.
                        </p>
                        <input
                            type="email"
                            className="footer__input"
                            defaultValue=""
                            placeholder="Email của bạn"
                        />
                        {/* Btn */}
                        <div className="button">
                            <Link
                                to="/signup"
                                className="btns btn__darkwhite"
                                style={{ width: "100%" }}
                            >
                                ĐĂNG KÝ
                            </Link>
                        </div>
                        <ul className="footer__pay-list">
                            <li className="footer__pay-item">
                                <img
                                    src="/images/payment/payment_1.svg"
                                    alt=""
                                />
                            </li>
                            <li className="footer__pay-item">
                                <img
                                    src="/images/payment/payment_2.svg"
                                    alt=""
                                />
                            </li>
                            <li className="footer__pay-item">
                                <img
                                    src="/images/payment/payment_3.svg"
                                    alt=""
                                />
                            </li>
                            <li className="footer__pay-item">
                                <img
                                    src="/images/payment/payment_4.svg"
                                    alt=""
                                />
                            </li>
                            <li className="footer__pay-item">
                                <img
                                    src="/images/payment/payment_5.svg"
                                    alt=""
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 footer__end">
                        © <b>Bản quyền thuộc về</b>
                        Evo Themes
                        <b> | Cung cấp bởi</b>
                        <Link to="/" title="Sapo">
                            Sapo
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="back-to-top"
                title="Lên đầu trang"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                Lên đầu trang
                <i className="far fa-long-arrow-right"></i>
            </div>
        </div>
    );
}

export default Footer;
