import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listNews } from "../../actions/newsActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import PaginationNews from "./PaginationNews";
import "./News.scss";

function News({ match }) {
    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const newsList = useSelector((state) => state.newsList);
    const { loading, error, news, pages, page } = newsList;

    useEffect(() => {
        dispatch(listNews(pageNumber));
    }, [dispatch, pageNumber]);

    return (
        <div id="content">
            <div className="banner">
                <img src="/images/evo-blog-banner.jpg" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2"></div>
                        <div className="col-xl-8">
                            <div
                                className="banner__text"
                                style={{ textAlign: "center" }}
                            >
                                <span className="banner__heading">
                                    TẤT CẢ TIN TỨC
                                </span>
                                <span className="banner__desc">
                                    Kiến thức về đồng hồ, thông tin khuyến mãi,
                                    tin tức & sự kiện, hình ảnh, video clip về
                                    đồng hồ đeo tay mới nhất hiện nay, cập nhật
                                    liên tục nhanh và đầy đủ...
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <div className="container">
                    <div className="row">
                        {news.map((newsitem) => {
                            return (
                                <div
                                    className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 news__card"
                                    key={newsitem._id}
                                >
                                    <Link
                                        to={`/news/${newsitem._id}`}
                                        className="news__link"
                                        title={newsitem.title}
                                    >
                                        <div className="news__img">
                                            <img
                                                src={`${newsitem.imgTitle}`}
                                                alt=""
                                            />
                                        </div>
                                        <p className="news__tittle">
                                            {newsitem.title}
                                        </p>
                                        <p className="news__desc">
                                            {newsitem.desc}
                                        </p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <PaginationNews pages={pages} page={page} />
                </div>
            )}
        </div>
    );
}

export default News;
