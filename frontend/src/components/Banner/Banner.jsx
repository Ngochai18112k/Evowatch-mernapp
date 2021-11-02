import React from 'react';
import './Banner.scss';

Banner.propTypes = {

};

function Banner(props) {
    return (
        <div class="banner">
            <img src="" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="banner__text">
                            <span className="banner__heading">NAM</span>
                            <span className="banner__desc">Những sản phẩm đang được "săn lùng" gát gao nhất của Evo Watch và có thể sold out bất cứ lúc nào. Hãy nhanh tay tìm lấy sản phẩm bạn yêu thích.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;