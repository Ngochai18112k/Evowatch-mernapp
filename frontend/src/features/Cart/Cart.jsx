import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import "./Cart.scss";

function Cart({ history }) {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        history.push("/login?redirect=shipping");
    };

    const indexProducts = cartItems.reduce((acc, item) => acc + item.qty, 0);

    const totalPrice = cartItems
        .reduce((acc, item) => acc + item.qty * item.price, 0)
        .toLocaleString("it-IT", { style: "currency", currency: "VND" });

    const plusQty = (id) => {
        cartItems.forEach((item) => {
            if (item.product === id) {
                item.qty += 1;

                dispatch(addToCart(item.product, item.qty));
            }
        });
    };

    const minusQty = (id) => {
        cartItems.forEach((item) => {
            if (item.product === id) {
                item.qty === 1 ? (item.qty = 1) : (item.qty -= 1);

                dispatch(addToCart(item.product, item.qty));
            }
        });
    };

    return (
        <div id="content">
            {/* Direct */}
            <div className="container">
                <div className="row direct">
                    <ul className="direct__list">
                        <li className="direct__item">
                            <Link to="/" className="direct__link">
                                Trang chủ
                            </Link>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <span className="direct__text">Giỏ hàng</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Cart */}
            <div id="cart">
                <div className="container">
                    <p className="cart__tittle">
                        GIỎ HÀNG
                        <span>
                            (
                            <span className="cart__tittle-count">
                                {indexProducts}
                            </span>{" "}
                            sản phẩm)
                        </span>
                    </p>
                    {cartItems.length === 0 ? (
                        <div className="row">
                            <div className="cart__empty">
                                <img src="/images/empty-cart.png" alt="" />
                                <div className="button">
                                    <Link to="/" className="btns btn__dark">
                                        TIẾP TỤC MUA SẮM
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="cart__item">
                            <div className="row">
                                <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                    {cartItems.map((item) => {
                                        return (
                                            <div
                                                className="row cart__product"
                                                key={item.product}
                                            >
                                                <div className="col-xl-offset-3 col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-offset-3">
                                                    <Link
                                                        to={`/product/${item.product}`}
                                                        title={item.name}
                                                    >
                                                        <img
                                                            src={`${item.image1}`}
                                                            alt=""
                                                            className="cart__item-img"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="col-xl-offset-9 col-lg-offset-9 col-md-offset-9 col-sm-offset-9 col-offset-9 card__box">
                                                    <div className="cart__info">
                                                        <p className="cart__info-name">
                                                            <Link
                                                                to={`/product/${item.product}`}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </p>
                                                        <p className="cart__info-action">
                                                            <Link
                                                                onClick={() =>
                                                                    removeFromCartHandler(
                                                                        item.product
                                                                    )
                                                                }
                                                            >
                                                                Xóa
                                                            </Link>
                                                        </p>
                                                    </div>
                                                    <span className="cart__price">
                                                        {new Intl.NumberFormat(
                                                            "vi-VN",
                                                            {
                                                                style: "currency",
                                                                currency: "VND",
                                                            }
                                                        ).format(item.price)}
                                                    </span>
                                                    <div className="cart__quality">
                                                        <button
                                                            className="cart__quality-btn math"
                                                            onClick={() =>
                                                                plusQty(
                                                                    item.product
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="cart__quality-btn num"
                                                            value={item.qty}
                                                            name="quality"
                                                            id="quality"
                                                        />
                                                        <button
                                                            className="cart__quality-btn math"
                                                            onClick={() =>
                                                                minusQty(
                                                                    item.product
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="col-xl-3">
                                    <div className="cart__submit">
                                        <p className="cart__submit-fee">
                                            <span className="cart__fee-text">
                                                Tạm tính:
                                            </span>
                                            <span className="cart__fee-price">
                                                {totalPrice}
                                            </span>
                                        </p>
                                        <p className="cart__submit-total">
                                            <span className="cart__total-text">
                                                Thành tiền:
                                            </span>
                                            <span className="cart__total-price">
                                                {totalPrice}
                                            </span>
                                        </p>
                                        <div className="button">
                                            <div
                                                className="btns btn__darkwhite"
                                                style={{ width: "100%" }}
                                                title="Thanh toán ngay"
                                                onClick={checkoutHandler}
                                            >
                                                THANH TOÁN NGAY
                                            </div>
                                        </div>
                                        <br />
                                        <div className="button">
                                            <Link
                                                to="/"
                                                className="btns btn__whitedark"
                                                style={{ width: "100%" }}
                                                title="Tiếp tục mua hàng"
                                            >
                                                TIẾP TỤC MUA HÀNG
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
