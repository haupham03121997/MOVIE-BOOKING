import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../../redux/Action/userAuth';

interface InitialValue {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  hoTen: string;
}
export default function Register() {
  const dispatch = useDispatch();
  const hanldeSubmit = (value: InitialValue) => {
      
    
    dispatch(userRegister(value));
  }
  return (
    <div className="section-register">
      <div className="logo-register" >
        <img src="/images/group2x.png" alt="logo" />
      </div>
      <div className="register__message">
        Đăng ký thành viên
      </div>
      <Formik initialValues={{
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: "",
      }}
        onSubmit={hanldeSubmit}
      >
        {props => (
          <Form>
            <Field type="text" placeholder="Tài khoản" name="taiKhoan" onChange={props.handleChange} />
            <Field type="text" placeholder="Mật khẩu" name="matKhau" onChange={props.handleChange} />
            <Field type="text" placeholder="Email" name="email" onChange={props.handleChange} />
            <Field type="text" placeholder="Họ tên" name="hoTen" onChange={props.handleChange} />
            <Field type="tel" placeholder="Số điện thoại" name="soDt" onChange={props.handleChange} />
            <select className="select_register" name="maNhom" onChange={props.handleChange}>
              <option value="GP01">GP01</option>
              <option value="GP02">GP02</option>
              <option value="GP03">GP03</option>
              <option value="GP04">GP04</option>
              <option value="GP05">GP05</option>
              <option value="GP06">GP06</option>
              <option value="GP07">GP07</option>
              <option value="GP08">GP08</option>
              <option value="GP09">GP09</option>
              <option value="GP10">GP10</option>
            </select>
            <button type="submit">Đăng Ký</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
