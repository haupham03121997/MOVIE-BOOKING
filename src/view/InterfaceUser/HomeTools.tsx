import React from 'react';

function HomeTools() {
  return (
    <section className="section-hometools">
      <div className="section-hometools__content">
        <div className="section-hometools__content__movie">
          <div className="movie">
            Phim
             <img src="/images/dropdown-icon.png" alt="" />
          </div>
        </div>
        <div className="section-hometools__content__cinema">
          <div className="cinema">
            Rạp
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
        </div>
        <div className="section-hometools__content__day">
          <div className="day">
            Ngày xem
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
        </div>
        <div className="section-hometools__content__screenings">
          <div className="screenings">
            Suất chiếu
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
        </div>
        <div className="section-hometools__content__ticker">

        </div>

      </div>
    </section>
  )
}
export default HomeTools;