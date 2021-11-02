import React, { useContext } from "react";
import "../../styles/Product.scss";
import { Link } from "react-router-dom";
import { ModalContext } from "../../../../features/Contexts/ModalProvider";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../actions/cartActions";

function ListProductPage({ products }) {
    const { openModal } = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal();
    };

    const dispatch = useDispatch();

    const addToCartHandler = (id) => {
        dispatch(addToCart(id, 1));
    };
    return (
        <div className="row product">
            {products.map((product, i) => {
                return (
                    <div
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 product__card"
                        key={i}
                    >
                        <Link
                            to={`/product/${product._id}`}
                            className="product__link"
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
                        <span className="product__desc">{product.type}</span>
                        <span className="product__name">{product.name}</span>
                        <div className="product__price">
                            <span className="product__price-new">
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(product.price)}
                            </span>
                            <span
                                className={`product__price-old ${
                                    product.oldPrice === 0 ? "disable" : ""
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
                                onClick={() => addToCartHandler(product._id)}
                            >
                                Thêm vào giỏ hàng
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListProductPage;
