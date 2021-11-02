import parse from "html-react-parser";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { addToCart } from "../../../../actions/cartActions";
import {
    listProductDetails,
    listProducts,
} from "../../../../actions/productActions";
import Loader from "../../../../components/Loader/Loader";
import Message from "../../../../components/Message/Message";
import { ModalContext } from "../../../../features/Contexts/ModalProvider";
import "../../styles/DetailProduct.scss";

function DetailProduct({ match }) {
    const [toogle, setToogle] = useState(1);
    const [toogleDesc, setToogleDesc] = useState(1);
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const productList = useSelector((state) => state.productList);
    const {
        loading: loadingProducts,
        error: errorProducts,
        products,
    } = productList;

    useEffect(() => {
        if (!product._id || product._id !== match.params.id) {
            dispatch(listProductDetails(match.params.id));
        }
    }, [dispatch, match, product._id]);

    useEffect(() => {
        dispatch(
            listProducts({ category: product.category, brand: product.brand })
        );
    }, [dispatch, product.category, product.brand]);

    const addToCartHandler = () => {
        dispatch(addToCart(match.params.id, qty));
    };

    const { openModal } = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal();
    };

    const handleQty = (type) => {
        if (type === "minus") {
            qty > 1 && setQty(qty - 1);
        } else {
            setQty(qty + 1);
        }
    };

    const onToogleDesc = (index) => {
        setToogleDesc(index);
    };

    const onToogleImg = (index) => {
        setToogle(index);
    };

    useEffect(() => {
        const swiper = new Swiper(".product", {
            slidesPerView: 2,
            spaceBetween: 0,
            breakpoints: {
                575: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
            },
            loop: false,
            loopFillGroupWithBlank: false,
        });
    });

    return (
        <div id="content">
            <div className="container">
                {/* Direct */}
                <div className="row direct">
                    <ul className="direct__list">
                        <li className="direct__item">
                            <Link to="/" className="direct__link">
                                Trang chủ
                            </Link>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <Link to="/product" className="direct__link">
                                Sản phẩm mới
                            </Link>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <span className="direct__text">{product.name}</span>
                        </li>
                    </ul>
                </div>
                {/* Detail */}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <div className="row product__detail">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <img
                                        src={`${product.image1}`}
                                        alt=""
                                        className={`product__detail-img ${
                                            toogle === 1 ? "active" : ""
                                        }`}
                                    />
                                    <img
                                        src={`${product.image2}`}
                                        alt=""
                                        className={`product__detail-img ${
                                            toogle === 2 ? "active" : ""
                                        }`}
                                    />
                                    <img
                                        src={`${product.image3}`}
                                        alt=""
                                        className={`product__detail-img ${
                                            toogle === 3 ? "active" : ""
                                        } `}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="product__list">
                                    <div
                                        className={`product__list-item ${
                                            toogle === 1 ? "active" : ""
                                        }`}
                                        onClick={() => onToogleImg(1)}
                                    >
                                        <img src={`${product.image1}`} alt="" />
                                    </div>
                                    <div
                                        className={`product__list-item ${
                                            toogle === 2 ? "active" : ""
                                        }`}
                                        onClick={() => onToogleImg(2)}
                                    >
                                        <img src={`${product.image2}`} alt="" />
                                    </div>
                                    <div
                                        className={`product__list-item ${
                                            toogle === 3 ? "active" : ""
                                        } ${
                                            product.image3 ===
                                            "/images/sample.jpg"
                                                ? "disable"
                                                : ""
                                        }`}
                                        onClick={() => onToogleImg(3)}
                                    >
                                        <img src={`${product.image3}`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="product__detail-tittle">
                                <p className="detail__tittle-name">
                                    {product.name}
                                </p>
                                <p className="detail__tittle-sku">
                                    SKU:
                                    <span>(ĐANG CẬP NHẬT...)</span>
                                </p>
                                <Link to="#" className="detail__tittle-rate">
                                    Đánh giá
                                </Link>
                            </div>
                            <div className="product__detail-price">
                                <div className="detail__price">
                                    <span className="detail__price-new">
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(product.price)}
                                    </span>
                                    <span
                                        className={`detail__price-text ${
                                            product.oldPrice === 0
                                                ? "disable"
                                                : ""
                                        }`}
                                    >
                                        Giá thị trường:
                                    </span>
                                    <span
                                        className={`detail__price-old ${
                                            product.oldPrice === 0
                                                ? "disable"
                                                : ""
                                        }`}
                                    >
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(product.oldPrice)}
                                    </span>
                                </div>
                                <div className="detail__price-desc">
                                    <p
                                        className={`detail__price-save ${
                                            product.oldPrice === 0
                                                ? "disable"
                                                : ""
                                        }`}
                                    >
                                        Tiết kiệm:
                                        <span>
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(
                                                product.oldPrice - product.price
                                            )}
                                        </span>
                                    </p>
                                    <p>
                                        Tình trạng:
                                        <span>{`${
                                            product.inStock
                                                ? "Còn hàng"
                                                : "Hết hàng"
                                        }`}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="product__detail-quality">
                                <span>Số lượng:</span>
                                <div className="detail__quality">
                                    <button
                                        className="detail__quality-btn"
                                        onClick={() => handleQty("minus")}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        className="detail__quality-in"
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
                                        name="quality"
                                        id="quality"
                                    />
                                    <button
                                        className="detail__quality-btn"
                                        onClick={() => handleQty("plus")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <Link
                                to="#"
                                className={`product__detail-btn ${
                                    product.inStock ? "" : "disable"
                                }`}
                                onClick={addToCartHandler}
                            >
                                <div onClick={handleOpenModal}>
                                    <p className="detail__btn-header">
                                        MUA NGAY VỚI GIÁ{" "}
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(product.price)}
                                    </p>
                                    <p className="detail__btn-desc">
                                        Đặt mua giao hàng tận nơi
                                    </p>
                                </div>
                            </Link>
                            <p className="product__detail-hotline">
                                Gọi đặt mua:
                                <Link to="tel:0123456789">0123 456 789</Link>
                                (miễn phí 8:30 - 21:30).
                            </p>
                            <div className="product__detail-service">
                                <div className="detail__service">
                                    <img
                                        src="/images/icon/policy_images_2.svg"
                                        alt=""
                                    />
                                    <p className="detail__service-text">
                                        MIỄN PHÍ VẬN CHUYỂN VỚI ĐƠN HÀNG
                                        <span>TỪ 700.000Đ</span>
                                    </p>
                                </div>
                                <div className="detail__service">
                                    <img
                                        src="/images/icon/policy_images_3.svg"
                                        alt=""
                                    />
                                    <p className="detail__service-text">
                                        BẢO HÀNh
                                        <span>10 NĂM</span>
                                        DO LỖI NHÀ SẢN XUẤT
                                    </p>
                                </div>
                                <div className="detail__service">
                                    <img
                                        src="/images/icon/policy_images_4.svg"
                                        alt=""
                                    />
                                    <p className="detail__service-text">
                                        CAM KẾT
                                        <span>100% CHÍNH HÃNG</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="row product__tabs">
                    <ul className="product__tabs-list">
                        <li className="product__tabs-item">
                            <Link
                                to="#"
                                className={`product__tabs-link ${
                                    toogleDesc === 1 ? "active" : ""
                                }`}
                                onClick={() => onToogleDesc(1)}
                            >
                                MÔ TẢ
                            </Link>
                        </li>
                        <li className="product__tabs-item">
                            <Link
                                to="#"
                                className={`product__tabs-link ${
                                    toogleDesc === 2 ? "active" : ""
                                }`}
                                onClick={() => onToogleDesc(2)}
                            >
                                GIỚI THIỆU
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    className={`product__tabs-desc  ${
                        toogleDesc === 1 ? "active" : ""
                    }`}
                >
                    <div className="row">
                        <div className="product__review">
                            <p className="product__review-tittle">
                                {parse(`${product.desc}`)}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <table className="product__table">
                            <tr>
                                <td>
                                    <p>Loại máy</p>
                                </td>
                                <td>
                                    <p>Japanese Miyota Precison Quartz</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Hiển thị</p>
                                </td>
                                <td>
                                    <p>6 Hand Dual Time Movement</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Chất liệu vỏ</p>
                                </td>
                                <td>
                                    <p>316 Low Carbon Stainless Steel</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Đường kính vỏ</p>
                                </td>
                                <td>
                                    <p> 38mm</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Độ dày vỏ</p>
                                </td>
                                <td>
                                    <p>10mm</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Loại máy</p>
                                </td>
                                <td>
                                    <p>Japanese Miyota Precison Quartz</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Chất liệu dây đeo</p>
                                </td>
                                <td>
                                    <p> 316 Low Carbon Stainless Steel</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Chiều rộng dây đeo</p>
                                </td>
                                <td>
                                    <p> 16mm</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Chất liệu mặt kính</p>
                                </td>
                                <td>
                                    <p>Mineral (Kính Khoáng Chất)</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Khả năng chịu nước</p>
                                </td>
                                <td>
                                    <p>5ATM (50m)</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div
                    className={`product__tabs-intro  ${
                        toogleDesc === 2 ? "active" : ""
                    }`}
                >
                    <p>{product.intro}</p>
                </div>
                {/* Product */}
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link to="/product" className="tittle__heading-link">
                            SẢN PHẨM
                            <strong>LIÊN QUAN</strong>
                        </Link>
                    </div>
                </div>
                {loadingProducts ? (
                    <Loader />
                ) : errorProducts ? (
                    <Message variant="danger">{errorProducts}</Message>
                ) : (
                    <div className="swiper-container product">
                        <div className="swiper-wrapper">
                            {products.map((product) => {
                                return (
                                    <div
                                        className="swiper-slide"
                                        key={product._id}
                                    >
                                        <div className="product__card">
                                            <Link
                                                to="#"
                                                className="product__link"
                                            ></Link>
                                            <span
                                                className={`product-sale ${
                                                    product.discount !== 0
                                                        ? "sale"
                                                        : ""
                                                }`}
                                            >
                                                -{product.discount}%
                                            </span>
                                            <div className="product__img">
                                                <div className="product__img-before">
                                                    <img
                                                        src={`${product.image1}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="product__img-after">
                                                    <img
                                                        src={`${product.image2}`}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <span className="product__desc">
                                                {product.type}
                                            </span>
                                            <span className="product__name">
                                                {product.name}
                                            </span>
                                            <div className="product__price">
                                                <span className="product__price-new">
                                                    {new Intl.NumberFormat(
                                                        "vi-VN",
                                                        {
                                                            style: "currency",
                                                            currency: "VND",
                                                        }
                                                    ).format(product.price)}
                                                </span>
                                                <span
                                                    className={`product__price-old ${
                                                        product.oldPrice === 0
                                                            ? "disable"
                                                            : ""
                                                    }`}
                                                >
                                                    {new Intl.NumberFormat(
                                                        "vi-VN",
                                                        {
                                                            style: "currency",
                                                            currency: "VND",
                                                        }
                                                    ).format(product.oldPrice)}
                                                </span>
                                            </div>
                                            <div
                                                className="product__add hide-on-mobile-tablet"
                                                title="Thêm vào giỏ hàng"
                                            >
                                                Thêm vào giỏ hàng
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DetailProduct;
