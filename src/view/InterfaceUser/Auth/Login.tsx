import React from 'react';
import { useHistory } from 'react-router-dom';
import { debounce } from 'lodash';
import {useDispatch} from 'react-redux';
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';
import {userLogin} from '../../../redux/Action/userAuth';
// import { store } from 'react-notifications-component';
interface values {
  taiKhoan: string,
  matKhau: string
}
export default function Login() {
  const history = useHistory();
  const dispatch  = useDispatch();
  const [values, setValues] = React.useState<values>({
    taiKhoan: '',
    matKhau: ''
  });

  const hanldeOnChane = debounce((e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })

  },500);

  
  const hanldeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // store.addNotification({
    //   title: "Wonderful!",
    //   message: "Configurable",
    //   type: "success",
    //   insert: "top",
    //   container: "bottom-right",
    //   animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
    //   animationOut: ["animate__animated animate__fadeOut"]
    // })  
    dispatch( userLogin(values));
  }
  return (
    <div className="section-login">

      <div className="close" onClick={() => { history.push('/') }}>
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
        <input type="text" placeholder="Vui lòng nhập tài khoản" name="taiKhoan" onChange={hanldeOnChane} />
        <input type="password" placeholder="Vui lòng nhập mật khẩu" name="matKhau" onChange={hanldeOnChane} />
        <button type="submit">Đăng Nhập</button>
      </form>
      <div className="go-signin">
        Bạn chưa có tài khoản? <br />
        <span className="py-3">Đăng ký để trãi nghiệm</span>
      </div>
    </div>
  )
}


