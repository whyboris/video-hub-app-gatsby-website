import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

import PullQuote from "../components/pullquote"

import { graphql } from "gatsby"

import SplashSVG from "../svg/splash.svg"
import ComputerSVG from "../svg/computer.svg"
import LanguageSVG from "../svg/language.svg"

import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Carousel from "../components/carousel"
import { latestVersion } from "../components/version"

import Language from "../components/language"

const IndexPage = ({ data, intl }) => {
  function playAnimation() {
    setTimeout(() => {
      const docRef = typeof document !== `undefined` ? document : undefined;
      if (docRef) {
        const appSplashImage = document.getElementById("splashImage")
        appSplashImage.classList.add("splash-animation")
        const appWireframe = document.getElementById("splashSVG")
        setTimeout(() => {
          appWireframe.classList.add("hide-it")
        }, 500)
      }
    }, 1000)
  }

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title="Video Hub App"
        description={intl.formatMessage({ id: "general.description" })}
        keywords={[
          `Video Hub App`,
          intl.formatMessage({ id: "seo.file_organizer" }),
          intl.formatMessage({ id: "seo.organize_videos" }),
          intl.formatMessage({ id: "seo.video_organizer" }),
        ]}
      />

      <div className="language-select">
        <div className="dropbtn dropbtn-language">
          <LanguageSVG className="language-selection" />
        </div>
        <Language />
      </div>

      <div className="top-container">
        <div className="computer-and-splash">
          <div className="computer">
            <ComputerSVG />
          </div>

          <div className="splash-container">
            <div className="splash-image-container">
              <SplashSVG />
              <img
                alt="Video Hub App screenshot"
                id="splashImage"
                src="/images/splash.jpg"
                onLoad={playAnimation()}
              />
            </div>
          </div>
        </div>

        <div className="main-title">
          <h1>
            Video Hub App
            <span className="version">
              <FormattedMessage id="home.version" /> {latestVersion}
            </span>
          </h1>
          <p>
            <FormattedMessage id="home.like_youtube" />
          </p>
          <p>
            <FormattedMessage id="home.tagline" />
          </p>

          <p className="win-mac-linux">Windows / Mac / Linux</p>

          <div className="download-button-container">
            <Link className="button" to="/download">
              <FormattedMessage id="home.download" />
            </Link>
          </div>
        </div>
      </div>

      <section className="move-down-hack">
        <div className="feature-preview reverse">
          <div className="image-container">
            <video muted src="/images/1.mp4" loop autoPlay>
              {/* <img alt="video hub app screenshot" src="/images/1.webp" /> */}
              <GatsbyImage
                image={data.large1.childImageSharp.gatsbyImageData}
                alt="Video Hub App screenshot"
              />
            </video>
          </div>
          <span>
            <FormattedMessage id="home.feature1" />
            <span className="subtext">
              <FormattedMessage id="home.feature1_text" />
            </span>
          </span>
        </div>

        <div className="feature-preview">
          <div className="image-container">
            {/* <img alt="video hub app screenshot" src="/images/2.webp" /> */}
            <GatsbyImage
              image={data.large2.childImageSharp.gatsbyImageData}
              alt="Video Hub App screenshot"
            />
          </div>
          <span>
            <FormattedMessage id="home.feature2" />
            <span className="subtext">
              <FormattedMessage id="home.feature2_text" />
            </span>
          </span>
        </div>

        <div className="feature-preview reverse">
          <div className="image-container">
            {/* <img alt="video hub app screenshot" src="/images/3.webp" /> */}
            <GatsbyImage
              image={data.large3.childImageSharp.gatsbyImageData}
              alt="Video Hub App screenshot"
            />
          </div>
          <span>
            <FormattedMessage id="home.feature3" />
            <span className="subtext">
              <FormattedMessage id="home.feature3_text" />
            </span>
          </span>
        </div>

        <div className="feature-preview">
          <div className="image-container">
            {/* <img alt="video hub app screenshot" src="/images/4.webp" /> */}
            <GatsbyImage
              image={data.large4.childImageSharp.gatsbyImageData}
              alt="Video Hub App screenshot"
            />
          </div>
          <span>
            <FormattedMessage id="home.feature4" />
            <span className="subtext">
              <FormattedMessage id="home.feature4_text" />
            </span>
          </span>
        </div>

        <div className="feature-preview reverse">
          <div className="image-container">
            {/* <img alt="video hub app screenshot" src="/images/5.webp" /> */}
            <GatsbyImage
              image={data.large5.childImageSharp.gatsbyImageData}
              alt="Video Hub App screenshot"
            />
          </div>
          <span>
            <FormattedMessage id="home.feature5" />
            <span className="subtext">
              <FormattedMessage id="home.feature5_text" />
            </span>
          </span>
        </div>

        <h2 className="many-features">
          <FormattedMessage id="home.many_more" />:
        </h2>

        <Carousel />
      </section>

      <div className="easy-to-use">
        {/* <img
          src="/images/wizard.webp"
          alt="How to start with Video Hub App"
        ></img> */}
        <GatsbyImage
          image={data.wizard.childImageSharp.gatsbyImageData}
          alt="Video Hub App screenshot"
        />

        <div className="how-to-use">
          <h2>
            <FormattedMessage id="home.easy" />
          </h2>

          <div>
            <i>1</i>
            <h3>
              <FormattedMessage id="home.step1" />
            </h3>
            <p>
              <FormattedMessage id="home.step1_text" />
            </p>
          </div>

          <div>
            <i>2</i>
            <h3>
              <FormattedMessage id="home.step2" />
            </h3>
            <p>
              <FormattedMessage id="home.step2_text" />
            </p>
          </div>

          <div>
            <i>3</i>
            <h3>
              <FormattedMessage id="home.step3" />
            </h3>
            <p>
              <FormattedMessage id="home.step3_text" />
            </p>
          </div>
        </div>
      </div>

      <section className="download-now">
        {/* <img
          src="/images/all-desktops.webp"
          alt="works on Windows, Mac, and Linux"
          className="img-responsive"
        /> */}
        <GatsbyImage
          image={data.allos.childImageSharp.gatsbyImageData}
          alt="Video Hub App screenshot"
        />

        <h2>Windows / Mac / Linux</h2>
        <p>
          <FormattedMessage id="home.every_os" />
        </p>

        <div className="download-button-container">
          <Link className="button" to="/download">
            <FormattedMessage id="home.download" />
          </Link>
        </div>
      </section>

      <h1 className="reviews-heading">
        <FormattedMessage id="blog.reviews" />:
      </h1>

      <PullQuote />
    </Layout>
  )
}

export default injectIntl(IndexPage)

export const query = graphql`
  query {
    large1: file(relativePath: { eq: "large/1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    large2: file(relativePath: { eq: "large/2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    large3: file(relativePath: { eq: "large/3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    large4: file(relativePath: { eq: "large/4.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    large5: file(relativePath: { eq: "large/5.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    wizard: file(relativePath: { eq: "large/wizard.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    allos: file(relativePath: { eq: "large/all-desktops.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
