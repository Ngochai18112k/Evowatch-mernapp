import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import Message from "../../../components/Message/Message";
import "../styles/Product.scss";

function CategoryMobile({
    getFilterUrl,
    loadingBrands,
    errorBrands,
    productsBrand,
    loadingBrandsMen,
    errorBrandsMen,
    brandsMen,
    loadingBrandsWomen,
    errorBrandsWomen,
    brandsWomen,
    loadingBrandsExtra,
    errorBrandsExtra,
    brandsExtra,
    toggleCate,
    toggleFilterBrand,
    toggleFilterPrice,
    onToggleFilterBrand,
    onToggleFilterPrice,
}) {
    return (
        <div className={`category-mobile__on ${toggleCate ? "active" : ""}`}>
            <div className="category">
                <p className="category__heading">DANH MỤC</p>
                <ul className="category__list">
                    <li className="category__item">
                        <Link to="/" className="category__link">
                            Trang chủ
                        </Link>
                    </li>
                    <li className="category__item">
                        <Link to="/intro" className="category__link">
                            Giới thiệu
                        </Link>
                        <span className="category__plus"></span>
                        <ul className="category__drop">
                            <li className="category__drop-item">
                                <Link
                                    to="/intro-replace"
                                    className="category__drop-link"
                                >
                                    Chính sách đổi hàng
                                </Link>
                            </li>
                            <li className="category__drop-item">
                                <Link
                                    to="/intro-faq"
                                    className="category__drop-link"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li className="category__drop-item">
                                <Link
                                    to="/intro-pay"
                                    className="category__drop-link"
                                >
                                    Hướng dẫn thanh toán
                                </Link>
                            </li>
                            <li className="category__drop-item">
                                <Link
                                    to="/intro-ship"
                                    className="category__drop-link"
                                >
                                    Chính sách vận chuyển
                                </Link>
                            </li>
                            <li className="category__drop-item">
                                <Link
                                    to="/intro-shop"
                                    className="category__drop-link"
                                >
                                    Hệ thống cửa hàng
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`category__item`}>
                        <Link
                            to="/products/category/men"
                            className="category__link"
                        >
                            Nam
                        </Link>
                        <span className="category__plus"></span>
                        <ul className="category__drop">
                            {loadingBrandsMen ? (
                                <Loader />
                            ) : errorBrandsMen ? (
                                <Message variant="danger">
                                    {errorBrandsMen}
                                </Message>
                            ) : (
                                brandsMen.map((item, i) => {
                                    return (
                                        <li
                                            className="category__drop-item"
                                            key={i}
                                        >
                                            <Link
                                                to={getFilterUrl({
                                                    cat: "men",
                                                    brand: item,
                                                })}
                                                className="category__drop-link"
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </li>
                    <li className="category__item">
                        <Link
                            to="/products/category/women"
                            className="category__link"
                        >
                            Nữ
                        </Link>
                        <span className="category__plus"></span>
                        <ul className="category__drop">
                            {loadingBrandsWomen ? (
                                <Loader />
                            ) : errorBrandsWomen ? (
                                <Message variant="danger">
                                    {errorBrandsWomen}
                                </Message>
                            ) : (
                                brandsWomen.map((item, i) => {
                                    return (
                                        <li
                                            className="category__drop-item"
                                            key={i}
                                        >
                                            <Link
                                                to={getFilterUrl({
                                                    cat: "women",
                                                    brand: item,
                                                })}
                                                className="category__drop-link"
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </li>
                    <li className={`category__item`}>
                        <Link
                            to="/products/category/extra"
                            className="category__link"
                        >
                            Phụ kiện
                        </Link>
                        <span className="category__plus"></span>
                        <ul className="category__drop">
                            {loadingBrandsExtra ? (
                                <Loader />
                            ) : errorBrandsExtra ? (
                                <Message variant="danger">
                                    {errorBrandsExtra}
                                </Message>
                            ) : (
                                brandsExtra.map((item, i) => {
                                    return (
                                        <li
                                            className="category__drop-item"
                                            key={i}
                                        >
                                            <Link
                                                to={getFilterUrl({
                                                    cat: "extra",
                                                    brand: item,
                                                })}
                                                className="category__drop-link"
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </li>
                    <li className={`category__item`}>
                        <Link to="/products" className="category__link">
                            Sản phẩm
                        </Link>
                        <span className="category__plus"></span>
                        <ul className="category__list-sub">
                            <li className="category__item">
                                <Link
                                    to="/products/category/men"
                                    className="category__link"
                                >
                                    Nam
                                </Link>
                                <span className="category__plus"></span>
                                <ul className="category__drop">
                                    {loadingBrandsMen ? (
                                        <Loader />
                                    ) : errorBrandsMen ? (
                                        <Message variant="danger">
                                            {errorBrandsMen}
                                        </Message>
                                    ) : (
                                        brandsMen.map((item, i) => {
                                            return (
                                                <li
                                                    className="category__drop-item"
                                                    key={i}
                                                >
                                                    <Link
                                                        to={getFilterUrl({
                                                            cat: "men",
                                                            brand: item,
                                                        })}
                                                        className="category__drop-link"
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    )}
                                </ul>
                            </li>
                            <li className="category__item">
                                <Link
                                    to="/products/category/women"
                                    className="category__link"
                                >
                                    Nữ
                                </Link>
                                <span className="category__plus"></span>
                                <ul className="category__drop">
                                    {loadingBrandsWomen ? (
                                        <Loader />
                                    ) : errorBrandsWomen ? (
                                        <Message variant="danger">
                                            {errorBrandsWomen}
                                        </Message>
                                    ) : (
                                        brandsWomen.map((item, i) => {
                                            return (
                                                <li
                                                    className="category__drop-item"
                                                    key={i}
                                                >
                                                    <Link
                                                        to={getFilterUrl({
                                                            cat: "women",
                                                            brand: item,
                                                        })}
                                                        className="category__drop-link"
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    )}
                                </ul>
                            </li>
                            <li className="category__item">
                                <Link
                                    to="/products/category/extra"
                                    className="category__link"
                                >
                                    Phụ kiện
                                </Link>
                                <span className="category__plus"></span>
                                <ul className="category__drop">
                                    {loadingBrandsExtra ? (
                                        <Loader />
                                    ) : errorBrandsExtra ? (
                                        <Message variant="danger">
                                            {errorBrandsExtra}
                                        </Message>
                                    ) : (
                                        brandsExtra.map((item, i) => {
                                            return (
                                                <li
                                                    className="category__drop-item"
                                                    key={i}
                                                >
                                                    <Link
                                                        to={getFilterUrl({
                                                            cat: "extra",
                                                            brand: item,
                                                        })}
                                                        className="category__drop-link"
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="category__item">
                        <Link to="/news" className="category__link">
                            Tin tức
                        </Link>
                    </li>
                    <li className="category__item">
                        <Link to="/contact" className="category__link">
                            Liên hệ
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="filter">
                <p className="filter__heading">TÌM THEO</p>
                <div className="filter__choose">
                    <div className="filter__choose-text">
                        <span className="filter__choose-text-tittle">
                            Bạn chọn
                        </span>
                        <span className="filter__choose-text-close">
                            Bỏ hết
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </div>
                    <ul className="filter__choose-list">
                        <li className="filter__choose-item">
                            <i className="fas fa-times"></i>
                            <span className="filter__choose-item-text">
                                Kashmir
                            </span>
                        </li>
                    </ul>
                </div>
                <p className="filter__tittle">Thương hiệu</p>
                <ul className="filter__list">
                    {loadingBrands ? (
                        <Loader />
                    ) : errorBrands ? (
                        <Message variant="danger">{errorBrands}</Message>
                    ) : (
                        productsBrand.map((item, i) => {
                            return (
                                <li
                                    className={`filter__item ${
                                        item === "" ? "disable" : ""
                                    }`}
                                    key={i}
                                    onClick={() => onToggleFilterBrand(i + 1)}
                                >
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <Link
                                        className={`filter__item-text link ${
                                            toggleFilterBrand === i + 1
                                                ? "active"
                                                : ""
                                        }`}
                                        to={getFilterUrl({
                                            brand: item,
                                        })}
                                    >
                                        <i className="fa"></i>
                                        {item}
                                    </Link>
                                </li>
                            );
                        })
                    )}
                </ul>
                <p className="filter__tittle">Giá sản phẩm</p>
                <ul className="filter__list">
                    <li
                        className="filter__item"
                        onClick={() => onToggleFilterPrice(1)}
                    >
                        <input type="checkbox" className="filter__item-in" />
                        <Link
                            className={`filter__item-text link ${
                                toggleFilterPrice === 1 ? "active" : ""
                            }`}
                            to={getFilterUrl({
                                min: 1,
                                max: 100000,
                            })}
                        >
                            <i className="fa"></i>
                            Giá dưới 100.000đ
                        </Link>
                    </li>
                    <li
                        className="filter__item"
                        onClick={() => onToggleFilterPrice(2)}
                    >
                        <input type="checkbox" className="filter__item-in" />
                        <Link
                            className={`filter__item-text link ${
                                toggleFilterPrice === 2 ? "active" : ""
                            }`}
                            to={getFilterUrl({
                                min: 100000,
                                max: 200000,
                            })}
                        >
                            <i className="fa"></i>
                            100.000đ - 200.000đ
                        </Link>
                    </li>
                    <li
                        className="filter__item"
                        onClick={() => onToggleFilterPrice(3)}
                    >
                        <input type="checkbox" className="filter__item-in" />
                        <Link
                            className={`filter__item-text link ${
                                toggleFilterPrice === 3 ? "active" : ""
                            }`}
                            to={getFilterUrl({
                                min: 200000,
                                max: 300000,
                            })}
                        >
                            <i className="fa"></i>
                            200.000đ - 300.000đ
                        </Link>
                    </li>
                    <li
                        className="filter__item"
                        onClick={() => onToggleFilterPrice(4)}
                    >
                        <input type="checkbox" className="filter__item-in" />
                        <Link
                            className={`filter__item-text link ${
                                toggleFilterPrice === 4 ? "active" : ""
                            }`}
                            to={getFilterUrl({
                                min: 300000,
                                max: 500000,
                            })}
                        >
                            <i className="fa"></i>
                            300.000đ - 500.000đ
                        </Link>
                    </li>
                    <li
                        className="filter__item"
                        onClick={() => onToggleFilterPrice(5)}
                    >
                        <input type="checkbox" className="filter__item-in" />
                        <Link
                            className={`filter__item-text link ${
                                toggleFilterPrice === 5 ? "active" : ""
                            }`}
                            to={getFilterUrl({
                                min: 500000,
                                max: 1000000,
                            })}
                        >
                            <i className="fa"></i>
                            500.000đ - 1.000.000đ
                        </Link>
                    </li>
                    <li
                        className="filter__item"
                        onClick={() => onToggleFilterPrice(6)}
                    >
                        <input type="checkbox" className="filter__item-in" />
                        <Link
                            className={`filter__item-text link ${
                                toggleFilterPrice === 6 ? "active" : ""
                            }`}
                            to={getFilterUrl({
                                min: 1000000,
                                max: 10000000,
                            })}
                        >
                            <i className="fa"></i>
                            Giá trên 1.000.000đ
                        </Link>
                    </li>
                </ul>
                <p className="filter__tittle">Loại</p>
                <ul className="filter__list">
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Carbon
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            classNameic
                        </span>
                    </li>
                </ul>
                <p className="filter__tittle">Kích thước</p>
                <ul className="filter__list">
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Lớn
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Nhỏ
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Vừa
                        </span>
                    </li>
                </ul>
                <p className="filter__tittle">Loại dây</p>
                <ul className="filter__list">
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Nilong
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Nhựa
                        </span>
                    </li>
                    <li className="filter__item">
                        <input type="checkbox" className="filter__item-in" />
                        <span className="filter__item-text">
                            <i className="fa"></i>
                            Da
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CategoryMobile;
