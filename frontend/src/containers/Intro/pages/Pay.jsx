import React from "react";
import MenuLink from "../../../components/MenuLink/MenuLink";
import "../styles/Intro.scss";

Pay.propTypes = {};

function Pay(props) {
    return (
        <div id="intro">
            <div class="banner">
                <img src="/images/evo-page-banner.jpg" alt="" />
                <p>HƯỚNG DẪN THANH TOÁN</p>
            </div>

            {/* Navblog */}
            <div id="navblog">
                <div className="container">
                    <ul className="navblog__list">
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-replace"
                                    activeOnlyWhenExact={false}
                                    label="Chính sách đổi hàng"
                                />
                            </div>
                        </li>
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-faq"
                                    activeOnlyWhenExact={false}
                                    label="FAQ"
                                />
                            </div>
                        </li>
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-pay"
                                    activeOnlyWhenExact={true}
                                    label="Hướng dẫn thanh toán"
                                />
                            </div>
                        </li>
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-ship"
                                    activeOnlyWhenExact={false}
                                    label="Chính sách vận chuyển"
                                />
                            </div>
                        </li>
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-shop"
                                    activeOnlyWhenExact={false}
                                    label="Hệ thống cửa hàng"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Intro */}
            <div class="container">
                <div class="intro__text">
                    <p>
                        Quý khách có thể thanh toán khi mua hàng tại hệ thống
                        cửa hàng ĐĂNG QUANG WATCH hoặc đặt mua hàng Online bằng
                        những cách sau:
                    </p>
                    <br />
                    <p class="intro__text-head">
                        1. Thanh toán tiền mặt tại nhà khi nhận hàng thông qua
                        hình thức giao hàng trực tiếp, chuyển phát nhanh hoặc
                        COD:
                    </p>
                    <p>
                        Khi nhân viên giao hàng giao phát, khách hàng kiểm tra
                        sản phẩm về hình thức đảm bảo, khách hàng nhận hàng và
                        thanh toán trực tiếp cho nhân viên giao hàng theo giá
                        trị tiền trên hóa đơn. Ngoài ra khách hàng không phải
                        thanh toán bất kỳ 1 chi phí nào khác.
                    </p>
                    <p>
                        Đơn giản, An toàn, Không chút rắc rối mà lại an tâm
                        tuyệt đối khi quý khách chọn thanh toán COD tại Evo
                        Watch.
                    </p>
                    <p class="intro__text-head">
                        2. Thanh toán tiền mặt tại cửa hàng:
                    </p>
                    <p>
                        Khách hàng đến cửa hàng tham quan, mua sản phẩm sẽ thanh
                        toán trực tiếp bằng tiền mặt hoặc quẹt thẻ qua POS ngân
                        hàng tại cửa hàng.
                    </p>
                    <p class="intro__text-head">
                        3. Chuyển khoản qua ngân hàng:
                    </p>
                    <p>
                        Nếu địa điểm giao hàng là ngoại thành, ngoại tỉnh nhưng
                        khác với địa điểm thanh toán (trong trường hợp Quý khách
                        gửi quà, gửi hàng cho bạn bè, đối tác …) chúng tôi sẽ
                        thu tiền trước 100% giá trị hàng bằng phương thức chuyển
                        khoản trước khi giao hàng. Khách hàng được miễn phí vận
                        chuyển
                    </p>
                    <p>
                        Khách hàng có thể hoàn toàn yên tâm với hình thức thanh
                        toán này. vì khi chuyển tiền ở ngân hàng , ngân hàng sẽ
                        đưa cho bạn một giấy ủy nhiệm chi trong đó có số tiền và
                        số TK mà bạn chuyển tiền tới, nên các bạn không phải lo
                        lắng mình chuyển tiền rồi mà Evo Watch không chuyển
                        hàng, giấy ủy nhiệm chi đó chính là bằng chứng bạn đã
                        chuyển tiền và ngân hàng mà bạn chuyên tiền có thể làm
                        rõ điều đó cho bạn. Chúng tôi bán hàng luôn đăt chữ tín
                        lên đầu và luôn cố gắng có những chất lượng dịch vụ tốt
                        nhất với khách hàng.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Pay;
