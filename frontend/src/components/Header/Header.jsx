import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { logout } from "../../actions/userActions";
import SearchBox from "../SearchBox/SearchBox";

function Header() {
    const [toggle, setToggle] = useState(false);
    const [toogleNav, setToogleNav] = useState(false);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
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

    const onToggleSearch = () => {
        setToggle(!toggle);
    };

    const handleToogleNav = () => {
        toogleNav ? setToogleNav(false) : setToogleNav(true);
    };

    return (
        <div id="header">
            <div className="container">
                {/* Header__top */}
                <div className="row header__top">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-4 header__home hide-on-mobile-tablet">
                        <span>HOTLINE ĐẶT HÀNG:</span>
                        <Link to="tel:0123456789">0123 456 789</Link>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-4 header__menu show-on-mobile-tablet">
                        <Link to="#" className="header__menu-link">
                            <i
                                className="far fa-bars header__menu-icon"
                                onClick={handleToogleNav}
                            ></i>
                        </Link>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 header__logo">
                        <Link to="/">
                            <img src="/images/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-4">
                        <div className="header__acc">
                            {userInfo && userInfo.isAdmin && (
                                <div className="admin hide-on-mobile-tablet">
                                    <Link to="#">ADMIN</Link>
                                    <ul className="admin__list">
                                        <li className="admin__item">
                                            <Link to="/admin/userList">
                                                KHÁCH HÀNG
                                            </Link>
                                        </li>
                                        <li className="admin__item">
                                            <Link to="/admin/productList">
                                                SẢN PHẨM
                                            </Link>
                                        </li>
                                        <li className="admin__item">
                                            <Link to="/admin/orderList">
                                                ĐƠN HÀNG
                                            </Link>
                                        </li>
                                        <li className="admin__item">
                                            <Link to="/admin/newsList">
                                                BÀI VIẾT
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <div className="account hide-on-mobile-tablet">
                                <Link to="/login">TÀI KHOẢN</Link>
                                {userInfo ? (
                                    <ul className="account__list">
                                        <li className="account__item">
                                            <Link to="/profile">{`XIN CHÀO ${userInfo.name}`}</Link>
                                        </li>
                                        <li
                                            className="account__item"
                                            onClick={logoutHandler}
                                        >
                                            <Link to="#">ĐĂNG XUẤT</Link>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="account__list">
                                        <li className="account__item">
                                            <Link to="/login">ĐĂNG NHẬP</Link>
                                        </li>
                                        <li className="account__item">
                                            <Link to="/signup">ĐĂNG KÍ</Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="header__cart">
                                <Link to="/cart">
                                    <span className="hide-on-mobile-tablet">
                                        GIỎ HÀNG
                                    </span>
                                    <i className="fas fa-cart-arrow-down header__cart-icon">
                                        <span>{indexProducts}</span>
                                    </i>
                                </Link>
                                <div
                                    className={`header__cart-box hide-on-mobile-tablet`}
                                >
                                    {cartItems.length === 0 ? (
                                        <div
                                            className={`header__cart-box-no hide-on-mobile-tablet`}
                                        >
                                            <p>
                                                Không có sản phẩm trong giỏ
                                                hàng.
                                            </p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="header__cart-box-list">
                                                {cartItems.map((item) => {
                                                    return (
                                                        <div className="header__cart-box-item">
                                                            <img
                                                                src={`${item.image1}`}
                                                                alt=""
                                                            />
                                                            <div className="header__cart-box-info">
                                                                <p className="header__cart-box-name"></p>
                                                                <p className="header__cart-box-price">
                                                                    {new Intl.NumberFormat(
                                                                        "vi-VN",
                                                                        {
                                                                            style: "currency",
                                                                            currency:
                                                                                "VND",
                                                                        }
                                                                    ).format(
                                                                        item.price
                                                                    )}
                                                                </p>
                                                                <div className="header__cart-box-quality">
                                                                    <button
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
                                                                        value={
                                                                            item.qty
                                                                        }
                                                                        id="quantity1"
                                                                        name="quantity1"
                                                                    />
                                                                    <button
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
                                                            <div
                                                                className="header__cart-box-close"
                                                                onClick={() =>
                                                                    removeFromCartHandler(
                                                                        item.product
                                                                    )
                                                                }
                                                            >
                                                                <i className="fa fa-times"></i>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="header__cart-box-total">
                                                <span>Tổng cộng:</span>
                                                <span className="header__cart-box-price">
                                                    {totalPrice}
                                                </span>
                                            </div>
                                            <div className="header__cart-box-btn">
                                                <Link
                                                    className="link"
                                                    to={`/login?redirect=shipping`}
                                                >
                                                    THANH TOÁN
                                                </Link>
                                                <Link
                                                    className="link"
                                                    to="/cart"
                                                >
                                                    GIỎ HÀNG
                                                </Link>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="search">
                                <div onClick={onToggleSearch}>
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navbar */}
                <Navbar></Navbar>
            </div>
            {/* Navbar-mobile */}
            <NavbarMobile
                toogleNav={toogleNav}
                handleToogleNav={handleToogleNav}
            ></NavbarMobile>
            {/* Search-box */}
            <Route
                render={({ history }) => (
                    <SearchBox
                        history={history}
                        toogle={toggle}
                        onToggleSearch={onToggleSearch}
                    ></SearchBox>
                )}
            />
        </div>
    );
}

export default Header;
