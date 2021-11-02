import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrder } from "../../../actions/orderActions";
import {
    getUserDetails,
    updateUserProfile,
} from "../../../actions/userActions";
import Loader from "../../../components/Loader/Loader";
import Message from "../../../components/Message/Message";
import { USER_UPDATE_PROFILE_RESET } from "../../../constants/userConstants";
import "../styles/Auth.scss";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

function Account({ location, history }) {
    const [toggle, setToggle] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

    useEffect(() => {
        if (!userInfo) {
            history.push("/login");
        } else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET });
                dispatch(getUserDetails("profile"));
                dispatch(listMyOrder());
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [dispatch, history, userInfo, user, success]);

    const toggleHandler = (index) => {
        setToggle(index);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Mật khẩu phải trùng nhau");
        } else {
            dispatch(
                updateUserProfile({ id: user._id, name, email, password })
            );
        }
    };

    return (
        <div id="login">
            <div className="container">
                <div className="row direct">
                    <ul className="direct__list">
                        <li className="direct__item">
                            <a href="../index.html" className="direct__link">
                                Trang chủ
                            </a>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <span className="direct__text">
                                Trang khách hàng
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-xl-3">
                        <div className="account__left">
                            <div className="heading">TRANG TÀI KHOẢN</div>
                            <div className="hello">
                                Xin chào,{userInfo.name} !
                            </div>
                            <ul className="list">
                                <li
                                    className={`item ${
                                        toggle === 1 ? "active" : ""
                                    }`}
                                >
                                    <Link
                                        to="#"
                                        onClick={() => toggleHandler(1)}
                                    >
                                        Thông tin tài khoản
                                    </Link>
                                </li>
                                <li
                                    className={`item ${
                                        toggle === 2 ? "active" : ""
                                    }`}
                                >
                                    <Link
                                        to="#"
                                        onClick={() => toggleHandler(2)}
                                    >
                                        Đơn hàng của bạn
                                    </Link>
                                </li>
                                <li
                                    className={`item ${
                                        toggle === 3 ? "active" : ""
                                    }`}
                                >
                                    <Link
                                        to="#"
                                        onClick={() => toggleHandler(3)}
                                    >
                                        Cập nhật thông tin tài khoản
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div
                            className={`profile ${
                                toggle === 1 ? "active" : ""
                            }`}
                        >
                            <div className="heading">THÔNG TIN TÀI KHOẢN</div>
                            <ul className="profile__list">
                                <li className="profile__item">
                                    Họ tên: <span>{userInfo.name}</span>
                                </li>
                                <li className="profile__item">
                                    Email: <span>{userInfo.email}</span>
                                </li>
                            </ul>
                        </div>
                        <div
                            className={`orders-my ${
                                toggle === 2 ? "active" : ""
                            }`}
                        >
                            <div className="heading">ĐƠN HÀNG CỦA TÔI</div>
                            {loadingOrders ? (
                                <Loader />
                            ) : errorOrders ? (
                                <Message variant="danger">
                                    {errorOrders}
                                </Message>
                            ) : (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Ngày</th>
                                            <th>Tổng tiền</th>
                                            <th>TT thanh toán</th>
                                            <th>TT vận chuyển</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.length === 0 ? (
                                            <td className="orders__no">
                                                Không có đơn hàng nào
                                            </td>
                                        ) : (
                                            orders.map((order) => (
                                                <tr key={order._id}>
                                                    <td>{order._id}</td>
                                                    <td>
                                                        {dayjs(
                                                            order.createdAt
                                                        ).format("DD/MM/YYYY")}
                                                    </td>
                                                    <td>{order.totalPrice}</td>
                                                    <td>
                                                        {order.isPaid ? (
                                                            dayjs(
                                                                order.paidAt
                                                            ).format(
                                                                "DD/MM/YYYY"
                                                            )
                                                        ) : (
                                                            <i
                                                                className="fas fa-times"
                                                                style={{
                                                                    color: "red",
                                                                }}
                                                            ></i>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {order.isDelivered ? (
                                                            dayjs(
                                                                order.deliveredAt
                                                            ).format(
                                                                "DD/MM/YYYY"
                                                            )
                                                        ) : (
                                                            <i
                                                                className="fas fa-times"
                                                                style={{
                                                                    color: "red",
                                                                }}
                                                            ></i>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to={`/order/${order._id}`}
                                                        >
                                                            <button>
                                                                Details
                                                            </button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            )}
                        </div>
                        <div
                            className={`profile__change ${
                                toggle === 3 ? "active" : ""
                            }`}
                        >
                            <div className="heading">
                                CẬP NHẬT THÔNG TIN TÀI KHOẢN
                            </div>
                            {message && (
                                <Message variant="danger">{message}</Message>
                            )}
                            {success && (
                                <Message variant="success">
                                    Thông tin tài khoản đã được cập nhật
                                </Message>
                            )}
                            {loading ? (
                                <Loader />
                            ) : error ? (
                                <Message variant="danger">{error}</Message>
                            ) : (
                                <form
                                    className="login__form"
                                    onSubmit={submitHandler}
                                >
                                    <div className="login__form-input">
                                        <p className="login__form-text">
                                            NAME
                                            <span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            className="login__form-in"
                                            name="Email"
                                            value={name}
                                            placeholder="Nhập Địa chỉ Email"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            required
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
                                            value={email}
                                            placeholder="Nhập Địa chỉ Email"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
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
                                    <div className="login__form-input">
                                        <p className="login__form-text">
                                            NHẬP LẠI MẬT KHẨU
                                            <span>*</span>
                                        </p>
                                        <input
                                            type="password"
                                            className="login__form-in"
                                            name="Password"
                                            value={password}
                                            placeholder="Nhập Mật khẩu"
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
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
                                            CẬP NHẬT
                                        </div>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
