import React, { useEffect } from "react";
import "./NavbarMobile.scss";
import MenuLink from "../MenuLink/MenuLink";
import { Link, useParams } from "react-router-dom";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import {
    listBrandsExtraProduct,
    listBrandsMenProduct,
    listBrandsWomenProduct,
} from "../../actions/productActions";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

function NavbarMobile({ toogleNav, handleToogleNav }) {
    const {
        name = "all",
        category = "all",
        brand = "all",
        min = 0,
        max = 0,
        pageNumber = 1,
    } = useParams();

    useEffect(() => {
        $(".navmobile__icon").click(function () {
            $(this).next(".navmobile__drop").toggleClass("active");
        });
    }, []);

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
        <div className={`navmobile ${toogleNav ? "active" : ""}`}>
            <div className="navmobile__overlay" onClick={handleToogleNav}></div>
            <div className={`navmobile__body ${toogleNav ? "active" : ""}`}>
                <ul className="navmobile__list">
                    <li className="navmobile__item">
                        <div
                            className="navmobile__link"
                            onClick={handleToogleNav}
                        >
                            <MenuLink
                                to="/"
                                activeOnlyWhenExact={true}
                                label="Trang Chủ"
                                onClick={handleToogleNav}
                            />
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink
                                to="/intro"
                                activeOnlyWhenExact={true}
                                label="Giới Thiệu"
                                onClick={handleToogleNav}
                            />
                            <i className="fal fa-chevron-down navmobile__icon"></i>
                            <ul className="navmobile__drop">
                                <li
                                    className="navmobile__drop-item"
                                    onClick={handleToogleNav}
                                >
                                    <Link
                                        to="/intro-replace"
                                        className="navmobile__drop-link"
                                    >
                                        Chính sách đổi hàng
                                    </Link>
                                </li>
                                <li
                                    className="navmobile__drop-item"
                                    onClick={handleToogleNav}
                                >
                                    <Link
                                        to="/intro-faq"
                                        className="navmobile__drop-link"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li
                                    className="navmobile__drop-item"
                                    onClick={handleToogleNav}
                                >
                                    <Link
                                        to="/intro-pay"
                                        className="navmobile__drop-link"
                                    >
                                        Hướng dẫn thanh toán
                                    </Link>
                                </li>
                                <li
                                    className="navmobile__drop-item"
                                    onClick={handleToogleNav}
                                >
                                    <Link
                                        to="/intro-ship"
                                        className="navmobile__drop-link"
                                    >
                                        Chính sách vận chuyển
                                    </Link>
                                </li>
                                <li
                                    className="navmobile__drop-item"
                                    onClick={handleToogleNav}
                                >
                                    <Link
                                        to="/intro-shop"
                                        className="navmobile__drop-link"
                                    >
                                        Hệ thống cửa hàng
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink
                                to="/products/category/men"
                                activeOnlyWhenExact={true}
                                label="Nam"
                                onClick={handleToogleNav}
                            />
                            <i className="fal fa-chevron-down navmobile__icon"></i>
                            <ul className="navmobile__drop">
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
                                                className="navmobile__drop-item"
                                                key={i}
                                                onClick={handleToogleNav}
                                            >
                                                <Link
                                                    to={getFilterUrl({
                                                        category: "men",
                                                        brand: item,
                                                    })}
                                                    className="navmobile__drop-link"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        );
                                    })
                                )}
                            </ul>
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink
                                to="/products/category/women"
                                activeOnlyWhenExact={true}
                                label="Nữ"
                                onClick={handleToogleNav}
                            />
                            <i className="fal fa-chevron-down navmobile__icon"></i>
                            <ul className="navmobile__drop">
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
                                                className="navmobile__drop-item"
                                                key={i}
                                                onClick={handleToogleNav}
                                            >
                                                <Link
                                                    to={getFilterUrl({
                                                        category: "women",
                                                        brand: item,
                                                    })}
                                                    className="navmobile__drop-link"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        );
                                    })
                                )}
                            </ul>
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink
                                to="/products/category/extra"
                                activeOnlyWhenExact={true}
                                label="Phụ Kiện"
                                onClick={handleToogleNav}
                            />
                            <i className="fal fa-chevron-down navmobile__icon"></i>
                            <ul className="navmobile__drop">
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
                                                className="navmobile__drop-item"
                                                key={i}
                                                onClick={handleToogleNav}
                                            >
                                                <Link
                                                    to={getFilterUrl({
                                                        category: "extra",
                                                        brand: item,
                                                    })}
                                                    className="navmobile__drop-link"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        );
                                    })
                                )}
                            </ul>
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink
                                to="/products"
                                activeOnlyWhenExact={true}
                                label="Sản Phẩm"
                                onClick={handleToogleNav}
                            />
                            <i className="fal fa-chevron-down navmobile__icon"></i>
                            <ul className="navmobile__drop">
                                <li className="navmobile__drop-item">
                                    <MenuLink
                                        to="/products/category/men"
                                        activeOnlyWhenExact={true}
                                        label="Nam"
                                        onClick={handleToogleNav}
                                    />
                                    <i className="fal fa-chevron-down navmobile__icon"></i>
                                    <ul className="navmobile__drop">
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
                                                        className="navmobile__drop-item"
                                                        key={i}
                                                        onClick={
                                                            handleToogleNav
                                                        }
                                                    >
                                                        <Link
                                                            to={getFilterUrl({
                                                                category: "men",
                                                                brand: item,
                                                            })}
                                                            className="navmobile__drop-link"
                                                        >
                                                            {item}
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        )}
                                    </ul>
                                </li>
                                <li className="navmobile__drop-item">
                                    <MenuLink
                                        to="/products/category/women"
                                        activeOnlyWhenExact={true}
                                        label="Nữ"
                                        onClick={handleToogleNav}
                                    />
                                    <i className="fal fa-chevron-down navmobile__icon"></i>
                                    <ul className="navmobile__drop">
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
                                                        className="navmobile__drop-item"
                                                        key={i}
                                                        onClick={
                                                            handleToogleNav
                                                        }
                                                    >
                                                        <Link
                                                            to={getFilterUrl({
                                                                category:
                                                                    "women",
                                                                brand: item,
                                                            })}
                                                            className="navmobile__drop-link"
                                                        >
                                                            {item}
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        )}
                                    </ul>
                                </li>
                                <li className="navmobile__drop-item">
                                    <MenuLink
                                        to="/products/category/extra"
                                        activeOnlyWhenExact={true}
                                        label="Phụ Kiện"
                                        onClick={handleToogleNav}
                                    />
                                    <i className="fal fa-chevron-down navmobile__icon"></i>
                                    <ul className="navmobile__drop">
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
                                                        className="navmobile__drop-item"
                                                        key={i}
                                                        onClick={
                                                            handleToogleNav
                                                        }
                                                    >
                                                        <Link
                                                            to={getFilterUrl({
                                                                category:
                                                                    "extra",
                                                                brand: item,
                                                            })}
                                                            className="navmobile__drop-link"
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
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div
                            className="navmobile__link"
                            onClick={handleToogleNav}
                        >
                            <MenuLink
                                to="/news"
                                activeOnlyWhenExact={true}
                                label="Tin Tức"
                            />
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div
                            className="navmobile__link"
                            onClick={handleToogleNav}
                        >
                            <MenuLink
                                to="/contact"
                                activeOnlyWhenExact={true}
                                label="Liên Hệ"
                            />
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div
                            className="navmobile__link"
                            onClick={handleToogleNav}
                        >
                            <MenuLink
                                to="/login"
                                activeOnlyWhenExact={true}
                                label="Đăng Nhập"
                            />
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div
                            className="navmobile__link"
                            onClick={handleToogleNav}
                        >
                            <MenuLink
                                to="/signin"
                                activeOnlyWhenExact={true}
                                label="Đăng Ký"
                            />
                        </div>
                    </li>
                    <li className="navmobile__item">
                        <div className="navmobile__link">
                            <MenuLink
                                to="#"
                                activeOnlyWhenExact={true}
                                label="Admin"
                                onClick={handleToogleNav}
                            />
                            <i className="fal fa-chevron-down navmobile__icon"></i>
                            <ul className="navmobile__drop">
                                <li
                                    className="navmobile__drop-item"
                                    onClick={handleToogleNav}
                                >
                                    <Link
                                        to="/admin/userlist"
                                        className="navmobile__drop-link"
                                    >
                                        Khách hàng
                                    </Link>
                                </li>
                                <li
                                    className="navmobile__drop-item"
                                    onClick={handleToogleNav}
                                >
                                    <Link
                                        to="/admin/productlist"
                                        className="navmobile__drop-link"
                                    >
                                        Sản phẩm
                                    </Link>
                                </li>
                                <li
                                    className="navmobile__drop-item"
                                    onClick={handleToogleNav}
                                >
                                    <Link
                                        to="/admin/orderlist"
                                        className="navmobile__drop-link"
                                    >
                                        Đơn hàng
                                    </Link>
                                </li>
                                <li
                                    className="navmobile__drop-item"
                                    onClick={handleToogleNav}
                                >
                                    <Link
                                        to="/admin/newslist"
                                        className="navmobile__drop-link"
                                    >
                                        Bài viết
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavbarMobile;
