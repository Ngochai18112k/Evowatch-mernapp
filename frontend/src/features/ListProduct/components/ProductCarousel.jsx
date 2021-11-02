import React, { useEffect } from "react";
import "../styles/Product.scss";
import ListProductCarousel from "./ListProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../actions/productActions";
import Loader from "../../../components/Loader/Loader";
import Message from "../../../components/Message/Message";

function ProductCarousel({ cat }) {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts({ category: cat }));
    }, [dispatch, cat]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <ListProductCarousel products={products}></ListProductCarousel>
            )}
        </>
    );
}

export default ProductCarousel;
