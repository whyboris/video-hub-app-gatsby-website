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
            features: ["features.feature1", "features.feature2"],
            mirror: false,
          }}
        />
      </div>

      <div>
        <Step
          data={{
            img: '/images/2small.jpg',
            features: ["features.feature2", "features.feature6"],
            mirror: false,
          }}
        />
      </div>

      <div>
        <Step
          data={{
            img: '/images/3small.jpg',
            features: ["features.feature3", "features.feature6"],
            mirror: false,
          }}
        />
      </div>

    </Swiper>

  )
}

export default injectIntl(Carousel)
