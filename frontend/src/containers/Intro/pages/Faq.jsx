import React from "react";
import { Link } from "react-router-dom";
import MenuLink from "../../../components/MenuLink/MenuLink";
import "../styles/Intro.scss";

Faq.propTypes = {};

function Faq(props) {
    return (
        <div id="intro">
            <div className="banner">
                <img src="/images/evo-page-banner.jpg" alt="" />
                <p>FAQ</p>
            </div>

            {/* Navblog */}
            <div id="navblog">
                <div className="container">
                    <ul className="navblog__list">
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-replace"
                                    activeOnlyWhenExact={false}
                                    label="Chính sách đổi hàng"
                                />
                            </div>
                        </li>
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-faq"
                                    activeOnlyWhenExact={true}
                                    label="FAQ"
                                />
                            </div>
                        </li>
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-pay"
                                    activeOnlyWhenExact={false}
                                    label="Hướng dẫn thanh toán"
                                />
                            </div>
                        </li>
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-ship"
                                    activeOnlyWhenExact={false}
                                    label="Chính sách vận chuyển"
                                />
                            </div>
                        </li>
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-shop"
                                    activeOnlyWhenExact={false}
                                    label="Hệ thống cửa hàng"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Intro */}
            <div className="container">
                <p className="intro__tittle">THANH TOÁN VÀ VẬN CHUYỂN</p>
                <div className="intro__panel">
                    <div className="intro__panel-dark">
                        <Link to="#">
                            Khi nào thì đơn hàng của tôi được chuyển đi?
                        </Link>
                    </div>
                    <p className="intro__text">
                        Với đơn hàng của Quý khách, sau 24h kể từ khi đặt hàng
                        (không tính ngày thứ 7, chủ nhật và các ngày lễ), Evo
                        Watch sẽ liên hệ để xác nhận và gửi sản phẩm đến Quý
                        khách
                    </p>
                </div>
                <div className="intro__panel-white">
                    <Link to="#">
                        Tôi có phải thanh toán thêm thuế hay phí gì không?
                    </Link>
                </div>
                <div className="intro__panel-white">
                    <Link to="#">
                        Tôi muốn lấy hóa đơn VAT thì phải làm thế nào?
                    </Link>
                </div>
                <p className="intro__tittle">
                    ĐƠN HÀNG VÀ NHỮNG THÔNG TIN LIÊN QUAN
                </p>
                <div className="intro__panel">
                    <div className="intro__panel-dark">
                        <Link to="#">
                            Tôi cần phải thay đổi một vài thứ liên quan đến đơn
                            hàng, tôi phải làm thế nào?
                        </Link>
                    </div>
                    <p className="intro__text">
                        Quý khách vui lòng liên hệ Hotline{" "}
                        <Link to="tel:0123456789">0123 456 789</Link> hoặc inbox
                        fanpage Evo Watch để được hỗ trợ nhanh nhất các thông
                        tin về đơn hàng
                    </p>
                </div>
                <div className="intro__panel-white">
                    <Link to="#">
                        Tôi có thể sử dụng nhiều ưu đãi cho một đơn hàng được
                        không?
                    </Link>
                </div>
                <div className="intro__panel-white">
                    <Link to="#">
                        Evo Watch có thể khắc bất kỳ thứ gì tôi muốn lên sản
                        phẩm được không?
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Faq;
