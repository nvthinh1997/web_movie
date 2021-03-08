import React, { Component } from "react";
import like from "../images/img/News/icon/like.png";
import comment from "../images/img/News/icon/comment.png";

export default class News extends Component {
  render() {
    return (
      <div className="news" name="test6">
        <div className="news__textTop">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-24h-tab"
                data-toggle="pill"
                href="#pills-24h"
                role="tab"
                aria-controls="pills-24h"
                aria-selected="true"
              >
                Điện Ảnh 24h
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-review-tab"
                data-toggle="pill"
                href="#pills-review"
                role="tab"
                aria-controls="pills-review"
                aria-selected="false"
              >
                Review
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-sale-tab"
                data-toggle="pill"
                href="#pills-sale"
                role="tab"
                aria-controls="pills-sale"
                aria-selected="false"
              >
                Khuyến Mãi
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-24h"
            role="tabpanel"
            aria-labelledby="pills-24h-tab"
          >
            <nav className="navbar">
              <div className="col-12 col-md-6">
                <img
                  ng-if="!checkSmallNews($index, listNews.list.length)"
                  ng-src="https://s3img.vcdn.vn/123phim/2020/07/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988971479.png"
                  className="ng-scope"
                  src="https://s3img.vcdn.vn/123phim/2020/07/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988971479.png"
                />
                <h4>
                  Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm
                  Chiêu
                </h4>
                <p>
                  Sau khi tiết lộ nhân tố đầu tiên là NSND Lê Khanh sẽ tiếp tục
                  tham gia phần tiếp theo của Gái già lắm chiêu với mái tóc được
                  cắt ngắn đầy mạnh mẽ và nam tính. Kaity Nguyễn sẽ là mỹ nhân
                  tiếp theo nối gót hai đàn chị là Diễm My 9X và Ninh Dương Lan
                  Ngọc gia nhập vũ trụ điện ảnh Gái Già Lắm Chiêu.
                </p>
                <div className="news__icon">
                  <div className="news__like">
                    <img className="icon" src={like} alt />
                    <span>1</span>
                  </div>
                  <div className="news__comment">
                    <img className="icon" src={comment} alt />
                    <span>0</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img
                  ng-if="!checkSmallNews($index, listNews.list.length)"
                  ng-src="https://s3img.vcdn.vn/123phim/2020/07/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331487131.png"
                  className="ng-scope"
                  src="https://s3img.vcdn.vn/123phim/2020/07/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331487131.png"
                />
                <h4>
                  5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ
                  Pinocchio
                </h4>
                <p>
                  Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé
                  Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục thế
                  hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy sắc màu
                  nhưng cũng vô cùng mới lạ. Cùng điểm qua 5 lý do khiến bộ phim
                  đặc biệt đến vậy nhé!
                </p>
                <div className="news__icon">
                  <div className="news__like">
                    <img className="icon" src={like} alt />
                    <span>0</span>
                  </div>
                  <div className="news__comment">
                    <img className="icon" src={comment} alt />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </nav>
            <nav className="navbar three-column">
              <div className="col-12 col-md-4">
                <img
                  ng-if="!checkSmallNews($index, listNews.list.length)"
                  ng-src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
                  className="ng-scope"
                  src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
                />
                <h4>TENET công bố ngày khởi chiếu chính thức tại Việt Nam</h4>
                <p>
                  Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông
                  báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các
                  thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.{" "}
                </p>
                <div className="news__icon">
                  <div className="news__like">
                    <img className="icon" src={like} alt />
                    <span>0</span>
                  </div>
                  <div className="news__comment">
                    <img className="icon" src={comment} alt />
                    <span>0</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <img
                  ng-if="!checkSmallNews($index, listNews.list.length)"
                  ng-src="https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg"
                  className="ng-scope"
                  src="https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg"
                />
                <h4>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h4>
                <p>
                  Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô
                  Hình mang đến một góc nhìn mới về hình ảnh những người phụ nữ
                  thời hiện đại. Điều đó được thể hiện qua câu chuyện về hai
                  người phụ nữ cùng hợp sức để vạch mặt tên tội phạm có sở thích
                  bệnh hoạn với phụ nữ.
                </p>
                <div className="news__icon">
                  <div className="news__like">
                    <img className="icon" src={like} alt />
                    <span>0</span>
                  </div>
                  <div className="news__comment">
                    <img className="icon" src={comment} alt />
                    <span>0</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 hotNews">
                <nav className="navbar">
                  <div className="col-12">
                    <img
                      ng-if="checkSmallNews($index, listNews.list.length)"
                      ng-src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png"
                      className="ng-scope"
                      src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png"
                    />
                    <p className="newsTitle ng-binding">
                      Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
                    </p>
                  </div>
                </nav>
                <nav className="navbar">
                  <div className="col-12">
                    <img
                      ng-if="checkSmallNews($index, listNews.list.length)"
                      ng-src="https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518582544.png"
                      className="ng-scope"
                      src="https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518582544.png"
                    />
                    <p className="newsTitle ng-binding">
                      Diễn viên đặc biệt của Bằng Chứng Vô Hình
                    </p>
                  </div>
                </nav>
                <nav className="navbar">
                  <div className="col-12">
                    <img
                      ng-if="checkSmallNews($index, listNews.list.length)"
                      ng-src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png"
                      className="ng-scope"
                      src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png"
                    />
                    <p className="newsTitle ng-binding">
                      Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!
                    </p>
                  </div>
                </nav>
                <nav className="navbar">
                  <div className="col-12">
                    <img
                      ng-if="checkSmallNews($index, listNews.list.length)"
                      ng-src="https://s3img.vcdn.vn/123phim/2020/07/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png"
                      className="ng-scope"
                      src="https://s3img.vcdn.vn/123phim/2020/07/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png"
                    />
                    <p className="newsTitle ng-binding">
                      Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!
                    </p>
                  </div>
                </nav>
              </div>
            </nav>
          </div>
          <div
            className="tab-pane fade"
            id="pills-review"
            role="tabpanel"
            aria-labelledby="pills-review-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="pills-sale"
            role="tabpanel"
            aria-labelledby="pills-sale-tab"
          >
            ...
          </div>
        </div>
        <button>XEM THÊM</button>
      </div>
    );
  }
}
