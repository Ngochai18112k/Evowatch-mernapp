import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import Message from "../../../components/Message/Message";
import { register } from "../../../actions/userActions";
import "../styles/Auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function SignUp({ location, history }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const redirect = location.search ? location.search.split("=")[1] : "/";

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Mật khẩu phải trùng nhau");
        } else {
            dispatch(register(name, email, password));
        }
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
                                Đăng ký tài khoản
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6">
                        <div className="login__tittle">ĐĂNG KÝ TÀI KHOẢN</div>
                        <div className="login__desc">
                            Nếu chưa có tài khoản vui lòng đăng ký tại đây
                        </div>
                        <div className="login__social">
                            <Link to="/" className="login__social-link">
                                <img src="/images/icon/fb-btn.svg" alt="" />
                            </Link>
                            <Link to="/" className="login__social-link">
                                <img src="/images/icon/gp-btn.svg" alt="" />
                            </Link>
                        </div>
                        {message && (
                            <Message variant="danger">{message}</Message>
                        )}
                        {error && <Message variant="danger">{error}</Message>}
                        {loading && <Loader />}
                        <form className="login__form" onSubmit={submitHandler}>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    HỌ & TÊN
                                    <span>*</span>
                                </p>
                                <input
                                    type="text"
                                    className="login__form-in"
                                    name="FullName"
                                    placeholder="Nhập Họ"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <p className="message-error"></p>
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    SỐ ĐIỆN THOẠI
                                </p>
                                <input
                                    type="text"
                                    className="login__form-in"
                                    name="Phone"
                                    placeholder="Nhập Số điện thoại"
                                />
                                <p className="message-error"></p>
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    EMAIL
                                    <span>*</span>
                                </p>
                                <input
                                    type="email"
                                    className="login__form-in"
                                    name="Email"
                                    placeholder="Nhập Địa chỉ Email"
                                    value={email}
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
                                    placeholder="Nhập Mật khẩu"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                                <p className="message-error"></p>
                            </div>
                            <div className="login__form-input">
                                <p className="login__form-text">
                                    NHẬP LẠI MẬT KHẨU
                                    <span>*</span>
                                </p>
                                <input
                                    type="password"
                                    className="login__form-in"
                                    name="ConfirmPassword"
                                    placeholder="Nhập Lại Mật khẩu"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    required
                                />
                                <p className="message-error"></p>
                            </div>
                            <button className="button">
                                <div className="btns btn__darkwhite login__btn">
                                    ĐĂNG KÝ
                                </div>
                            </button>
                            <Link
                                to={
                                    redirect
                                        ? `/login?redirect=${redirect}`
                                        : "/login"
                                }
                                className="login__form-forget"
                            >
                                ĐĂNG NHẬP
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
