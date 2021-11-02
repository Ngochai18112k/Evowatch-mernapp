import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listNewProducts } from '../../../actions/productActions';
import ListProductNew from './ListProductNew';
import Loader from '../../../components/Loader/Loader';
import Message from '../../../components/Message/Message';

function ProductNew({ match }) {
    const dispatch = useDispatch();

    const productNew = useSelector((state) => state.productNew);
    const { loading, error, products } = productNew;

    useEffect(() => {
        dispatch(listNewProducts());
    }, [dispatch]);

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <ListProductNew products={products}></ListProductNew>
                )
            }
        </>
    );
}

export default ProductNew;