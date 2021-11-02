import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Swiper } from "swiper/core";
import "swiper/swiper-bundle.css";
import { ModalContext } from "../../Contexts/ModalProvider";
import { addToCart } from "../../../actions/cartActions";

function ListProductCarousel({ products }) {
    const { openModal } = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal();
    };

    let history = useHistory();
    function nextPage(p) {
        history.push(`/detailproduct/${p}`);
    }

    const dispatch = useDispatch();

    const addToCartHandler = (id) => {
        dispatch(addToCart(id, 1));
    };

    SwiperCore.use([Navigation, Pagination]);
    useEffect(() => {
        Swiper(".product", {
            slidesPerView: 2,
            spaceBetween: 0,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 4,
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
        <div className="swiper-container product hide-on-tablet">
            <div className="swiper-wrapper">
                {products.map((product, i) => {
                    return (
                        <div
                            className="swiper-slide col-6 col-md-3"
                            key={i}
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                        >
                            <div className="product__card">
                                <Link
                                    to="#"
                                    className="product__link"
                                    onClick={() => nextPage(product._id)}
                                ></Link>
                                <span
                                    className={`product-sale ${
                                        product.discount !== 0 ? "sale" : ""
                                    }`}
                                >
                                    -{product.discount}%
                                </span>
                                <div className="product__img">
                                    <div className="product__img-before">
                                        <img src={`${product.image1}`} alt="" />
                                    </div>
                                    <div className="product__img-after">
                                        <img src={`${product.image2}`} alt="" />
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
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(product.price)}
                                    </span>
                                    <span
                                        className={`product__price-old ${
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
                                <div
                                    onClick={handleOpenModal}
                                    className="hide-on-mobile-tablet"
                                >
                                    <div
                                        className="product__add"
                                        title="Thêm vào giỏ hàng"
                                        onClick={() =>
                                            addToCartHandler(product._id)
                                        }
                                    >
                                        Thêm vào giỏ hàng
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListProductCarousel;
