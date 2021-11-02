import React from "react";
import { Link } from "react-router-dom";
import "./Banners.scss";

Banners.propTypes = {};

function Banners(props) {
    return (
        <div className="banners">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="banners__img">
                        <img
                            src="/images/banner/ant_index_banner_1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="banners__content">
                        <span className="banners__text">Đồng hồ</span>
                        <div className="banners__btn">
                            <Link
                                to="/products"
                                className="btns btn__white"
                                title="Xem thêm"
                            >
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="banners__img">
                        <img
                            src="/images/banner/ant_index_banner_2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="banners__content">
                        <span className="banners__text">Mắt kính</span>
                        <div className="banners__btn">
                            <Link
                                to="/products"
                                className="btns btn__white"
                                title="Xem thêm"
                            >
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="banners__img">
                        <img
                            src="/images/banner/ant_index_banner_3.jpg"
                            alt=""
                        />
                    </div>
                    <div className="banners__content">
                        <span className="banners__text">Trang sức</span>
                        <div className="banners__btn">
                            <Link
                                to="/products"
                                className="btns btn__white"
                                title="Xem thêm"
                            >
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banners;
