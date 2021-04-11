import React from 'react'
import { Modal, Button, Space } from 'antd';

const MyModal = (props: any) => {
  const { isModalVisible } = props;

  return (
    <Modal title="" visible={true} footer={null} width={800}>
      <p>Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời gian 5 phút. <span onClick={() => window.location.reload()}>Đặt lại</span></p>

    </Modal>
  )
}

export default MyModal;
