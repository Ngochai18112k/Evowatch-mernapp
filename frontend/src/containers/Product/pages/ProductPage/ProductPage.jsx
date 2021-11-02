import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../../styles/Product.scss";
import CategoryMobile from "../CategoryMobile";
import Pagination from "../Pagination";
import ListProductPage from "./ListProductPage";
import {
    listBrandsProduct,
    listProducts,
} from "../../../../actions/productActions";
import Loader from "../../../../components/Loader/Loader";
import Message from "../../../../components/Message/Message";
import $ from "jquery";

function ProductPage() {
    const {
        name = "all",
        category = "all",
        brand = "all",
        min = 0,
        max = 0,
        pageNumber = 1,
    } = useParams();

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;

    const productBrands = useSelector((state) => state.productBrands);
    const {
        loading: loadingBrands,
        error: errorBrands,
        brands,
    } = productBrands;

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

    useEffect(() => {
        $(".category__plus").click(function () {
            $(this).next(".category__drop").toggleClass("active");
            $(this).next(".category__list-sub").toggleClass("active");
            $(this).toggleClass("active");
        });
    }, []);

    useEffect(() => {
        dispatch(
            listProducts({
                name: name !== "all" ? name : "",
                category: category !== "all" ? category : "",
                brand: brand !== "all" ? brand : "",
                min,
                max,
                pageNumber,
            })
        );
    }, [category, dispatch, pageNumber, name, brand, min, max]);

    const getFilterUrl = (filter) => {
        const filterPage = filter.page || pageNumber;
        const filterName = filter.name || name;
        const filterCategory = filter.category || category;
        const filterBrand = filter.brand || brand;
        const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
        const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
        return `/products/category/${filterCategory}/name/${filterName}/brand/${filterBrand}/min/${filterMin}/max/${filterMax}/page/${filterPage}`;
    };

    useEffect(() => {
        dispatch(listBrandsProduct(category !== "all" ? category : ""));
    }, [dispatch, category]);

    const [toggleFilterBrand, setToggleFilterBrand] = useState(0);
    const [toggleFilterPrice, setToggleFilterPrice] = useState(0);
    const [toggleSort, setToggleSort] = useState(0);
    const [toggleCate, setToggleCate] = useState(false);

    const onToggleFilterBrand = (index) => {
        setToggleFilterBrand(index);
    };

    const onToggleFilterPrice = (index) => {
        setToggleFilterPrice(index);
    };

    const onToggleSort = (index) => {
        setToggleSort(index);
    };

    function onToggleCate() {
        setToggleCate(!toggleCate);
    }

    const sortAZ = () => {
        products.sort((a, b) => {
            if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
            if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
            return 0;
        });
    };

    const sortZA = () => {
        products.sort((a, b) => {
            if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
            if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
            return 0;
        });
    };

    const sortGiaTang = () => {
        products.sort((a, b) => {
            return a.price - b.price;
        });
    };

    const sortGiaGiam = () => {
        products.sort((a, b) => {
            return b.price - a.price;
        });
    };

    return (
        <div id="content">
            <div className="banner">
                <img src="/images/evo-col-banner.jpg" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            {category === "men" ? (
                                <div className="banner__text">
                                    <span className="banner__heading">NAM</span>
                                    <span className="banner__desc">
                                        Những sản phẩm đang được "săn lùng" gát
                                        gao nhất của Evo Watch và có thể sold
                                        out bất cứ lúc nào. Hãy nhanh tay tìm
                                        lấy sản phẩm bạn yêu thích.
                                    </span>
                                </div>
                            ) : category === "women" ? (
                                <div className="banner__text">
                                    <span className="banner__heading">NỮ</span>
                                    <span className="banner__desc">
                                        Kiến thức về đồng hồ, thông tin khuyến
                                        mãi, tin tức & sự kiện, hình ảnh, video
                                        clip về đồng hồ đeo tay mới nhất hiện
                                        nay, cập nhật liên tục nhanh và đầy
                                        đủ...
                                    </span>
                                </div>
                            ) : category === "extra" ? (
                                <div className="banner__text">
                                    <span className="banner__heading">
                                        PHỤ KIỆN
                                    </span>
                                    <span className="banner__desc">
                                        Kiến thức về đồng hồ, thông tin khuyến
                                        mãi, tin tức & sự kiện, hình ảnh, video
                                        clip về đồng hồ đeo tay mới nhất hiện
                                        nay, cập nhật liên tục nhanh và đầy
                                        đủ...
                                    </span>
                                </div>
                            ) : (
                                <div className="banner__text">
                                    <span className="banner__heading">
                                        TẤT CẢ SẢN PHẨM
                                    </span>
                                    <span className="banner__desc">
                                        Kiến thức về đồng hồ, thông tin khuyến
                                        mãi, tin tức & sự kiện, hình ảnh, video
                                        clip về đồng hồ đeo tay mới nhất hiện
                                        nay, cập nhật liên tục nhanh và đầy
                                        đủ...
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="category-mobile show-on-mobile-tablet">
                <i
                    className={`fa fa-filter open ${
                        toggleCate ? "disable" : ""
                    }`}
                    onClick={onToggleCate}
                ></i>
                <CategoryMobile
                    getFilterUrl={getFilterUrl}
                    loadingBrands={loadingBrands}
                    errorBrands={errorBrands}
                    productsBrand={brands}
                    loadingBrandsMen={loadingBrandsMen}
                    errorBrandsMen={errorBrandsMen}
                    brandsMen={brandsMen}
                    loadingBrandsWomen={loadingBrandsWomen}
                    errorBrandsWomen={errorBrandsWomen}
                    brandsWomen={brandsWomen}
                    loadingBrandsExtra={loadingBrandsExtra}
                    errorBrandsExtra={errorBrandsExtra}
                    brandsExtra={brandsExtra}
                    toggleCate={toggleCate}
                    toggleFilterBrand={toggleFilterBrand}
                    toggleFilterPrice={toggleFilterPrice}
                    onToggleFilterBrand={onToggleFilterBrand}
                    onToggleFilterPrice={onToggleFilterPrice}
                ></CategoryMobile>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 hide-on-mobile-tablet">
                        <div className="category">
                            <p className="category__heading">DANH MỤC</p>
                            <ul className="category__list">
                                <li className="category__item">
                                    <Link to="/" className="category__link">
                                        Trang chủ
                                    </Link>
                                </li>
                                <li className="category__item">
                                    <Link
                                        to="/intro"
                                        className="category__link"
                                    >
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
                                                {errorBrandsWomen}
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
                                <li className="category__item">
                                    <Link
                                        to="/products"
                                        className="category__link"
                                    >
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
                                                                    to={getFilterUrl(
                                                                        {
                                                                            cat: "men",
                                                                            brand: item,
                                                                        }
                                                                    )}
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
                                                    brandsWomen.map(
                                                        (item, i) => {
                                                            return (
                                                                <li
                                                                    className="category__drop-item"
                                                                    key={i}
                                                                >
                                                                    <Link
                                                                        to={getFilterUrl(
                                                                            {
                                                                                cat: "women",
                                                                                brand: item,
                                                                            }
                                                                        )}
                                                                        className="category__drop-link"
                                                                    >
                                                                        {item}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        }
                                                    )
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
                                                    brandsExtra.map(
                                                        (item, i) => {
                                                            return (
                                                                <li
                                                                    className="category__drop-item"
                                                                    key={i}
                                                                >
                                                                    <Link
                                                                        to={getFilterUrl(
                                                                            {
                                                                                cat: "extra",
                                                                                brand: item,
                                                                            }
                                                                        )}
                                                                        className="category__drop-link"
                                                                    >
                                                                        {item}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        }
                                                    )
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
                                    <Link
                                        to="/contact"
                                        className="category__link"
                                    >
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
                                    <Message variant="danger">
                                        {errorBrands}
                                    </Message>
                                ) : (
                                    brands.map((item, i) => {
                                        return (
                                            <li
                                                className={`filter__item ${
                                                    item === "" ? "disable" : ""
                                                }`}
                                                key={i}
                                                onClick={() =>
                                                    onToggleFilterBrand(i + 1)
                                                }
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="filter__item-in"
                                                />
                                                <Link
                                                    className={`filter__item-text link ${
                                                        toggleFilterBrand ===
                                                        i + 1
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
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <Link
                                        className={`filter__item-text link ${
                                            toggleFilterPrice === 1
                                                ? "active"
                                                : ""
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
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <Link
                                        className={`filter__item-text link ${
                                            toggleFilterPrice === 2
                                                ? "active"
                                                : ""
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
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <Link
                                        className={`filter__item-text link ${
                                            toggleFilterPrice === 3
                                                ? "active"
                                                : ""
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
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <Link
                                        className={`filter__item-text link ${
                                            toggleFilterPrice === 4
                                                ? "active"
                                                : ""
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
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <Link
                                        className={`filter__item-text link ${
                                            toggleFilterPrice === 5
                                                ? "active"
                                                : ""
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
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <Link
                                        className={`filter__item-text link ${
                                            toggleFilterPrice === 6
                                                ? "active"
                                                : ""
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
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <span className="filter__item-text">
                                        <i className="fa"></i>
                                        Carbon
                                    </span>
                                </li>
                                <li className="filter__item">
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <span className="filter__item-text">
                                        <i className="fa"></i>
                                        classNameic
                                    </span>
                                </li>
                            </ul>
                            <p className="filter__tittle">Kích thước</p>
                            <ul className="filter__list">
                                <li className="filter__item">
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <span className="filter__item-text">
                                        <i className="fa"></i>
                                        Lớn
                                    </span>
                                </li>
                                <li className="filter__item">
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <span className="filter__item-text">
                                        <i className="fa"></i>
                                        Nhỏ
                                    </span>
                                </li>
                                <li className="filter__item">
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <span className="filter__item-text">
                                        <i className="fa"></i>
                                        Vừa
                                    </span>
                                </li>
                            </ul>
                            <p className="filter__tittle">Loại dây</p>
                            <ul className="filter__list">
                                <li className="filter__item">
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <span className="filter__item-text">
                                        <i className="fa"></i>
                                        Nilong
                                    </span>
                                </li>
                                <li className="filter__item">
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <span className="filter__item-text">
                                        <i className="fa"></i>
                                        Nhựa
                                    </span>
                                </li>
                                <li className="filter__item">
                                    <input
                                        type="checkbox"
                                        className="filter__item-in"
                                    />
                                    <span className="filter__item-text">
                                        <i className="fa"></i>
                                        Da
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Product Content */}
                    <div className="col-xl-9 col-lg-9">
                        {products.length === 0 ? (
                            <div className="row">
                                <div className="product__alert">
                                    <span className="product__alert-text">
                                        Không có sản phẩm nào trong danh mục
                                        này.
                                    </span>
                                    <Link
                                        to="#"
                                        className="product__alert-close"
                                    >
                                        <i className="fas fa-times"></i>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="sort hide-on-mobile">
                                    <span className="sort__tittle">
                                        Xếp theo:
                                    </span>
                                    <ul className="sort__list">
                                        <li
                                            className={`sort__item ${
                                                toggleSort === 1 ? "active" : ""
                                            }`}
                                            onClick={sortAZ}
                                        >
                                            <div
                                                className="sort__link"
                                                onClick={() => onToggleSort(1)}
                                            >
                                                <i></i>
                                                Tên A-Z
                                            </div>
                                        </li>
                                        <li
                                            className={`sort__item ${
                                                toggleSort === 2 ? "active" : ""
                                            }`}
                                            onClick={sortZA}
                                        >
                                            <div
                                                className="sort__link"
                                                onClick={() => onToggleSort(2)}
                                            >
                                                <i></i>
                                                Tên Z-A
                                            </div>
                                        </li>
                                        <li
                                            className={`sort__item ${
                                                toggleSort === 3 ? "active" : ""
                                            }`}
                                            onClick={sortGiaTang}
                                        >
                                            <div
                                                className="sort__link"
                                                onClick={() => onToggleSort(3)}
                                            >
                                                <i></i>
                                                Giá thấp đến cao
                                            </div>
                                        </li>
                                        <li
                                            className={`sort__item ${
                                                toggleSort === 4 ? "active" : ""
                                            }`}
                                            onClick={sortGiaGiam}
                                        >
                                            <div
                                                className="sort__link"
                                                onClick={() => onToggleSort(4)}
                                            >
                                                <i></i>
                                                Giá cao xuống thấp
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {loading ? (
                                    <Loader />
                                ) : error ? (
                                    <Message variant="danger">{error}</Message>
                                ) : (
                                    <>
                                        <div className="row">
                                            <ListProductPage
                                                products={products}
                                            ></ListProductPage>
                                        </div>
                                        <Pagination
                                            pages={pages}
                                            page={page}
                                            getFilterUrl={getFilterUrl}
                                        ></Pagination>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
