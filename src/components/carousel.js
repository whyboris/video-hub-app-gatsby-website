import React from "react"

import Swiper from "react-id-swiper"

import "./swiper.css"

import { injectIntl } from "gatsby-plugin-intl"

import FeatureList from "./step"

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
    spaceBetween: 30,
  }

  return (
    <Swiper {...params}>
      <div>
        <FeatureList
          data={{
            img: "/images/3small.jpg",
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
            img: "/images/1small.jpg",
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
            img: "/images/1small.jpg",
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
            img: "/images/2small.jpg",
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
            img: "/images/2small.jpg",
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
