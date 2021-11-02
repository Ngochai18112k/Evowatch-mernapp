import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import Message from "../../../components/Message/Message";
import { login } from "../../../actions/userActions";
import "../styles/Auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Login({ location, history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split("=")[1] : "/";

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <div id="login">
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
                            <span className="direct__text">
                                Đăng nhập tài khoản
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-8">
                        <div className="login__tittle">ĐĂNG NHẬP TÀI KHOẢN</div>
                        <div className="login__social">
                            <div className="login__social-link">
                                <img src="/images/icon/fb-btn.svg" alt="" />
                            </div>
                            <div className="login__social-link">
                                <img src="/images/icon/gp-btn.svg" alt="" />
                            </div>
                        </div>
                        {error && <Message variant="danger">{error}</Message>}
                        {loading && <Loader />}
                        <form className="login__form" onSubmit={submitHandler}>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    EMAIL
                                    <span>*</span>
                                </p>
                                <input
                                    type="email"
                                    className="login__form-in"
                                    name="Email"
                                    value={email}
                                    placeholder="Nhập Địa chỉ Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <p className="message-error"></p>
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    MẬT KHẨU
                                    <span>*</span>
                                </p>
                                <input
                                    type="password"
                                    className="login__form-in"
                                    name="Password"
                                    value={password}
                                    placeholder="Nhập Mật khẩu"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                                <p className="message-error"></p>
                            </div>
                            <button className="button" type="submit">
                                <div
                                    className="btns btn__darkwhite login__btn"
                                    title=""
                                >
                                    ĐĂNG NHẬP
                                </div>
                            </button>
                            <Link to="/forget" className="login__form-forget">
                                Quên mật khẩu?
                            </Link>
                            <p className="login__form-end">
                                BẠN CHƯA CÓ TÀI KHOẢN. ĐĂNG KÝ
                                <Link
                                    to={
                                        redirect
                                            ? `/signup?redirect=${redirect}`
                                            : "/signup"
                                    }
                                >
                                    TẠI ĐÂY.
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
