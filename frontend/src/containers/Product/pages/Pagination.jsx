import React from "react";
import "../styles/Pagination.scss";
import { Link, useHistory } from "react-router-dom";

function Pagination({ pages, page, getFilterUrl }) {
    const history = useHistory();

    const pagePrev = () => {
        history.push(getFilterUrl({ page: page - 1 }));
    };

    const pageNext = () => {
        history.push(getFilterUrl({ page: page + 1 }));
    };

    return (
        pages > 1 && (
            <div className="pagination">
                <ul className="pagination__list">
                    <li
                        className={`pagination__item ${
                            page === 1 ? "disable" : ""
                        }`}
                        onClick={pagePrev}
                    >
                        <div className="pagination__link">&laquo;</div>
                    </li>
                    {[...Array(pages).keys()].map((x) => (
                        <li
                            key={x + 1}
                            className={`pagination__item ${
                                x + 1 === page ? "active" : ""
                            }`}
                        >
                            <Link
                                key={x + 1}
                                to={getFilterUrl({ page: x + 1 })}
                            >
                                <div className="pagination__link">{x + 1}</div>
                            </Link>
                        </li>
                    ))}
                    <li
                        className={`pagination__item ${
                            page > 1 ? "disable" : ""
                        }`}
                        onClick={pageNext}
                    >
                        <div className="pagination__link">&raquo;</div>
                    </li>
                </ul>
            </div>
        )
    );
}

export default Pagination;
