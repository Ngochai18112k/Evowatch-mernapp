import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../components/Message/Message";
import Loader from "../../../components/Loader/Loader";
import FormContainer from "../FormContainer";
import { listNewsDetails, updateNews } from "../../../actions/newsActions";
import { NEWS_UPDATE_RESET } from "../../../constants/newsConstants";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import "../styles/Admin.scss";

function NewsEdit({ match, history }) {
    const newsId = match.params.id;

    const [imgTitle, setImgTitle] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [desc, setDesc] = useState("");
    const [content, setContent] = useState("");
    const [uploading, setUploading] = useState(false);
    const [errorUpload, setErrorUpload] = useState("");

    const dispatch = useDispatch();

    const newsDetails = useSelector((state) => state.newsDetails);
    const { loading, error, news } = newsDetails;

    const newsUpdate = useSelector((state) => state.newsUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = newsUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: NEWS_UPDATE_RESET });
            history.push("/admin/newslist");
        } else {
            if (!news.title || news._id !== newsId) {
                dispatch(listNewsDetails(newsId));
            } else {
                setImgTitle(news.imgTitle);
                setTitle(news.title);
                setAuthor(news.author);
                setDesc(news.desc);
                setContent(news.content);
            }
        }
    }, [dispatch, history, newsId, news, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateNews({
                _id: newsId,
                imgTitle,
                title,
                author,
                desc,
                content,
            })
        );
    };

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };

            const { data } = await axios.post("/api/uploads", formData, config);

            setImgTitle(data);
            setUploading(false);
        } catch (error) {
            setErrorUpload(error.message);
            setUploading(false);
        }
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
                to="/admin/newslist"
                className="btn btn-light my-3"
                style={{ fontSize: "14px" }}
            >
                Trở lại
            </Link>
            <FormContainer>
                <h1>Cập nhật bài viết</h1>
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
                        <Form.Group controlId="imgTitle">
                            <Form.Label>Ảnh bài viết</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập url ảnh bài viết"
                                value={imgTitle}
                                onChange={(e) => setImgTitle(e.target.value)}
                                required
                            ></Form.Control>
                            <Form.File
                                id="image-file"
                                label="Chọn file"
                                custom
                                onChange={uploadFileHandler}
                            ></Form.File>
                            {uploading && <Loader />}
                            {errorUpload && (
                                <Message variant="danger">
                                    {errorUpload}
                                </Message>
                            )}
                        </Form.Group>

                        <Form.Group controlId="title">
                            <Form.Label>Tên bài viết</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tiêu đề bài viết"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="author">
                            <Form.Label>Tên tác giả</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên tác giả"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="desc">
                            <Form.Label>Mô tả bài viết</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập mô tả bài viết"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="content">
                            <Form.Label>Nội dung bài viết</Form.Label>
                            <ReactQuill
                                placeholder="Nhập nội dung bài viết"
                                value={content}
                                onChange={(e) => setContent(e)}
                                theme="snow"
                                modules={modules}
                                formats={formats}
                            />
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

export default NewsEdit;
