import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../components/Message/Message";
import Loader from "../../../components/Loader/Loader";
import FormContainer from "../FormContainer";
import {
    listProductDetails,
    updateProduct,
} from "../../../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../../../constants/productConstants";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/Admin.scss";

function ProductEdit({ match, history }) {
    const productId = match.params.id;

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [brand, setBrand] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [inStock, setInStock] = useState(true);
    const [desc, setDesc] = useState("");
    const [intro, setIntro] = useState("");
    const [uploading1, setUploading1] = useState(false);
    const [uploading2, setUploading2] = useState(false);
    const [uploading3, setUploading3] = useState(false);
    const [errorUpload1, setErrorUpload1] = useState("");
    const [errorUpload2, setErrorUpload2] = useState("");
    const [errorUpload3, setErrorUpload3] = useState("");

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const productUpdate = useSelector((state) => state.productUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = productUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET });
            history.push("/admin/productlist");
        } else {
            if (!product.name || product._id !== productId) {
                dispatch(listProductDetails(productId));
            } else {
                setName(product.name);
                setPrice(product.price);
                setOldPrice(product.oldPrice);
                setDiscount(product.discount);
                setImage1(product.image1);
                setImage2(product.image2);
                setImage3(product.image3);
                setBrand(product.brand);
                setType(product.type);
                setCategory(product.category);
                setInStock(product.inStock);
                setDesc(product.desc);
                setIntro(product.intro);
            }
        }
    }, [dispatch, history, productId, product, successUpdate]);

    const uploadFileHandler1 = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        setUploading1(true);

        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };

            const { data } = await axios.post("/api/uploads", formData, config);

            setImage1(data);
            setUploading1(false);
        } catch (error) {
            setErrorUpload1(error.message);
            setUploading1(false);
        }
    };
    const uploadFileHandler2 = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        setUploading2(true);

        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };

            const { data } = await axios.post("/api/uploads", formData, config);

            setImage2(data);
            setUploading2(false);
        } catch (error) {
            setErrorUpload2(error.message);
            setUploading2(false);
        }
    };
    const uploadFileHandler3 = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        setUploading3(true);

        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };

            const { data } = await axios.post("/api/uploads", formData, config);

            setImage3(data);
            setUploading3(false);
        } catch (error) {
            setErrorUpload3(error.message);
            setUploading3(false);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({
                _id: productId,
                name,
                price,
                oldPrice,
                discount,
                image1,
                image2,
                image3,
                brand,
                type,
                category,
                desc,
                intro,
                inStock,
            })
        );
    };

    const modules = {
        toolbar: [
            [
                { header: "1" },
                { header: "2" },
                { header: [3, 4, 5, 6] },
                { font: [] },
            ],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],
        ],
        clipboard: {
            matchVisual: false,
        },
    };

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
    ];

    return (
        <Container>
            <Link
                to="/admin/productlist"
                className="btn btn-light my-3"
                style={{ fontSize: "14px" }}
            >
                Trở lại
            </Link>
            <FormContainer>
                <h1>Cập nhật sản phẩm</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && (
                    <Message variant="danger">{errorUpdate}</Message>
                )}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="name">
                            <Form.Label>Tên sản phẩm</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Nhập tên sản phẩm"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Giá sản phẩm</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Nhập giá sản phẩm"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="oldPrice">
                            <Form.Label>Giá cũ sản phẩm</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Nhập giá cũ sản phẩm"
                                value={oldPrice}
                                onChange={(e) => setOldPrice(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="discount">
                            <Form.Label>Giảm giá</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Nhập giảm giá"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="image1">
                            <Form.Label>Ảnh sản phẩm 1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập url ảnh sản phẩm 1"
                                value={image1}
                                onChange={(e) => setImage1(e.target.value)}
                                required
                            ></Form.Control>
                            <Form.File
                                id="image1-file"
                                label="Chọn file"
                                custom
                                onChange={uploadFileHandler1}
                            ></Form.File>
                            {uploading1 && <Loader />}
                            {errorUpload1 && (
                                <Message variant="danger">
                                    {errorUpload1}
                                </Message>
                            )}
                        </Form.Group>

                        <Form.Group controlId="image2">
                            <Form.Label>Ảnh sản phẩm 2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập url ảnh sản phẩm 2"
                                value={image2}
                                onChange={(e) => setImage2(e.target.value)}
                                required
                            ></Form.Control>
                            <Form.File
                                id="image2-file"
                                label="Chọn file"
                                custom
                                onChange={uploadFileHandler2}
                            ></Form.File>
                            {uploading2 && <Loader />}
                            {errorUpload2 && (
                                <Message variant="danger">
                                    {errorUpload2}
                                </Message>
                            )}
                        </Form.Group>

                        <Form.Group controlId="image3">
                            <Form.Label>Ảnh sản phẩm 3</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập url ảnh sản phẩm 3"
                                value={image3}
                                onChange={(e) => setImage3(e.target.value)}
                            ></Form.Control>
                            <Form.File
                                id="image3-file"
                                label="Chọn file"
                                custom
                                onChange={uploadFileHandler3}
                            ></Form.File>
                            {uploading3 && <Loader />}
                            {errorUpload3 && (
                                <Message variant="danger">
                                    {errorUpload3}
                                </Message>
                            )}
                        </Form.Group>

                        <Form.Group controlId="brand">
                            <Form.Label>Nhãn hiệu</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập nhãn hiệu"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="type">
                            <Form.Label>Kiểu sản phẩm</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập kiểu sản phẩm"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="category">
                            <Form.Label>Chọn loại sản phẩm</Form.Label>
                            <Form.Control
                                as="select"
                                size="lg"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">
                                    Chọn 1 trong các loại sản phẩm
                                </option>
                                <option value="men">Nam</option>
                                <option value="women">Nữ</option>
                                <option value="extra">Phụ kiện</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="inStock">
                            <Form.Check
                                type="checkbox"
                                inline
                                label="Còn hàng"
                                checked={inStock}
                                onChange={(e) => setInStock(e.target.checked)}
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Mô tả sản phẩm</Form.Label>
                            <ReactQuill
                                placeholder="Nhập mô tả sản phẩm"
                                value={desc}
                                onChange={(e) => setDesc(e)}
                                theme="snow"
                                modules={modules}
                                formats={formats}
                            />
                        </Form.Group>

                        <Form.Group controlId="introduction">
                            <Form.Label>Giới thiệu sản phẩm</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập giới thiệu sản phẩm"
                                value={intro}
                                onChange={(e) => setIntro(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Button type="submit" variant="primary" size="lg">
                            Cập nhật
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </Container>
    );
}

export default ProductEdit;
