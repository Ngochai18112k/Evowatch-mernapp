import React from "react";
import { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../../actions/orderActions";
import Loader from "../../../components/Loader/Loader";
import Message from "../../../components/Message/Message";
import "../styles/Admin.scss";
import dayjs from "dayjs";

function OrderList({ history }) {
    const dispatch = useDispatch();

    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders());
        } else {
            history.push("/login");
        }
    }, [dispatch, history, userInfo]);

    return (
        <Container>
            <h1>Danh sách đơn hàng</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                    <Table
                        striped
                        bordered
                        hover
                        responsive
                        style={{ fontSize: "14px" }}
                    >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên KH</th>
                                <th>Ngày đặt</th>
                                <th>Tổng tiền</th>
                                <th>Đã thanh toán</th>
                                <th>Đã giao</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.user && order.user.name}</td>
                                    <td>
                                        {dayjs(order.createdAt).format(
                                            "DD/MM/YYYY"
                                        )}
                                    </td>
                                    <td>
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(order.totalPrice)}
                                    </td>
                                    <td>
                                        {order.isPaid ? (
                                            dayjs(order.paidAt).format(
                                                "DD/MM/YYYY"
                                            )
                                        ) : (
                                            <i
                                                className="fas fa-times"
                                                style={{ color: "red" }}
                                            ></i>
                                        )}
                                    </td>
                                    <td>
                                        {order.isDelivered ? (
                                            dayjs(order.deliveredAt).format(
                                                "DD/MM/YYYY"
                                            )
                                        ) : (
                                            <i
                                                className="fas fa-times"
                                                style={{ color: "red" }}
                                            ></i>
                                        )}
                                    </td>
                                    <td>
                                        <LinkContainer
                                            to={`/order/${order._id}`}
                                        >
                                            <Button
                                                variant="success"
                                                className="btn-md"
                                            >
                                                Chi tiết
                                            </Button>
                                        </LinkContainer>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </Container>
    );
}

export default OrderList;
