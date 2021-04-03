import React from 'react'

function ItemRap( props : any) {
  const { item , onChange, firstRap } = props
  const firstItem = item.map( (it : any) => it.maCumRap)
  const [isActive , setIsActive ] = React.useState<number>(0)

  React.useEffect(()=>{
    onChange(firstRap)
  },[])

  const renderListCinema = (item : Array<any>) => {
    const handleClick = (index : number , value : string) => ()=>{
      setIsActive(index)
    }

    return(
      item.map((it: any,   index : number) =>{
        return (
          <li className={ isActive === index ? 'address-CGV__item active' : 'address-CGV__item'} onClick={handleClick(index , it.maCumRap)}>
            <img src="./images/aeon-TanPhu.jpg" alt="12"  />
            <div className="CGV__detail ">
              <p className="CGV_name mb-0">
                {it.tenCumRap}
              </p>
              <p className="CGV_ipaddress mb-0">
                {it.diaChi}
              </p>
              <p className="CGV_chitiet" onClick={()=> onChange(it.maCumRap)}>[chi tiết]</p>
            </div>
          </li>
        )
      })
    )
  }
  
  return (
    <ul id="style-2" className="address-CGV scrollbar">
      {renderListCinema(item)}
    </ul>
  )
}

export default ItemRap;
