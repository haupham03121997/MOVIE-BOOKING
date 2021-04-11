import React from 'react'

function ItemRap(props: any) {
  const { item, onChange, firstRap } = props;
  let idRap

  if (item.length >= 1) {
    idRap = item[0].cumRapChieu[0].maCumRap
  }

  const [isActive, setIsActive] = React.useState<number>(0)
  const handleChangeTime = (maCumRap: string) => () => {
    onChange(maCumRap)

  }
  const renderListCeima = (item: any) => {
    const handleClick = (index: number, value: string) => () => {
      setIsActive(index)
    }

    return (
      item.length >= 1 &&
      item[0].cumRapChieu.map((item: any, index: number) => {
        return (
          <li key={index} className={isActive === index ? 'address-CGV__item active' : 'address-CGV__item'} onClick={handleClick(index, item.maCumRap)}>
            <img src="/images/aeon-TanPhu.jpg" alt="12" />
            <div className="CGV__detail ">
              <p className="CGV_name mb-0">
                {item.tenCumRap}
              </p>
              <p className="CGV_ipaddress mb-0">
                {item.diaChi}
              </p>
              <p className="CGV_chitiet" onClick={handleChangeTime(item.maCumRap)}>[chi tiết]</p>
            </div>
          </li>
        )
      })


    )
  }


  return (
    <ul id="style-2" className="address-CGV scrollbar">
      {renderListCeima(item)}
    </ul>
  )
}

export default ItemRap;
