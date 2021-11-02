import React from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    listProducts,
    createProduct,
    deleteProduct,
} from "../../../actions/productActions";
import Loader from "../../../components/Loader/Loader";
import Message from "../../../components/Message/Message";
import { PRODUCT_CREATE_RESET } from "../../../constants/productConstants";
import "../styles/Admin.scss";
import Paginate from "../Paginate";

function ProductList({ history, match }) {
    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;

    const productCreate = useSelector((state) => state.productCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        product: createdProduct,
    } = productCreate;

    const productDelete = useSelector((state) => state.productDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = productDelete;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET });

        if (!userInfo || !userInfo.isAdmin) {
            history.push("/login");
        }

        if (successCreate) {
            history.push(`/admin/product/${createdProduct._id}/edit`);
        } else {
            dispatch(listProducts({ pageNumber }));
        }
    }, [
        dispatch,
        history,
        userInfo,
        successCreate,
        successDelete,
        createdProduct,
        pageNumber,
    ]);

    const createProductHandler = () => {
        dispatch(createProduct());
    };

    const deleteHandler = (id) => {
        if (window.confirm("Bạn có thực sự muốn xóa?")) {
            dispatch(deleteProduct(id));
        }
    };

    return (
        <Container>
            <Row className="align-items-center">
                <Col>
                    <h1>Danh sách sản phẩm</h1>
                </Col>
                <Col className="text-right">
                    <Button
                        className="my-3 btn-add"
                        onClick={createProductHandler}
                    >
                        <i className="fas fa-plus"></i>
                        Thêm mới sản phẩm
                    </Button>
                </Col>
            </Row>
            {loadingDelete && <Loader />}
            {errorDelete && <Message variant="danger">{errorDelete}</Message>}
            {loadingCreate && <Loader />}
            {errorCreate && <Message variant="danger">{errorCreate}</Message>}
            {successCreate && (
                <Message variant="success">
                    Thêm thành công 1 sản phẩm mới
                </Message>
            )}
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
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Giảm giá</th>
                                <th>Phân loại</th>
                                <th>Nhãn hiệu</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(product.price)}
                                    </td>
                                    <td>{product.discount}%</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td>
                                        <LinkContainer
                                            to={`/admin/product/${product._id}/edit`}
                                        >
                                            <Button
                                                variant="success"
                                                className="btn-md"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant="danger"
                                            className="btn-md"
                                            style={{ marginLeft: "5px" }}
                                            onClick={() =>
                                                deleteHandler(product._id)
                                            }
                                        >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Paginate pages={pages} page={page} isProduct={true} />
                </>
            )}
        </Container>
    );
}

export default ProductList;
