import React from 'react'
import banner from '../../assests/images/banner.svg'
const Banner = () => {
  return (
    <div className="container banner__section d-flex justify-content-between align-content-center">
        <div className="banner__section__info">
            <h2 className="banner__section__info__h2"><span className="banner__section__info__span">Secure</span> and easy To Crypto</h2>
            
            <p>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="banner__section__info__btn d-flex justify-content-start align-items-center">
            <button type="button" class="btn banner__section__info__btn__btn1 mainBtn">Primary</button>
            <button type="button" class="btn banner__section__info__btn__btn2">Primary</button>
            </div>
        </div>
        <div className="banner__section__img">
            <img src={banner} alt="err" width="550" height="550"/>
        </div>
    </div>
  )
}

export default Banner