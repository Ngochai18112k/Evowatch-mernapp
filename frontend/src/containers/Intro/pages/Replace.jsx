import React from "react";
import MenuLink from "../../../components/MenuLink/MenuLink";
import "../styles/Intro.scss";

Replace.propTypes = {};

function Replace(props) {
    return (
        <div id="intro">
            <div className="banner">
                <img src="/images/evo-page-banner.jpg" alt="" />
                <p>CHÍNH SÁCH ĐỔI HÀNG</p>
            </div>

            {/* Navblog */}
            <div id="navblog">
                <div className="container">
                    <ul className="navblog__list">
                        <li className="navblog__item">
                            <div className="navblog__link">
                                <MenuLink
                                    to="/intro-replace"
                                    activeOnlyWhenExact={true}
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
                                    activeOnlyWhenExact={false}
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
            <div className="container">
                <div className="intro__text">
                    <p>
                        Chính sách đổi trả hàng nhằm đảm bảo quyền lợi tối đa
                        cho khách hàng khi mua sắm hàng hóa tại Evo Watch, cụ
                        thể như sau:
                    </p>

                    <p>
                        Nhằm đảm bảo quyền lợi người tiêu dùng, nâng cao chất
                        lượng dịch vụ sau bán hàng, Khách hàng được đổi sản phẩm
                        mới cùng loại khi sản phẩm gặp sự cố không thể khắc phục
                        được (do lỗi kỹ thuật của nhà sản xuất). Sản phẩm lỗi
                        chỉ được đổi sau khi đã có xác nhận của kỹ thuật và tuân
                        thủ theo các điều kiện sau đây:
                    </p>

                    <p>
                        - Sản phẩm mới mua trong vòng 01 ngày kể từ ngày xuất
                        bán. Khách hàng mua trực tuyến, thời gian được tính từ
                        ngày khách nhận được sản phẩm;
                    </p>

                    <p>
                        - Hàng hóa được xác định nguồn gốc mua tại Evo Watch
                        (căn cứ vào hóa đơn mua hàng, phiếu bảo hành và tem nhận
                        diện dán trên sản phẩm);
                    </p>

                    <p>
                        - Hàng hóa được xác nhận bị lỗi kỹ thuật của Kỹ thuật
                        viên của Trung Tâm Bảo Hành của Hãng;
                    </p>

                    <p>
                        - Hàng hóa vẫn còn nguyên tem niêm phong (không bị rách
                        vỡ hoặc dán lại) của nhà sản xuất hoặc tem của Evo
                        Watch, phải còn nguyên vẹn vỏ thùng, xốp và đầy đủ các
                        phụ kiện kèm theo, quà khuyến mại (nếu có)…
                    </p>

                    <p>
                        - Hàng hóa nhận lại không bị lỗi hình thức (trầy xước,
                        móp méo, ố vàng, vỡ …)
                    </p>

                    <p>- Hàng hóa nhận lại phải còn đầy đủ linh kiện.</p>

                    <p>
                        - Hàng hóa khi nhận lại phải có đầy đủ các chứng từ kèm
                        theo (Phiếu bảo hành, sách hướng dẫn … )
                    </p>

                    <p>
                        Evo Watch sẽ thực hiện đổi hàng cho khách, nhưng không
                        hoàn lại phí vận chuyển/ giao hàng (nếu có), trừ những
                        trường hợp sau:
                    </p>

                    <p>
                        - Không đúng chủng loại, mẫu mã như quý khách đã đặt
                        hàng.
                    </p>

                    <p>
                        - Không đủ số lượng, không đủ bộ/ thông tin như trong
                        đơn hàng ban đầu.
                    </p>

                    <p>
                        - Không đạt chất lượng như: quá hạn sử dụng, hết bảo
                        hành, không vận hành được, hỏng hóc khách quan trong
                        phạm vi bảo hành của nhà cung cấp, nhà sản xuất,..
                    </p>

                    <p className="intro__text-head">
                        Trường hợp không chấp nhận đổi hoặc trả sản phẩm:
                    </p>

                    <p>
                        - Quý khách muốn thay đổi mẫu mã, chủng loại sản phẩm;
                    </p>

                    <p>- Lỗi do người sử dụng;</p>

                    <p>
                        - Không chấp nhận các lỗi ngoại quan (xước, móp, méo,
                        vỡ, sứt…) khi khách hàng đã mang sản phẩm ra khỏi cửa
                        hàng Công ty;
                    </p>

                    <p>
                        - Quý khách vận hành không đúng chỉ dẫn, gây hỏng hóc
                        sản phẩm, hàng hóa;
                    </p>

                    <p>
                        - Quý khách tự làm ảnh hưởng tình trạng bên ngoài như
                        bong tróc, bể vỡ, …;
                    </p>

                    <p>
                        - Quý khách yêu cầu đổi trả hàng hóa vì lý do sai phạm
                        về hình thức (trầy xước, móp méo, ố vàng, bể vỡ,…) mà
                        khi quý khách mua hàng hóa vẫn còn nguyên vẹn.
                    </p>

                    <p>
                        Chú ý: Khách hàng xem kỹ sản phẩm trước khi mua, sản
                        phẩm đã bán ra không nhập lại. Để đảm bảo cho mọi khách
                        hàng luôn mua được sản phẩm mới.
                    </p>

                    <p className="intro__text-head">
                        Qui trình xử lý thủ tục đổi trả hàng:
                    </p>

                    <p>
                        Khách hàng có thể liên hệ trực tiếp với Trung Tâm Bảo
                        Hành của Hãng hoặc thông qua Phòng Bảo hành của Công ty
                        để thay mặt chuyển hàng hóa đến Hãng để kiểm tra. Sau
                        khi có Giấy Xác Nhận Tình Trạng với nội dung hàng hóa hư
                        hỏng do lỗi kỹ thuật không thể sửa chữa, chấp nhận đổi
                        mới. Việc đổi hàng sẽ được thực hiện theo đúng quy định
                        của Công ty.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Replace;
