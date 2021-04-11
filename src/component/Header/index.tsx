import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import get from 'lodash/get';

function Header() {
  const history = useHistory();
  const getHistory = get(history, 'location.hash', '')
  const [isScroll, setIsScroll] = React.useState<boolean>(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 40) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  })



  return (
    <section className="header-scroll">
      <nav className="navbar navbar--custom navbar-expand-md">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" />
          </span>F
        </button>
        <div className="collapse navbar-collapse navbar-collapse--custom" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className={getHistory === '' || getHistory === '#lichchieu' ? 'nav-link active' : 'nav-link'} href="#lichchieu">Lịch Chiếu <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item ">
              <a className={getHistory === '#cumrap' ? 'nav-link active' : 'nav-link'} href="#cumrap">Cụm rạp</a>
            </li>
            <li className="nav-item">
              <a className={getHistory === '#tintuc' ? 'nav-link active' : 'nav-link'} href="#tintuc">Tin Tức</a>
            </li>
            <li className="nav-item">
              <a className={getHistory === '#ungdung' ? 'nav-link active' : 'nav-link'} href="#ungdung">Ứng Dụng</a>
            </li>
          </ul>
          <div className="header__profile">
            <div className="header__profile__left" onClick={() => history.push('/login')}>
              <img src="/images/avatar.png" alt="profile" />
              <span className="ml-1 mt-2">Đăng Nhập</span>
            </div>
            <div className="header__profile__right" >
              <span>Đăng ký</span>
            </div>
            {/* <div className="logined">
            <img src="./images/avatar.png" alt="profile" />
            <span>Chào mừng, Phạm Xuân Hậu</span>
            </div> */}
          </div>

        </div>
      </nav>
    </section>
  )
}

export default Header;