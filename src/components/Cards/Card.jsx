import React from 'react'
import card1 from "../../assests/images/card1.png";
import card2 from "../../assests/images/card2.png";
import card3 from "../../assests/images/card3.png";
import bitcoin from "../../assests/images/bitcoin.png";
const Card = () => {
  return (
    <div className="container card__section mb-5">
        <div className="card__section__head">
            <h2 className="card__section__head__h2">Why <span> Blockchain ?</span></h2>
        </div>
        <div className="bitcoin">
            <img src={bitcoin} alt="" className="img1"/>
        </div>
        <div className="card__section__cards d-flex justify-content-center align-items-center ">
            <div className="card__section__cards__card1 d-flex justify-content-center align-items-center">
                <div className="cardContent">
                <img src={card1} />
                <h3 className="text-center"> Secure Infrasture</h3>
                <p className="text-center">Our state-of-art cleaning process blasts any unwanted critters</p>
                </div>
            </div>
            <div className="card__section__cards__card1 d-flex justify-content-center align-items-center">
                <div className="cardContent ">
                <img src={card2} className="p-4"/>
                <h3 className="text-center"> Secure Infrasture</h3>
                <p className="text-center">Our state-of-art cleaning process blasts any unwanted critters</p>
                </div>
            </div>
            <div className="card__section__cards__card1 d-flex justify-content-center align-items-center">
                <div className="cardContent">
                <img src={card3} />
                <h3 className="text-center"> Secure Infrasture</h3>
                <p className="text-center">Our state-of-art cleaning process blasts any unwanted critters</p>
                </div>
            </div>
        </div>
        <div className="bitcoin">
            <img src={bitcoin} alt="" className="img2"/>
        </div>
    </div>
  )
}

export default Card