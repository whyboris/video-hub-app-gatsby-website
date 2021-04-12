import React from "react"

import Swiper from "react-id-swiper"
import SwiperCore, { Navigation, Pagination } from 'swiper';

import "./swiper.css"

import { injectIntl } from "gatsby-plugin-intl"

import FeatureList from "./featureList"

const Carousel = ({ data, intl }) => {

  SwiperCore.use([Pagination, Navigation])

  const params = {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 20000,
      disableOnInteraction: true,
    },
    spaceBetween: 30,
  }

  return (
    <Swiper {...params}>
      <div>
        <FeatureList
          data={{
            // img: "/images/features/1.webp",
            img: "/images/features/1.jpg",
            heading: intl.formatMessage({ id: "carousel.search_by" }),
            features: [
              intl.formatMessage({ id: "carousel.search_by1" }),
              intl.formatMessage({ id: "carousel.search_by2" }),
              intl.formatMessage({ id: "carousel.search_by3" }),
              intl.formatMessage({ id: "carousel.search_by4" }),
              intl.formatMessage({ id: "carousel.search_by5" }),
              intl.formatMessage({ id: "carousel.and_more" }),
            ],
            mirror: false,
          }}
        />
      </div>

      <div>
        <FeatureList
          data={{
            // img: "/images/features/2.webp",
            img: "/images/features/2.jpg",
            heading: intl.formatMessage({ id: "carousel.sort_by" }),
            features: [
              intl.formatMessage({ id: "carousel.sort_by1" }),
              intl.formatMessage({ id: "carousel.sort_by2" }),
              intl.formatMessage({ id: "carousel.sort_by3" }),
              intl.formatMessage({ id: "carousel.sort_by4" }),
              intl.formatMessage({ id: "carousel.sort_by5" }),
              intl.formatMessage({ id: "carousel.and_more" }),
            ],
            mirror: false,
          }}
        />
      </div>

      <div>
        <FeatureList
          data={{
            // img: "/images/features/3.webp",
            img: "/images/features/3.jpg",
            heading: intl.formatMessage({ id: "carousel.tags" }),
            features: [
              intl.formatMessage({ id: "carousel.tags1" }),
              intl.formatMessage({ id: "carousel.tags2" }),
              intl.formatMessage({ id: "carousel.tags3" }),
              intl.formatMessage({ id: "carousel.tags4" }),
              intl.formatMessage({ id: "carousel.tags5" }),
              intl.formatMessage({ id: "carousel.and_more" }),
            ],
            mirror: false,
          }}
        />
      </div>

      <div>
        <FeatureList
          data={{
            // img: "/images/features/4.webp",
            img: "/images/features/4.jpg",
            heading: intl.formatMessage({ id: "carousel.more" }),
            features: [
              intl.formatMessage({ id: "carousel.more1" }),
              intl.formatMessage({ id: "carousel.more2" }),
              intl.formatMessage({ id: "carousel.more3" }),
              intl.formatMessage({ id: "carousel.more4" }),
              intl.formatMessage({ id: "carousel.more5" }),
              intl.formatMessage({ id: "carousel.more6" }),
            ],
            mirror: false,
          }}
        />
      </div>

      <div>
        <FeatureList
          data={{
            // img: "/images/features/5.webp",
            img: "/images/features/5.jpg",
            heading: intl.formatMessage({ id: "carousel.moremore" }),
            features: [
              intl.formatMessage({ id: "carousel.moremore1" }),
              intl.formatMessage({ id: "carousel.moremore2" }),
              intl.formatMessage({ id: "carousel.moremore3" }),
              intl.formatMessage({ id: "carousel.moremore4" }),
              intl.formatMessage({ id: "carousel.moremore5" }),
              intl.formatMessage({ id: "carousel.and_more" }),
            ],
            mirror: false,
          }}
        />
      </div>
    </Swiper>
  )
}

export default injectIntl(Carousel)
