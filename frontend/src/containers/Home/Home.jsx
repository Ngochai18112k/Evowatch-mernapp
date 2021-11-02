import React from "react";
import { Link } from "react-router-dom";
import Banners from "../../features/Banners/Banners";
import Collection from "../../features/ListProduct/components/Collection";
import ProductCarousel from "../../features/ListProduct/components/ProductCarousel";
import ProductNew from "../../features/ListProduct/components/ProductNew";
import NewsHome from "../News/NewsHome";
import "./Home.scss";

function Home() {
    return (
        <div id="content">
            <div className="banner-home">
                <img src="/images/slider.jpg" alt="" />
            </div>
            <div className="container">
                {/* Tittle */}
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link
                            to="/products"
                            className="tittle__heading-link"
                            title="Sản phẩm Mới"
                        >
                            SẢN PHẨM
                            <strong>MỚI</strong>
                        </Link>
                    </div>
                    <div className="tittle__section hide-on-mobile">
                        <Link
                            to="/products/category/men"
                            className="tittle__section-link"
                            title="Nam"
                        >
                            Nam
                        </Link>
                        <Link
                            to="/products/category/women"
                            className="tittle__section-link"
                            title="Nữ"
                        >
                            Nữ
                        </Link>
                        <Link
                            to="/products/category/extra"
                            className="tittle__section-link"
                            title="Phụ kiện"
                        >
                            Phụ kiện
                        </Link>
                    </div>
                </div>

                {/* Product */}
                <ProductNew></ProductNew>

                {/* Btn */}
                <div className="button">
                    <Link
                        to="/products"
                        className="btns btn__darkwhite"
                        title="Xem tất cả Sản phẩm mới"
                    >
                        XEM TẤT CẢ. SẢN PHẨM MỚI
                    </Link>
                </div>

                {/* Banner */}
                <Banners></Banners>

                {/* Tittle */}
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link
                            to="/products/category/men"
                            className="tittle__heading-link"
                        >
                            DÀNH CHO
                            <strong>NAM</strong>
                        </Link>
                    </div>
                    <div className="tittle__section hide-on-mobile">
                        <Link
                            to="/products/category/men"
                            className="tittle__section-link"
                            title="Nam"
                        >
                            Nam
                        </Link>
                        <Link
                            to="/products/category/women"
                            className="tittle__section-link"
                            title="Nữ"
                        >
                            Nữ
                        </Link>
                        <Link
                            to="/products/category/extra"
                            className="tittle__section-link"
                            title="Phụ kiện"
                        >
                            Phụ kiện
                        </Link>
                    </div>
                </div>

                {/* Product */}
                <ProductCarousel cat="men"></ProductCarousel>

                {/* Btn */}
                <div className="button">
                    <Link
                        to="/products/category/men"
                        className="btns btn__darkwhite"
                        title="Xem tất cả Dành cho nam"
                    >
                        XEM TẤT CẢ. DÀNH CHO NAM
                    </Link>
                </div>

                {/* Range */}
                <div className="range"></div>

                {/* Tittle */}
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link
                            to="/products/category/extra"
                            className="tittle__heading-link"
                        >
                            <strong>PHỤ KIỆN</strong>
                            MỚI
                        </Link>
                    </div>
                    <div className="tittle__section hide-on-mobile">
                        <Link
                            to="/products/category/men"
                            className="tittle__section-link"
                            title="Nam"
                        >
                            Nam
                        </Link>
                        <Link
                            to="/products/category/women"
                            className="tittle__section-link"
                            title="Nữ"
                        >
                            Nữ
                        </Link>
                        <Link
                            to="/products/category/extra"
                            className="tittle__section-link"
                            title="Phụ kiện"
                        >
                            Phụ kiện
                        </Link>
                    </div>
                </div>

                {/* Product */}
                <ProductCarousel cat="extra"></ProductCarousel>

                {/* Btn */}
                <div className="button">
                    <Link
                        to="/products/category/extra"
                        className="btns btn__darkwhite"
                        title="Xem tất cả Phụ kiện mới"
                    >
                        XEM TẤT CẢ. PHỤ KIỆN MỚI
                    </Link>
                </div>
            </div>

            {/* Collection */}
            <Collection></Collection>

            {/* News */}
            <NewsHome></NewsHome>

            {/* Btn */}
            <div className="button">
                <Link
                    to="/news"
                    className="btns btn__darkwhite"
                    title="Xem tất cả"
                >
                    XEM TẤT CẢ
                </Link>
            </div>
        </div>
    );
}

export default Home;
