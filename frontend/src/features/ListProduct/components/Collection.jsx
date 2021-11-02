import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper } from "swiper/core";
import "swiper/swiper-bundle.css";
import { ModalContext } from "../../Contexts/ModalProvider";
import "../styles/Collection.scss";
import "../styles/Product.scss";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../actions/productActions";
import { addToCart } from "../../../actions/cartActions";
import Loader from "../../../components/Loader/Loader";
import Message from "../../../components/Message/Message";

function Collection() {
    const { openModal } = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal();
    };

    const keyword = "";
    const pageNumber = 1;
    const cat = "men";

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber, cat));
    }, [dispatch, cat]);

    const addToCartHandler = (id) => {
        dispatch(addToCart(id, 1));
    };

    useEffect(() => {
        const swiper = new Swiper(".collection__slide", {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 20,
            loop: true,
            loopFillGroupWithBlank: false,
        });
    });

    return (
        <div
            className="collection"
            style={{ backgroundImage: `url('/images/ant_product_bg.jpg')` }}
        >
            <div className="collection__content">
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link
                            to="/product"
                            className="tittle__heading-link"
                            title="Bộ sưu tập Mùa hè"
                        >
                            BỘ SƯU TẬP
                            <strong>MÙA HÈ</strong>
                        </Link>
                    </div>
                </div>
                <div className="swiper-container collection__slide container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="collection__img">
                                <img
                                    src="/images/index-evo-icon-1.jpg"
                                    alt=""
                                />
                                <Link
                                    to="/product"
                                    className="collection__img-link"
                                ></Link>
                                <span className="collection__img-dot"></span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="collection__product">
                                <div className="product">
                                    {loading ? (
                                        <Loader />
                                    ) : error ? (
                                        <Message variant="danger">
                                            {error}
                                        </Message>
                                    ) : (
                                        products.map((product, i) => {
                                            return (
                                                <div
                                                    className={`product-slide ${
                                                        i > 0 ? "disable" : ""
                                                    }`}
                                                    key={product._id}
                                                >
                                                    <div className="swiper-slide">
                                                        <div className="product__card">
                                                            <Link
                                                                to={`/product/${product._id}`}
                                                                className="product__link"
                                                            ></Link>
                                                            <span
                                                                className={`product-sale ${
                                                                    product.discount !==
                                                                    0
                                                                        ? "sale"
                                                                        : ""
                                                                }`}
                                                            >
                                                                -
                                                                {
                                                                    product.discount
                                                                }
                                                                %
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
                                                                            currency:
                                                                                "VND",
                                                                        }
                                                                    ).format(
                                                                        product.price
                                                                    )}
                                                                </span>
                                                                <span
                                                                    className={`product__price-old ${
                                                                        product.oldPrice ===
                                                                        ""
                                                                            ? "disable"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    {new Intl.NumberFormat(
                                                                        "vi-VN",
                                                                        {
                                                                            style: "currency",
                                                                            currency:
                                                                                "VND",
                                                                        }
                                                                    ).format(
                                                                        product.oldPrice
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div
                                                                onClick={
                                                                    handleOpenModal
                                                                }
                                                                className="hide-on-mobile-tablet"
                                                            >
                                                                <div
                                                                    className="product__add"
                                                                    title="Thêm vào giỏ hàng"
                                                                    onClick={() =>
                                                                        addToCartHandler(
                                                                            product._id
                                                                        )
                                                                    }
                                                                >
                                                                    Thêm vào giỏ
                                                                    hàng
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
