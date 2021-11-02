import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './MenuLink.scss';

MenuLink.propTypes = {

};

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <div className={match ? "active" : ""}>
            {match && ""}
            <Link className="menu__link" to={to}>{label}</Link>
        </div>
    );
}

export default MenuLink;