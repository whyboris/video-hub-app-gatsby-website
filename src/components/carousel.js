import React from "react"

import Swiper from 'react-id-swiper';

import './swiper.css'

import { injectIntl } from "gatsby-plugin-intl"

import Step from "./step"

const Carousel = ({data}) => {

  const params = {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }

  return (

    <Swiper {...params}>

      <div>
        <Step
          data={{
            img: '/images/1small.jpg',
            text: "features.feature1",
            mirror: false,
          }}
        />
      </div>

      <div>
        <Step
          data={{
            img: '/images/2small.jpg',
            text: "features.feature2",
            mirror: false,
          }}
        />
      </div>

      <div>
        <Step
          data={{
            img: '/images/3small.jpg',
            text: "features.feature3",
            mirror: false,
          }}
        />
      </div>

    </Swiper>

  )
}

export default injectIntl(Carousel)
