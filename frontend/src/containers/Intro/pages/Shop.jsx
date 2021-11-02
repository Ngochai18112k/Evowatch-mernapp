import React from "react";
import "../styles/Intro.scss";

Shop.propTypes = {};

function Shop(props) {
    return (
        <div id="intro">
            <div class="banner">
                <img src="/images/intro/evo-page-banner.jpg" alt="" />
                <p>HỆ THỐNG CỬA HÀNG</p>
            </div>

            {/* Intro */}
            <div class="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="selected">
                            <div className="selected__heading">
                                CHỌN TỈNH THÀNH PHỐ
                            </div>
                            <select
                                name="selected__city"
                                className="selected__city"
                            >
                                <option value>Chọn Tỉnh/ Thành Phố</option>
                                <option value="DaNang">Đà Nẵng</option>
                                <option value="HoChiMinh">Hồ Chí Minh</option>
                                <option value="Hue">Thừa Thiên Huế</option>
                            </select>
                            <div className="selected-store">
                                <ul className="store__list">
                                    <li className="store__item active">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Quận 10</span>
                                        <p>
                                            138A Tô Hiến Thành, Phường 15, Quận
                                            10, Hồ Chí Minh, Việt Nam
                                        </p>
                                    </li>
                                    <li className="store__item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Quận 10</span>
                                        <p>
                                            138A Tô Hiến Thành, Phường 15, Quận
                                            10, Hồ Chí Minh, Việt Nam
                                        </p>
                                    </li>
                                    <li className="store__item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Quận 10</span>
                                        <p>
                                            138A Tô Hiến Thành, Phường 15, Quận
                                            10, Hồ Chí Minh, Việt Nam
                                        </p>
                                    </li>
                                    <li className="store__item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Quận 10</span>
                                        <p>
                                            138A Tô Hiến Thành, Phường 15, Quận
                                            10, Hồ Chí Minh, Việt Nam
                                        </p>
                                    </li>
                                    <li className="store__item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Quận 10</span>
                                        <p>
                                            138A Tô Hiến Thành, Phường 15, Quận
                                            10, Hồ Chí Minh, Việt Nam
                                        </p>
                                    </li>
                                    <li className="store__item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Quận 10</span>
                                        <p>
                                            138A Tô Hiến Thành, Phường 15, Quận
                                            10, Hồ Chí Minh, Việt Nam
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="intro__map">
                            <iframe
                                title="maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4736630784296!2d105.73291811440777!3d21.053735992302236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1624461417934!5m2!1svi!2s"
                                width={`100%`}
                                height={`100%`}
                                style={{ border: 0 }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
