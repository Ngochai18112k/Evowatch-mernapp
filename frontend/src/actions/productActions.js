import axios from "axios";
import {
    PRODUCT_BRANDS_EXTRA_FAIL,
    PRODUCT_BRANDS_EXTRA_REQUEST,
    PRODUCT_BRANDS_EXTRA_SUCCESS,
    PRODUCT_BRANDS_FAIL,
    PRODUCT_BRANDS_MEN_FAIL,
    PRODUCT_BRANDS_MEN_REQUEST,
    PRODUCT_BRANDS_MEN_SUCCESS,
    PRODUCT_BRANDS_REQUEST,
    PRODUCT_BRANDS_SUCCESS,
    PRODUCT_BRANDS_WOMEN_FAIL,
    PRODUCT_BRANDS_WOMEN_REQUEST,
    PRODUCT_BRANDS_WOMEN_SUCCESS,
    PRODUCT_CATS_FAIL,
    PRODUCT_CATS_REQUEST,
    PRODUCT_CATS_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_NEW_FAIL,
    PRODUCT_NEW_REQUEST,
    PRODUCT_NEW_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
} from "../constants/productConstants";
import { logout } from "./userActions";

export const listProducts =
    ({
        name = "",
        category = "",
        brand = "",
        min = 0,
        max = 0,
        pageNumber = "",
    }) =>
    async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST });

            const { data } = await axios.get(
                `/api/products?name=${name}&category=${category}&brand=${brand}&min=${min}&max=${max}&pageNumber=${pageNumber}`
            );

            dispatch({
                type: PRODUCT_LIST_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/products/product/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listCatsProduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_CATS_REQUEST });

        const { data } = await axios.get(`/api/products/list/cats`);

        dispatch({
            type: PRODUCT_CATS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_CATS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listBrandsProduct =
    (category = "") =>
    async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_BRANDS_REQUEST });

            const { data } = await axios.get(
                `/api/products/list/brands?category=${category}`
            );

            dispatch({
                type: PRODUCT_BRANDS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: PRODUCT_BRANDS_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

export const listBrandsMenProduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_BRANDS_MEN_REQUEST });

        const { data } = await axios.get(
            `/api/products/list/brands?category=men`
        );

        dispatch({
            type: PRODUCT_BRANDS_MEN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_BRANDS_MEN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listBrandsWomenProduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_BRANDS_WOMEN_REQUEST });

        const { data } = await axios.get(
            `/api/products/list/brands?category=women`
        );

        dispatch({
            type: PRODUCT_BRANDS_WOMEN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_BRANDS_WOMEN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listBrandsExtraProduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_BRANDS_EXTRA_REQUEST });

        const { data } = await axios.get(
            `/api/products/list/brands?category=extra`
        );

        dispatch({
            type: PRODUCT_BRANDS_EXTRA_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_BRANDS_EXTRA_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listNewProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_NEW_REQUEST });

        const { data } = await axios.get(`/api/products/sort/new`);

        dispatch({
            type: PRODUCT_NEW_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_NEW_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/products/product/${id}`, config);

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized,token failed") {
            dispatch(logout());
        }

        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: message,
        });
    }
};

export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`/api/products`, {}, config);

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized,token failed") {
            dispatch(logout());
        }

        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: message,
        });
    }
};

export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.put(
            `/api/products/product/${product._id}`,
            product,
            config
        );

        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized,token failed") {
            dispatch(logout());
        }

        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: message,
        });
    }
};
