import React from 'react'
import Lottie from 'react-lottie';
import loading from './loading.json'
import './style.scss'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const Loading = ({ loading }: any) => {


  return (
    <div className="loading">
      <div className="layer">

      </div>
      <Lottie options={defaultOptions} height={400}
        width={400} style={{ marginTop: '10%' }} />

    </div>
  )

}

export default Loading;