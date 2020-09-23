import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

import PullQuote from "../components/pullquote"

import SplashSVG from "../svg/splash.svg"
import ComputerSVG from "../svg/computer.svg"
import LanguageSVG from "../svg/language.svg"

import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Carousel from "../components/carousel"
import { latestVersion } from "../components/version"

import Language from "../components/language"

const IndexPage = ({ data, intl }) => {
  function playAnimation() {
    setTimeout(() => {
      const el = document.getElementById("splashImage")
      el.classList.add("splash-animation")
      const el2 = document.getElementById("splashSVG")
      setTimeout(() => {
        el2.classList.add("hide-it")
      }, 500)
    }, 1000)
  }

  console.log(data)

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "general.title" })}
        description={intl.formatMessage({ id: "general.description" })}
        keywords={[
          `Video Hub App`,
          `video organizer`,
          `file organizer`,
          `organize videos`,
        ]}
      />

      {/* <div className="language-select">
        <div className="dropbtn dropbtn-language">
          <LanguageSVG className="language-selection" />
        </div>
        <Language />
      </div> */}

      <div className="top-container">
        <div className="computer-and-splash">
          <div className="computer">
            <ComputerSVG />
          </div>

          <div className="splash-container">
            <div className="splash-image-container">
              <SplashSVG />
              <img
                alt="video hub app screenshot"
                id="splashImage"
                className="splash"
                src="/images/splash.jpg"
                onLoad={playAnimation()}
              />
            </div>
          </div>
        </div>

        <div className="main-title">
          <h1>
            <FormattedMessage id="general.title" />
            <span className="version">version {latestVersion}</span>
          </h1>
          <p>Think of it like YouTube for videos on your computer</p>
          <p>Browse, search, and organize your videos</p>

          <p className="win-mac-linux">Windows / Mac / Linux</p>

          <div className="download-button-container">
            <Link className="button" to="/download">
              DOWNLOAD
            </Link>
          </div>
        </div>
      </div>

      <section className="move-down-hack">
        <div className="feature-preview reverse">
          <div className="image-container">
            <video muted src="/images/1.mp4" loop autoPlay>
              {/* <img alt="video hub app screenshot" src="/images/1.webp" /> */}
              <Img fluid={data.large1.childImageSharp.fluid} alt="Video Hub App screenshot" />
            </video>
          </div>
          <span>
            Preview your videos
            <span className="subtext">
              Hover over the thumbnail to see screenshots
            </span>
          </span>
        </div>

        <div className="feature-preview">
          <div className="image-container">
            {/* <img alt="video hub app screenshot" src="/images/2.webp" /> */}
            <Img fluid={data.large2.childImageSharp.fluid} alt="Video Hub App screenshot" />
          </div>
          <span>
            See as filmstrips
            <span className="subtext">
              Filmstrip shows screenshots from each video
            </span>
          </span>
        </div>

        <div className="feature-preview reverse">
          <div className="image-container">
            {/* <img alt="video hub app screenshot" src="/images/3.webp" /> */}
            <Img fluid={data.large3.childImageSharp.fluid} alt="Video Hub App screenshot" />
          </div>
          <span>
            See all screenshots
            <span className="subtext">
              All screenshots from each video at once
            </span>
          </span>
        </div>

        <div className="feature-preview">
          <div className="image-container">
            {/* <img alt="video hub app screenshot" src="/images/4.webp" /> */}
            <Img fluid={data.large4.childImageSharp.fluid} alt="Video Hub App screenshot" />
          </div>
          <span>
            Search and filter
            <span className="subtext">
              Add any combination of search options to find what you want
            </span>
          </span>
        </div>

        <div className="feature-preview reverse">
          <div className="image-container">
            {/* <img alt="video hub app screenshot" src="/images/5.webp" /> */}
            <Img fluid={data.large5.childImageSharp.fluid} alt="Video Hub App screenshot" />
          </div>
          <span>
            Organize
            <span className="subtext">
              Rename, add tags, stars, and description to any video
            </span>
          </span>
        </div>

        <h2 className="many-features">Many more features:</h2>

        <Carousel />
      </section>

      <div className="easy-to-use">
        {/* <img
          src="/images/wizard.webp"
          alt="How to start with Video Hub App"
        ></img> */}
        <Img fluid={data.wizard.childImageSharp.fluid} alt="Video Hub App screenshot" />

        <div className="how-to-use">
          <h2>Easy to start</h2>

          <div>
            <i>1</i>
            <h3>Select a folder</h3>
            <p>from your computer, external hard drive, or network drive</p>
          </div>

          <div>
            <i>2</i>
            <h3>Choose settings</h3>
            <p>number and size of screenshots and clips</p>
          </div>

          <div>
            <i>3</i>
            <h3>Done</h3>
            <p>start browsing even while screenshots are generated</p>
          </div>
        </div>
      </div>

      <section className="download-now">
        {/* <img
          src="/images/all-desktops.webp"
          alt="works on Windows, Mac, and Linux"
          className="img-responsive"
        /> */}
        <Img fluid={data.allos.childImageSharp.fluid} alt="Video Hub App screenshot" />

        <h2>Windows / Mac / Linux</h2>
        <p>Works the same way no matter what OS you use</p>

        <div className="download-button-container">
          <Link className="button" to="/download">
            DOWNLOAD
          </Link>
        </div>
      </section>

      <h1 className="reviews-heading">Some reviews:</h1>

      <PullQuote />
    </Layout>
  )
}

export default injectIntl(IndexPage)

export const query = graphql`
query {
  large1: file(relativePath: { eq: "large/1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  large2: file(relativePath: { eq: "large/2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  large3: file(relativePath: { eq: "large/3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  large4: file(relativePath: { eq: "large/4.png" }) {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  large5: file(relativePath: { eq: "large/5.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  wizard: file(relativePath: { eq: "large/wizard.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  allos: file(relativePath: { eq: "large/all-desktops.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 680) {
        ...GatsbyImageSharpFluid
      }
    }
  },
}
`;
