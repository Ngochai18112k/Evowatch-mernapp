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
    PRODUCT_CREATE_RESET,
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
    PRODUCT_UPDATE_RESET,
    PRODUCT_UPDATE_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productCatsReducer = (state = { cats: [] }, action) => {
    switch (action.type) {
        case PRODUCT_CATS_REQUEST:
            return {
                loading: true,
                cats: [],
            };
        case PRODUCT_CATS_SUCCESS:
            return {
                loading: false,
                cats: action.payload,
            };
        case PRODUCT_CATS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productBrandsReducer = (state = { brands: [] }, action) => {
    switch (action.type) {
        case PRODUCT_BRANDS_REQUEST:
            return {
                loading: true,
                brands: [],
            };
        case PRODUCT_BRANDS_SUCCESS:
            return {
                loading: false,
                brands: action.payload,
            };
        case PRODUCT_BRANDS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productBrandsMenReducer = (state = { brandsMen: [] }, action) => {
    switch (action.type) {
        case PRODUCT_BRANDS_MEN_REQUEST:
            return {
                loading: true,
                brandsMen: [],
            };
        case PRODUCT_BRANDS_MEN_SUCCESS:
            return {
                loading: false,
                brandsMen: action.payload,
            };
        case PRODUCT_BRANDS_MEN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productBrandsWomenReducer = (
    state = { brandsWomen: [] },
    action
) => {
    switch (action.type) {
        case PRODUCT_BRANDS_WOMEN_REQUEST:
            return {
                loading: true,
                brandsWomen: [],
            };
        case PRODUCT_BRANDS_WOMEN_SUCCESS:
            return {
                loading: false,
                brandsWomen: action.payload,
            };
        case PRODUCT_BRANDS_WOMEN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productBrandsExtraReducer = (
    state = { brandsExtra: [] },
    action
) => {
    switch (action.type) {
        case PRODUCT_BRANDS_EXTRA_REQUEST:
            return {
                loading: true,
                brandsExtra: [],
            };
        case PRODUCT_BRANDS_EXTRA_SUCCESS:
            return {
                loading: false,
                brandsExtra: action.payload,
            };
        case PRODUCT_BRANDS_EXTRA_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productNewReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_NEW_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case PRODUCT_NEW_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case PRODUCT_NEW_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return {
                loading: true,
            };
        case PRODUCT_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                product: action.payload,
            };
        case PRODUCT_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case PRODUCT_UPDATE_RESET:
            return { product: {} };
        default:
            return state;
    }
};

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return {
                loading: true,
            };
        case PRODUCT_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        case PRODUCT_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return {
                loading: true,
            };
        case PRODUCT_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                product: action.payload,
            };
        case PRODUCT_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case PRODUCT_CREATE_RESET:
            return {};
        default:
            return state;
    }
};
