import React from "react";
import { Col, Row } from "react-bootstrap";

function FormContainer({ children }) {
    return (
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
                {children}
            </Col>
        </Row>
    );
}

export default FormContainer;
