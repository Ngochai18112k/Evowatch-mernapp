import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.scss';

Forget.propTypes = {

};

function Forget(props) {
    return (
        <div id="login">
            <div class="container">
                <div class="row direct">
                    <ul class="direct__list">
                        <li class="direct__item">
                            <Link to="/" class="direct__link">Trang chủ</Link>
                            <i class="fas fa-angle-right"></i>
                        </li>
                        <li class="direct__item">
                            <span class="direct__text">Quên mật khẩu</span>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-xl-2"></div>
                    <div class="col-xl-8">
                        <div class="login__tittle">ĐẶT LẠI MẬT KHẨU</div>
                        <div class="login__desc">Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</div>
                        <div class="login__form">
                            <div class="login__form-input">
                                <p class="login__form-text">
                                    EMAIL
                                    <span>*</span>
                                </p>
                                <input type="email" class="login__form-in" placeholder="Nhập Địa chỉ Email" required />
                            </div>
                            <div class="button">
                                <Link to="/product" class="btns btn__darkwhite login__btn" title="Xem tất cả Sản phẩm mới">LẤY LẠI MẬT KHẨU</Link>
                            </div>
                            <p class="login__form-end">
                                QUAY LẠI
                                <Link to="/login">TẠI ĐÂY.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forget;