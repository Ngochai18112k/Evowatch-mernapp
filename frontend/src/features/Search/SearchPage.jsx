import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions/cartActions";
import { listProducts } from "../../actions/productActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import "../../containers/Product/styles/Product.scss";
import { ModalContext } from "../Contexts/ModalProvider";

function SearchPage({ match }) {
    const { openModal } = useContext(ModalContext);
    const handleOpenModal = () => {
        openModal();
    };

    const name = match.params.name || "";

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts({ name }));
    }, [dispatch, name]);

    const addToCartHandler = (id) => {
        dispatch(addToCart(id, 1));
    };

    return (
        <div id="content">
            <div className="container">
                {/* Direct */}
                <div className="row direct">
                    <ul className="direct__list">
                        <li className="direct__item">
                            <Link href="/" className="direct__link">
                                Trang chủ
                            </Link>
                            <i className="fas fa-angle-right"></i>
                        </li>
                        <li className="direct__item">
                            <Link to="/search" className="direct__link">
                                Kết quả tìm kiếm
                            </Link>
                        </li>
                    </ul>
                </div>
                {products.length === 0 ? (
                    <div className="row">
                        <div className="search__title-heading">
                            KHÔNG CÓ KẾT QUẢ TÌM KIẾM PHÙ HỢP
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="search__title-heading">
                            CÓ {products.length} KẾT QUẢ TÌM KIẾM PHÙ HỢP
                        </div>
                    </div>
                )}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <>
                        <div className="row product">
                            {products.map((product) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 product__card">
                                    <Link
                                        className="product__link"
                                        to={`/product/${product._id}`}
                                    ></Link>
                                    <span
                                        className={`product-sale ${
                                            product.discount !== 0 ? "sale" : ""
                                        }`}
                                    >
                                        -{product.discount}%
                                    </span>
                                    <div className="product__img">
                                        <div className="product__img-before">
                                            <img
                                                src={`${product.image1}`}
                                                alt=""
                                            />
                                        </div>
                                        <div className="product__img-after">
                                            <img
                                                src={`${product.image2}`}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <span className="product__desc">
                                        {product.type}
                                    </span>
                                    <span className="product__name">
                                        {product.name}
                                    </span>
                                    <div className="product__price">
                                        <span className="product__price-new">
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(product.price)}
                                        </span>
                                        <span
                                            className={`product__price-old ${
                                                product.oldPrice === 0
                                                    ? "disable"
                                                    : ""
                                            }`}
                                        >
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(product.oldPrice)}
                                        </span>
                                    </div>
                                    <div
                                        onClick={handleOpenModal}
                                        className="hide-on-mobile-tablet"
                                    >
                                        <div
                                            className="product__add"
                                            title="Thêm vào giỏ hàng"
                                            onClick={() =>
                                                addToCartHandler(product._id)
                                            }
                                        >
                                            Thêm vào giỏ hàng
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
