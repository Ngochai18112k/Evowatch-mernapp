import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ModalContext } from "../../features/Contexts/ModalProvider";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import "./Modal.scss";

function Modal({ history }) {
    const [toogle, setToogle] = useState(false);
    const { closeModal } = useContext(ModalContext);

    const onToogle = () => {
        setToogle(true);
        const closeTimeout = setTimeout(() => {
            closeModal();
            clearTimeout(closeTimeout);
        }, 300);
    };

    const nextPage = (id) => {
        history.push(`/product/${id}`);
    };

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
        <div id="modal" className={`${toogle ? "" : "active"}`}>
            <div className="modal__overlay" onClick={onToogle}></div>
            <div className="modal__body hide-on-mobile-tablet">
                <div className="modal__body-tittle">
                    <p>BẠN ĐÃ THÊM 1 SẢn PHẨM VÀO GIỎ HÀNG</p>
                </div>
                <div className="modal__body-noti">
                    <div>GIỎ HÀNG CỦA BẠN CÓ {indexProducts} SẢN PHẨM</div>
                </div>
                <div className="modal__body-product">
                    <div className="body__product-text">
                        <div className="body__product-text50">Sản phẩm</div>
                        <div className="body__product-text15">Đơn giá</div>
                        <div className="body__product-text15">Số lượng</div>
                        <div className="body__product-text15">Thành tiền</div>
                    </div>
                    {cartItems.map((item) => {
                        return (
                            <div
                                className="body__product-price"
                                key={item.product}
                            >
                                <div className="body__product-55">
                                    <div
                                        className="body__product-img"
                                        onClick={() => nextPage(item.product)}
                                    >
                                        <img src={`${item.image1}`} alt="" />
                                    </div>
                                    <div className="body__product-info">
                                        <p className="body__product-name">
                                            {item.name}
                                        </p>
                                        <p
                                            className="body__product-close"
                                            onClick={() =>
                                                removeFromCartHandler(
                                                    item.product
                                                )
                                            }
                                        >
                                            <i className="fas fa-times"></i>
                                            Bỏ sản phẩm
                                        </p>
                                        <p className="body__product-add">
                                            <i className="fa fa-check"></i>
                                            Sản phẩm vừa thêm!
                                        </p>
                                    </div>
                                </div>
                                <div className="body__product-15">
                                    {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(item.price)}
                                </div>
                                <div className="body__product-15">
                                    <div className="body__quality">
                                        <button
                                            className="body__product-quality math"
                                            onClick={() =>
                                                minusQty(item.product)
                                            }
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            className="body__product-quality num"
                                            value={item.qty}
                                            defaultValue
                                            name="quality"
                                        />
                                        <button
                                            className="body__product-quality math"
                                            onClick={() =>
                                                plusQty(item.product)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="body__product-15">
                                    {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(item.price * item.qty)}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="modal__body-foot">
                    <Link to="#" onClick={onToogle}>
                        <i className="fas fa-caret-left"></i>
                        Tiếp tục mua hàng
                    </Link>
                    <p>
                        Thành tiền:
                        <span>{totalPrice}</span>
                    </p>
                </div>
                {/* Btn */}
                <div className="button">
                    <Link
                        className="modal__body-btn"
                        to="/login?redirect=shipping"
                        onClick={onToogle}
                    >
                        THANH TOÁN ĐƠN HÀNG
                    </Link>
                </div>
                <div className={`modal__close`} onClick={onToogle}>
                    <i className="fa fa-times"></i>
                </div>
            </div>
            <div className="modal__body-mobile show-on-mobile-tablet">
                <div className="modal__title-mobile">
                    <div className="icon">
                        <i className="fa fa-check"></i>
                    </div>
                    <span>Thêm vào giỏ hàng thành công</span>
                    <i className="fa fa-times close" onClick={onToogle}></i>
                </div>
                {cartItems.map((item) => {
                    return (
                        <div
                            className="modal__product-mobile"
                            key={item.product}
                        >
                            <img src={`${item.image1}`} alt="" />
                            <div className="info">
                                <div className="name">{item.name}</div>
                                <div className="price">{item.price}₫</div>
                            </div>
                        </div>
                    );
                })}
                <div className="modal__footer-mobile">
                    <div className="button">
                        <Link
                            to={`/login?redirect=shipping`}
                            className="btns btn__darkwhite"
                            style={{ width: "100%" }}
                            title="Thanh toán ngay"
                        >
                            THANH TOÁN NGAY
                        </Link>
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
    );
}

export default Modal;
