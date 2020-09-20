import React from "react"

import Swiper from "react-id-swiper"

import "./swiper.css"

import { injectIntl } from "gatsby-plugin-intl"

const GiveWell = () => {
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
            <span>
              "Focus on a program with excellent evidence of effectiveness and
              cost-effectiveness."
            </span>
            <span className="quote-author">
              <a href="https://www.givewell.org/charities/amf">GiveWell</a>
            </span>
          </div>

          <div className="pull-quote">
            <span>
              "Processes for ensuring that nets reach their intended recipients
              and monitoring whether they remain in homes and in good condition
              over the long-term."
            </span>
            <span className="quote-author">
              <a href="https://www.givewell.org/charities/amf">GiveWell</a>
            </span>
          </div>

          <div className="pull-quote">
            <span>
              "Room for more funding – we believe AMF will be able to use
              additional funds to deliver additional nets."
            </span>
            <span className="quote-author">
              <a href="https://www.givewell.org/charities/amf">GiveWell</a>
            </span>
          </div>

          <div className="pull-quote">
            <span>
              "Transparency – AMF shares significant information about its work
              with us and we are able to closely follow and understand its
              work."
            </span>
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
