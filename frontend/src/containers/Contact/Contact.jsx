import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

function Contact() {
    return (
        <div id="content">
            {/* Banner */}
            <div className="banner">
                <img src="/images/evo-page-banner.jpg" alt="" />
                <p>LIÊN HỆ VỚI CHÚNG TÔI</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="login__tittle">GỬI THÔNG TIN</div>
                        <p className="login__tittle-text">
                            Bạn hãy điền nội dung tin nhắn vào form dưới đây và
                            gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi
                            nhận được.
                        </p>
                        <div className="login__form">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="login__form-input">
                                        <p className="login__form-text">
                                            HỌ VÀ TÊN
                                            <span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            className="login__form-in"
                                            placeholder="Nhập Họ và tên"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="login__form-input">
                                        <p className="login__form-text">
                                            EMAIL
                                            <span>*</span>
                                        </p>
                                        <input
                                            type="email"
                                            className="login__form-in"
                                            placeholder="Nhập Địa chỉ Email"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    ĐIỆN THOẠI
                                    <span>*</span>
                                </p>
                                <input
                                    type="text"
                                    className="login__form-in"
                                    placeholder="Nhập Số điện thoại"
                                    required
                                />
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    NỘI DUNG
                                    <span>*</span>
                                </p>
                                <input
                                    type="text"
                                    className="login__form-in"
                                    placeholder="Nội dung liên hệ"
                                    required
                                />
                            </div>
                            <div className="button">
                                <Link
                                    to="/"
                                    className="btns btn__darkwhite login__btn"
                                    style={{ width: "100%" }}
                                >
                                    GỬI TIN NHẮN
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="map">
                        <div className="map__tittle">BẢN ĐỒ CỬA HÀNG</div>
                        <div className="map__box">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4736630784296!2d105.73291811440777!3d21.053735992302236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1624461417934!5m2!1svi!2s"
                                width={`100%`}
                                height={450}
                                style={{ border: 0 }}
                                loading="lazy"
                                title="map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
