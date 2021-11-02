import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listNews } from "../../actions/newsActions";
import "./News.scss";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

function NewsHome() {
    const dispatch = useDispatch();

    const newsList = useSelector((state) => state.newsList);
    const { loading, error, news } = newsList;

    useEffect(() => {
        dispatch(listNews());
    }, [dispatch]);

    return (
        <div className="news">
            <div className="container">
                <div className="tittle">
                    <div className="tittle__heading">
                        <Link to="/news" className="tittle__heading-link">
                            TIN TỨC
                            <strong>EVO WATCH</strong>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <Message variant="danger">{error}</Message>
                    ) : (
                        news.map((newsitem, i) => {
                            return (
                                <div
                                    className={`col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 news__card ${
                                        i > 3 ? "disable" : ""
                                    }`}
                                    key={newsitem._id}
                                >
                                    <Link
                                        to={`/news/${newsitem._id}`}
                                        className="news__link-home"
                                        title={newsitem.tittle}
                                    >
                                        <div className="news__img-home">
                                            <img
                                                src={`${newsitem.imgTitle}`}
                                                alt=""
                                            />
                                        </div>
                                        <p className="news__tittle">
                                            {newsitem.title}
                                        </p>
                                        <p className="news__desc hide-on-mobile">
                                            {newsitem.desc}
                                        </p>
                                    </Link>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewsHome;
