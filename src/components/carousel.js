import React from "react"

import Swiper from "react-id-swiper"

import "./swiper.css"

import { injectIntl } from "gatsby-plugin-intl"

import FeatureList from "./featureList"

const Carousel = ({ data }) => {
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
            heading: "Search by:",
            features: [
              "Folder name",
              "File name",
              "Tag",
              "Fuzzy search",
              "Regex search",
              "... and more"
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
            heading: "Sort by:",
            features: [
              "File size",
              "Duration",
              "Star rating",
              "Date created",
              "Date modified",
              "... and more",
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
            heading: "Tags:",
            features: [
              "Add your own tags to videos",
              "Batch tagging",
              "Drag and drop to add tags",
              "Tag auto-complete when adding or searching",
              "Add year tag",
              "Add any description text",
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
            heading: "More:",
            features: [
              "Find duplicates",
              "Rename files",
              "Extract video clips",
              "Folder navigation",
              "Custom thumbnails",
              "Open video from screenshot you click",
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
            heading: "And more:",
            features: [
              "Translations into 16 languages",
              "Touch bar support on Mac",
              "Delete file option",
              "Create playlist of all videos",
              "Drag video into video editor",
              "... and more"
            ],
            mirror: false,
          }}
        />
      </div>
    </Swiper>
  )
}

export default injectIntl(Carousel)
