import React from 'react'
import Loading from '../../../../component/Loading'

const Seat = (props: any) => {
  const { seat } = props;
  const [status, setStatus] = React.useState(false)
  const handleClick = (maGhe: string) => () => {
    setStatus(!status)
  }

  if (seat.daDat) {
    return <div className='chair-booked'> </div>
  }

  if (!seat) {
    return <Loading />
  }

  return (
    <div
      className={`${seat.loaiGhe === 'Thuong' ? 'chair-normal' : 'chair-vip'}` + `${status ? ' chair-selected' : ''}`}
      onClick={handleClick(seat.maGhe)}>
    </div>
  )
}

export default Seat;