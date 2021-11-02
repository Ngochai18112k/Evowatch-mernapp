import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../actions/cartActions";
import FormContainer from "../Admin/FormContainer";
import CheckoutSteps from "./CheckoutSteps";
import "./styles/Order.scss";

function Shipping({ history }) {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode }));
        history.push("/payment");
    };

    return (
        <FormContainer className="order-container">
            <CheckoutSteps step1 step2 />
            <h1>Giao hàng</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="address">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập địa chỉ"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>Thành phố</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập thành phố"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="postalCode">
                    <Form.Label>Mã bưu điện</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập mã bưu điện"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button
                    type="submit"
                    variant="primary"
                    className="order-button"
                >
                    Tiếp tục
                </Button>
            </Form>
        </FormContainer>
    );
}

export default Shipping;
