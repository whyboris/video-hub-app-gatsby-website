import React from "react"

import Swiper from 'react-id-swiper';

import './swiper.css'

import { injectIntl } from "gatsby-plugin-intl"

const PullQuote = () => {

  const params = {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 20000,
      disableOnInteraction: true
    }
  }

  return (
    <>
      <div className="quote-container">

        <Swiper {...params}>

          <div className="pull-quote">
            "a great video launcher"
            <span className="quote-author">
              <a href="http://nkj2011.blog.fc2.com/blog-entry-599.html">
                NKJ11
              </a>
            </span>
          </div>

          <div className="pull-quote">
            "easily manage large number of movies"
            <span className="quote-author">
              <a href="https://gigazine.net/news/20180805-video-hub-app-review/">
                Gigazine
              </a>
            </span>
          </div>

          <div className="pull-quote">
            "a quick, stylish way to manage video content on your computer"
            <span className="quote-author">
              <a href="https://www.softpedia.com/get/Multimedia/Video/Other-VIDEO-Tools/Video-Hub-App.shtml">
                Softpedia
              </a>
            </span>
          </div>

          <div className="pull-quote">
            "manage your video collection in a comfortable and efficient manner"
            <span className="quote-author">
              <a href="http://video-hub-app.findmysoft.com/">
                FindMySoft
              </a>
            </span>
          </div>

        </Swiper>
      </div>
    </>
  )
}

export default injectIntl(PullQuote)
