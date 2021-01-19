import React from 'react';
import { useHistory } from 'react-router-dom';

import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';
import { store } from 'react-notifications-component';
export default function Login() {
  const history = useHistory();
  const hanldeSubmit = (e : React.FormEvent)=>{
    e.preventDefault();
    store.addNotification({
      title: "Wonderful!",
      message: "Configurable",
      type: "success",
      insert: "top",
      container: "bottom-right",
      animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
      animationOut: ["animate__animated animate__fadeOut"]
    })  
  }
  return (
    <div className="section-login">
     
      <div className="close" onClick={()=>{ history.push('/')}}>
        <img className="img-close" src="/images/close.png" alt="close" />
      </div>
      <div className="logo" >
        <img src="/images/group2x.png" alt="logo" />
      </div>
      <div className="signin--message">
        Đăng nhập để được nhiều ưu đãi, mua vé
      < br />
          và bảo mật thông tin!
      </div>
      <form onSubmit={hanldeSubmit}>
        <input type="text" placeholder="Vui lòng nhập tài khoản" />
        <input type="password" placeholder="Vui lòng nhập mật khẩu" />
        <button type="submit">Đăng Nhập</button>
      </form>
      <div className="go-signin">
        Bạn chưa có tài khoản? <br />
        <span>Đăng ký để trãi nghiệm</span>
      </div>
    </div>
  )
}


