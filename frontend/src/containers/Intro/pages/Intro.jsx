import React from "react";
import MenuLink from "../../../components/MenuLink/MenuLink";
import "../styles/Intro.scss";

Intro.propTypes = {};

function Intro(props) {
    return (
        <div>
            <div className="banner">
                <img src="/images/evo-page-banner.jpg" alt="" />
                <p>GIỚI THIỆU</p>
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
                                    activeOnlyWhenExact={false}
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
            <div id="intro">
                <div className="container">
                    <p className="intro__text">
                        Kiến thức về đồng hồ, thông tin khuyến mãi, tin tức & sự
                        kiện, hình ảnh, video clip về đồng hồ đeo tay mới nhất
                        hiện nay, cập nhật liên tục nhanh và đầy đủ...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Intro;
