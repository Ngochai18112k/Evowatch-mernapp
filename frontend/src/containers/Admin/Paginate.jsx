import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./styles/Admin.scss";

function Paginate({ pages, page, isProduct }) {
    return (
        pages > 1 && (
            <Pagination className="paginate-admin">
                {[...Array(pages).keys()].map((x) => (
                    <LinkContainer
                        key={x + 1}
                        to={
                            isProduct
                                ? `/admin/productlist/${x + 1}`
                                : `/admin/newslist/${x + 1}`
                        }
                    >
                        <Pagination.Item active={x + 1 === page}>
                            {x + 1}
                        </Pagination.Item>
                    </LinkContainer>
                ))}
            </Pagination>
        )
    );
}

export default Paginate;
