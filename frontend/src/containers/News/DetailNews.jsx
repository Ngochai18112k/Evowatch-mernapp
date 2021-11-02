import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createNewsReview, listNewsDetails } from "../../actions/newsActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { NEWS_CREATE_REVIEW_RESET } from "../../constants/newsConstants";
import parse from "html-react-parser";
import dayjs from "dayjs";
import "./News.scss";

function DetailNews({ history, match }) {
    const [comment, setComment] = useState("");

    const dispatch = useDispatch();

    const newsDetails = useSelector((state) => state.newsDetails);
    const { loading, error, news } = newsDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const newsReviewCreate = useSelector((state) => state.newsReviewCreate);
    const {
        success: successNewsReview,
        loading: loadingNewsReview,
        error: errorNewsReview,
    } = newsReviewCreate;

    useEffect(() => {
        if (successNewsReview) {
            setComment("");
        }
        if (!news._id || news._id !== match.params.id) {
            dispatch(listNewsDetails(match.params.id));
            dispatch({ type: NEWS_CREATE_REVIEW_RESET });
        }
    }, [dispatch, match, successNewsReview]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createNewsReview(match.params.id, { comment }));
    };

    return (
        <div id="content">
            <div className="container">
                {/* Direct */}
                <div className="row direct">
                    <ul className="direct__list">
                        <li className="direct__item">
                            <Link to="/" className="direct__link">
                                Trang chủ
                            </Link>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <Link to="/news" className="direct__link">
                                Tin tức
                            </Link>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <span className="direct__text">{news.title}</span>
                        </li>
                    </ul>
                </div>

                {/* Content */}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <div className="news__detail">
                        <div className="news__detail-heading">
                            <span>{news.title}</span>
                            <p>
                                ĐĂNG BỞI {news.author} VÀO LÚC{" "}
                                {dayjs(news.createdAt).format("DD/MM/YYYY")}
                            </p>
                        </div>
                        <div className="news__detail-desc">
                            <i>
                                <span>{news.desc}</span>
                            </i>
                            <br></br>
                            <br></br>
                            {parse(`${news.content}`)}
                        </div>
                        <div className="news__detail-act">
                            <div className="like">
                                <img src="/images/icon/Like.png" alt="" />
                            </div>
                            <div className="share1">
                                <img src="/images/icon/Share1.png" alt="" />
                            </div>
                            <div className="share2">
                                <img src="/images/icon/Share2.png" alt="" />
                            </div>
                        </div>
                        <div className="news__detail-view">
                            <div className="tittle">
                                <span>Bạn đang xem: </span>
                                {news.title}
                            </div>
                            <div className="act">
                                <div className="act-prev">
                                    <i class="fas fa-chevron-left"></i>
                                    <span>Bài trước</span>
                                </div>
                                <div className="separator">|</div>
                                <div className="act-next">
                                    <span>Bài sau</span>
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="news__detail-comment">
                            <div className="comment">
                                <div className="comment__tittle">
                                    Bình luận ({news.reviews.length} bình luận)
                                </div>
                                {news.reviews.map((review) => (
                                    <div className="comment__list">
                                        <img src="/images/avatar.png" alt="" />
                                        <div className="comment__body">
                                            <div className="name">
                                                {review.name}
                                            </div>
                                            <div className="time">
                                                {dayjs(review.createdAt).format(
                                                    "DD/MM/YYYY"
                                                )}
                                            </div>
                                            <p>{review.comment}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="form">
                                <div className="form__tittle">
                                    <span>VIẾT BÌNH LUẬN CỦA BẠN</span>
                                    <p>
                                        Địa chỉ email của bạn sẽ được bảo mật.
                                        Các trường bắt buộc được đánh dấu{" "}
                                        <i>*</i>
                                    </p>
                                </div>
                                {successNewsReview && (
                                    <Message variant="success">
                                        Bình luận thành công
                                    </Message>
                                )}
                                {loadingNewsReview && <Loader />}
                                {errorNewsReview && (
                                    <Message variant="danger">
                                        {errorNewsReview}
                                    </Message>
                                )}
                                {userInfo ? (
                                    <form
                                        className="form__group"
                                        onSubmit={submitHandler}
                                    >
                                        <div className="content">
                                            <p>
                                                Nội dung<i>*</i>
                                            </p>
                                            <textarea
                                                placeholder="Nội dung"
                                                value={comment}
                                                onChange={(e) =>
                                                    setComment(e.target.value)
                                                }
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="button"
                                            style={{ float: "right" }}
                                        >
                                            <div
                                                className="btns btn__darkwhite"
                                                title=""
                                            >
                                                GỬI BÌNH LUẬN
                                            </div>
                                        </button>
                                    </form>
                                ) : (
                                    <Message>
                                        Bạn phải{" "}
                                        <Link to="/login">đăng nhập</Link> để
                                        đánh giá bài viết này
                                    </Message>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DetailNews;
