import React from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNews, deleteNews, listNews } from "../../../actions/newsActions";
import Loader from "../../../components/Loader/Loader";
import Message from "../../../components/Message/Message";
import { NEWS_CREATE_RESET } from "../../../constants/newsConstants";
import "../styles/Admin.scss";
import Paginate from "../Paginate";
import dayjs from "dayjs";

function NewsList({ history, match }) {
    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const newsList = useSelector((state) => state.newsList);
    const { loading, error, news, page, pages } = newsList;

    const newsCreate = useSelector((state) => state.newsCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        news: createdNews,
    } = newsCreate;

    const newsDelete = useSelector((state) => state.newsDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = newsDelete;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch({ type: NEWS_CREATE_RESET });

        if (!userInfo || !userInfo.isAdmin) {
            history.push("/login");
        }

        if (successCreate) {
            history.push(`/admin/news/${createdNews._id}/edit`);
        } else {
            dispatch(listNews(pageNumber));
        }
    }, [
        dispatch,
        history,
        userInfo,
        successCreate,
        successDelete,
        createdNews,
        pageNumber,
    ]);

    const createNewsHandler = () => {
        dispatch(createNews());
    };

    const deleteHandler = (id) => {
        if (window.confirm("Bạn có thực sự muốn xóa?")) {
            dispatch(deleteNews(id));
        }
    };

    return (
        <Container>
            <Row className="align-items-center">
                <Col>
                    <h1>Danh sách bài viết</h1>
                </Col>
                <Col className="text-right">
                    <Button
                        className="my-3 btn-add"
                        onClick={createNewsHandler}
                    >
                        <i className="fas fa-plus"></i>
                        Thêm mới bài viết
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
                                <th>Tiêu đề</th>
                                <th>Tác giả</th>
                                <th>Ngày đăng</th>
                                <th>Mô tả</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.map((newsitem) => (
                                <tr key={newsitem._id}>
                                    <td>{newsitem._id}</td>
                                    <td>{newsitem.title}</td>
                                    <td>{newsitem.author}</td>
                                    <td>
                                        {dayjs(newsitem.createdAt).format(
                                            "DD/MM/YYYY"
                                        )}
                                    </td>
                                    <td>{newsitem.desc}</td>
                                    <td>
                                        <LinkContainer
                                            to={`/admin/news/${newsitem._id}/edit`}
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
                                                deleteHandler(newsitem._id)
                                            }
                                        >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Paginate pages={pages} page={page} isProduct={false} />
                </>
            )}
        </Container>
    );
}

export default NewsList;
