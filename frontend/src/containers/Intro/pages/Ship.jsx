import React from "react";
import MenuLink from "../../../components/MenuLink/MenuLink";
import "../styles/Intro.scss";

Ship.propTypes = {};

function Ship(props) {
    return (
        <div id="intro">
            <div class="banner">
                <img src="/images/evo-page-banner.jpg" alt="" />
                <p>CHÍNH SÁCH VẬN CHUYỂN</p>
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
                                    activeOnlyWhenExact={true}
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
            <div class="container">
                <div class="intro__text">
                    <p>
                        Ngay sau khi đơn hàng được gửi đến, chúng tôi sẽ gửi thư
                        (hoặc gọi điện) xác nhận rằng hàng hóa của Quý khách
                        đang được chuyển đi. Hàng sẽ đến tận tay Quý khách trong
                        vòng từ 1 đến 5 ngày (trừ ngày lễ và chủ nhật).
                    </p>

                    <p>
                        - Phí vận chuyển: Khách hàng được{" "}
                        <strong>MIỄN PHÍ</strong> vận chuyển trên{" "}
                        <strong>Toàn quốc</strong>.
                    </p>

                    <p>- Thời gian xử lý đơn hàng:</p>

                    <p>
                        + Đơn đặt hàng từ 8h30 đến 17h30 thì chúng tôi sẽ liên
                        hệ trong ngày.
                    </p>

                    <p>
                        + Đơn đặt hàng sau 17h30 thì chúng tôi sẽ liên hệ vào
                        sáng hôm sau.
                    </p>

                    <p>- Thời gian giao hàng:</p>

                    <p>
                        + Giao hàng trong ngày hoặc từ 1 - 2 ngày cho khách hàng
                        có địa chỉ ở các quận nội thành Thành phố Hà Nội và các
                        tỉnh lân cận.
                    </p>

                    <p>
                        + Giao hàng từ 2 – 5 ngày cho khách hàng có địa chỉ ở
                        các tỉnh xa, miền Trung và miền Nam.
                    </p>

                    <p>
                        + Tuy nhiên, vào thời gian cao điểm (lễ, tết…) chúng tôi
                        không thể giao hàng ngay nên sẽ thỏa thuận thời gian
                        giao hàng cho Quý khách. Kính mong Quý khách thông cảm!
                    </p>

                    <p>
                        Trước khi giao hàng chúng tôi sẽ gọi điện xác nhận rằng
                        hàng hóa của Quý khách đang được chuyển đi. Hàng sẽ đến
                        tận tay Quý khách trong vòng từ 1 đến 5 ngày (trừ ngày
                        lễ và chủ nhật).
                    </p>

                    <p>
                        Chúng tôi đảm bảo giao hàng trong vòng 24 - 48h (kể cả
                        thứ 7 và Chủ Nhật) trong nội thành Hà Nội. Việc giao
                        hàng sẽ được tiến hành ngay khi chúng tôi xác nhận được
                        giao dịch. Nếu trong đợt giao hàng đầu tiên Quý khách
                        không có mặt, chúng tôi sẽ gửi email (hoặc gọi điện) đến
                        Quý khách để sắp xếp thời gian giao hàng khác thuận tiện
                        hơn. Nếu đợt giao hàng thứ hai bị hoãn với cùng lý do,
                        Quý khách sẽ đến kho hàng của chúng tôi để nhận hàng
                        trong thời gian hoạt động từ 8h30 đến 21h30.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Ship;
