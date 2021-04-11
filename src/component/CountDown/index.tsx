
import React from 'react'
import MyModal from '../MyModal'

const CountDown = (props: any) => {
  const { end } = props
  const [duration, setDuration] = React.useState<any>(null)
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false)
  const [second, setSecond] = React.useState<any>('0')
  const [minites, setMinutes] = React.useState<any>('0')

  React.useEffect(() => {
    const now = new Date().getTime()
    const interval = setInterval(() => {
      const duration = end - now
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
      const second = Math.floor((duration % (1000 * 60)) / 1000)

      if (duration >= 0) {
        setDuration(duration)
        setSecond(second)
        setMinutes(minutes)
      } else {
        clearInterval(interval)
        setDuration(0)
        setIsModalVisible(true)
      }

    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [duration])


  if (isModalVisible) {
    return (<MyModal />)
  }

  return (
    <div className="countdown" style={{ color: 'red', fontSize: '30px', fontWeight: 700 }}>
      { minites > 9 ? minites : '0' + minites + ': ' + `${second >= 10 ? second : '0' + second}`}
    </div>
  )
}

export default CountDown;