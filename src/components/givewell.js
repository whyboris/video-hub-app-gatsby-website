import React from "react"

import Swiper from "react-id-swiper"

import "./swiper.css"

import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const GiveWell = ({ intl }) => {
  const params = {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 20000,
      disableOnInteraction: true,
    },
  }

  return (
    <>
      <div className="quote-container give-well">
        <Swiper {...params}>
          <div className="pull-quote">
            <span>{intl.formatMessage({ id: "givewell.q1" })}</span>
            <span className="quote-author">
              <a href="https://www.givewell.org/charities/amf">GiveWell</a>
            </span>
          </div>

          <div className="pull-quote">
            <span>{intl.formatMessage({ id: "givewell.q2" })}</span>
            <span className="quote-author">
              <a href="https://www.givewell.org/charities/amf">GiveWell</a>
            </span>
          </div>

          <div className="pull-quote">
            <span>{intl.formatMessage({ id: "givewell.q3" })}</span>
            <span className="quote-author">
              <a href="https://www.givewell.org/charities/amf">GiveWell</a>
            </span>
          </div>

          <div className="pull-quote">
            <span>{intl.formatMessage({ id: "givewell.q4" })}</span>
            <span className="quote-author">
              <a href="https://www.givewell.org/charities/amf">GiveWell</a>
            </span>
          </div>
        </Swiper>
      </div>
    </>
  )
}

export default injectIntl(GiveWell)
