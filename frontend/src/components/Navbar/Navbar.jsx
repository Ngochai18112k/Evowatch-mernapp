import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
    listBrandsExtraProduct,
    listBrandsMenProduct,
    listBrandsWomenProduct,
} from "../../actions/productActions";
import Loader from "../Loader/Loader";
import MenuLink from "../MenuLink/MenuLink";
import Message from "../Message/Message";
import "./Navbar.scss";

function Navbar() {
    const {
        name = "all",
        category = "all",
        brand = "all",
        min = 0,
        max = 0,
        pageNumber = 1,
    } = useParams();

    const productBrandsMen = useSelector((state) => state.productBrandsMen);
    const {
        loading: loadingBrandsMen,
        error: errorBrandsMen,
        brandsMen,
    } = productBrandsMen;

    const productBrandsWomen = useSelector((state) => state.productBrandsWomen);
    const {
        loading: loadingBrandsWomen,
        error: errorBrandsWomen,
        brandsWomen,
    } = productBrandsWomen;

    const productBrandsExtra = useSelector((state) => state.productBrandsExtra);
    const {
        loading: loadingBrandsExtra,
        error: errorBrandsExtra,
        brandsExtra,
    } = productBrandsExtra;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listBrandsMenProduct());
        dispatch(listBrandsWomenProduct());
        dispatch(listBrandsExtraProduct());
    }, [dispatch]);

    const getFilterUrl = (filter) => {
        const filterPage = filter.page || pageNumber;
        const filterName = filter.name || name;
        const filterCategory = filter.category || category;
        const filterBrand = filter.brand || brand;
        const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
        const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
        return `/products/category/${filterCategory}/name/${filterName}/brand/${filterBrand}/min/${filterMin}/max/${filterMax}/page/${filterPage}`;
    };

    return (
        <div className="row hide-on-mobile-tablet">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <ul className="nav">
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink
                                to="/"
                                activeOnlyWhenExact={true}
                                label="TRANG CHỦ"
                            />
                        </div>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink
                                to="/intro"
                                activeOnlyWhenExact={false}
                                label="GIỚI THIỆU"
                            />
                            <i className="fal fa-chevron-down nav__icon"></i>
                        </div>
                        <ul className="dropdown">
                            <li className="dropdown-item">
                                <div className="dropdown__link">
                                    <MenuLink
                                        to="/intro-replace"
                                        activeOnlyWhenExact={false}
                                        label="Chính sách đổi hàng"
                                    />
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="dropdown__link">
                                    <MenuLink
                                        to="/intro-faq"
                                        activeOnlyWhenExact={false}
                                        label="FAQ"
                                    />
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="dropdown__link">
                                    <MenuLink
                                        to="/intro-pay"
                                        activeOnlyWhenExact={false}
                                        label="Hướng dẫn thanh toán"
                                    />
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="dropdown__link">
                                    <MenuLink
                                        to="/intro-ship"
                                        activeOnlyWhenExact={false}
                                        label="Chính sách vận chuyển"
                                    />
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="dropdown__link">
                                    <MenuLink
                                        to="/intro-shop"
                                        activeOnlyWhenExact={false}
                                        label="Hệ thống cửa hàng"
                                    />
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink
                                to="/products/category/men"
                                activeOnlyWhenExact={false}
                                label="NAM"
                            />
                            <i className="fal fa-chevron-down nav__icon"></i>
                        </div>
                        <ul className="dropdown">
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
                                            className={`dropdown-item ${
                                                item === "" ? "disable" : ""
                                            }`}
                                            key={i}
                                        >
                                            <div className="dropdown__link">
                                                <Link
                                                    className="link"
                                                    to={getFilterUrl({
                                                        category: "men",
                                                        brand: item,
                                                    })}
                                                >
                                                    {item}
                                                </Link>
                                            </div>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink
                                to="/products/category/women"
                                activeOnlyWhenExact={false}
                                label="NỮ"
                            />
                            <i className="fal fa-chevron-down nav__icon"></i>
                        </div>
                        <ul className="dropdown">
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
                                            className={`dropdown-item ${
                                                item === "" ? "disable" : ""
                                            }`}
                                            key={i}
                                        >
                                            <div className="dropdown__link">
                                                <Link
                                                    className="link"
                                                    to={getFilterUrl({
                                                        category: "women",
                                                        brand: item,
                                                    })}
                                                >
                                                    {item}
                                                </Link>
                                            </div>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink
                                to="/products/category/extra"
                                activeOnlyWhenExact={false}
                                label="PHỤ KIỆN"
                            />
                            <i className="fal fa-chevron-down nav__icon"></i>
                        </div>
                        <ul className="dropdown">
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
                                            className={`dropdown-item ${
                                                item === "" ? "disable" : ""
                                            }`}
                                            key={i}
                                        >
                                            <div className="dropdown__link">
                                                <Link
                                                    className="link"
                                                    to={getFilterUrl({
                                                        category: "extra",
                                                        brand: item,
                                                    })}
                                                >
                                                    {item}
                                                </Link>
                                            </div>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink
                                to="/products"
                                activeOnlyWhenExact={false}
                                label="SẢN PHẨM"
                            />
                            <i className="fal fa-chevron-down nav__icon"></i>
                        </div>
                        <div className="row drop">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <Link
                                    to="/products/category/men"
                                    className="drop__tittle"
                                >
                                    NAM
                                </Link>
                                <ul className="drop__list">
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
                                                    className={`drop__item ${
                                                        item === ""
                                                            ? "disable"
                                                            : ""
                                                    }`}
                                                    key={i}
                                                >
                                                    <div className="drop__link">
                                                        <Link
                                                            className="link"
                                                            to={getFilterUrl({
                                                                category: "men",
                                                                brand: item,
                                                            })}
                                                        >
                                                            {item}
                                                        </Link>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    )}
                                </ul>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <Link
                                    to="/products/category/women"
                                    className="drop__tittle"
                                >
                                    NỮ
                                </Link>
                                <ul className="drop__list">
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
                                                    className={`drop__item ${
                                                        item === ""
                                                            ? "disable"
                                                            : ""
                                                    }`}
                                                    key={i}
                                                >
                                                    <div className="drop__link">
                                                        <Link
                                                            className="link"
                                                            to={getFilterUrl({
                                                                category:
                                                                    "women",
                                                                brand: item,
                                                            })}
                                                        >
                                                            {item}
                                                        </Link>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    )}
                                </ul>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <Link
                                    to="/products/category/extra"
                                    className="drop__tittle"
                                >
                                    PHỤ KIỆN
                                </Link>
                                <ul className="drop__list">
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
                                                    className={`drop__item ${
                                                        item === ""
                                                            ? "disable"
                                                            : ""
                                                    }`}
                                                    key={i}
                                                >
                                                    <div className="drop__link">
                                                        <Link
                                                            className="link"
                                                            to={getFilterUrl({
                                                                category:
                                                                    "extra",
                                                                brand: item,
                                                            })}
                                                        >
                                                            {item}
                                                        </Link>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    )}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink
                                to="/news"
                                activeOnlyWhenExact={false}
                                label="TIN TỨC"
                            />
                        </div>
                    </li>
                    <li className="nav__item">
                        <div className="nav__link">
                            <MenuLink
                                to="/contact"
                                activeOnlyWhenExact={false}
                                label="LIÊN HỆ"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
