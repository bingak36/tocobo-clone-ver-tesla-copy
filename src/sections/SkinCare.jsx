import React from 'react'
import {introData} from '../util/skincare'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles/SkinCare.scss'
const SkinCare = () => {
  return (
    <div className='inner skincare-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Sustainable Future
        </h2>
        <p className="txt">
          단순히 전기차를 만드는 것을 넘어, 태양광 패널과 Powerwall을 통해 에너지를 직접 생산하고 저장하는 에코시스템을 구축합니다. <br />
          우리는 타협하지 않는 성능과 환경 보호가 공존할 수 있음을 증명합니다.
        </p>
        <a href="#" className="btn">
          DISCOVER TESLA
        </a>
      </div>
      <div className="slider-wrap">
        <div className="in">
          <Swiper 
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          className="skincare-slider">
            {introData.map((sl)=>(

            <SwiperSlide 
            style={{backgroundImage:`url(${sl.image})`}}
            key={sl.id} >
              <img src={sl.src} alt={sl.alt} />
            </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SkinCare