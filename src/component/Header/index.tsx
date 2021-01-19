import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalLogin from '../ModalSignIn/ModalSignIn'
const ModalExample = React.memo((props: any) => {
  const {
    className,
    toogle,
    modal
  } = props;
 
  return (
    <div>
      <Modal isOpen={modal} toggle={toogle} className={className}>
        <ModalHeader toggle={toogle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toogle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toogle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
})
function Header() {
  const [modal, setModal] = React.useState<boolean>(false);
  const toogle = () => {
    setModal(!modal)
  }
  const history = useHistory();

  return (
    <section className="header">
      <ModalExample toogle={toogle} modal={modal} />
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
    
        
            <div className="header__profile__left" onClick={() => history.push('/login')}>
              <img src="./images/avatar.png" alt="profile" />
              <span className="ml-1 mt-2">Đăng Nhập</span>
            </div>
            <div className="header__profile__right" >
              {/* <i className="fa fa-map-marker"></i> */}
              <span>Đăng ký</span>
            </div>
          </div>
        </div>
      </nav>
      <ModalLogin modal={modal} />
    </section>
  )
}
export default Header;