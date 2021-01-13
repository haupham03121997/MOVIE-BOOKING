import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section className="header">
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
            <li className="nav-item active">
              <a className="nav-link" href="#lichchieu">Lịch Chiếu <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cumrap">Cụm rạp</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tintuc">Tin Tức</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ungdung">Ứng Dụng</a>
            </li>
          </ul>
          <div className="header__profile">
            <div className="header__profile__left">
              <img src="./images/profile.jpg" alt="profile" />
              <span className="ml-1">DT Thúy Uyên</span>
              <div className="logOut">
                Đăng Xuất
              </div>
            </div>
            <div className="header__profile__right">
            <i className="fa fa-map-marker"></i>
              <span>Hồ Chí Minh</span>
            </div>
          </div>
        </div>
      </nav>

    </section>
  )
}
export default Header;