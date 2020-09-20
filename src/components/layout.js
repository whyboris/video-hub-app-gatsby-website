/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

import "./navigation.scss"
import "./hamburger.scss"
import "./layout.scss"
import "./arabic.scss"

const { weareready } =
  typeof window !== `undefined`
    ? require("../components/navigation")
    : { weareready: () => {} }

const Layout = ({ children, intl }) => {
  setTimeout(() => {
    weareready()
  }, 1)

  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
      </div>

      <button
        id="showMenu"
        aria-label="navigation menu"
        className="hamburger hamburger--arrow-r custom-hamburger"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div id="perspective" className="perspective effect-moveleft">
        <div className="containerNAV">
          <div className="wrapper" id="clickHack">
            <div className="body-contents">
              <main className={intl.locale === "ar" ? "rtl-version" : ""}>
                {children}
              </main>

              <footer>
                <div className="copyright">© 2020 Video Hub App</div>

                <div className="footer-links">
                  <a
                    title="share on Twitter"
                    href="https://twitter.com/intent/tweet?hashtags=videohubapp&original_referer=https%3A%2F%2Fvideohubapp.com&text=Browse,%20search,%20preview,%20and%20manage%20your%20videos%20with%20Video%20Hub%20App%202%20for%20Win%20and%20Mac&url=https%3A%2F%2Fvideohubapp.com"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2944 5.24873C14.2944 5.41117 14.2944 5.49239 14.2944 5.65482C14.2944 9.95939 11.0457 14.9949 5.03553 14.9949C3.16751 14.9949 1.46193 14.4264 0 13.533C0.243655 13.533 0.48731 13.533 0.812183 13.533C2.35533 13.533 3.73604 13.0457 4.8731 12.1523C3.41117 12.1523 2.19289 11.1777 1.7868 9.87817C1.94924 9.87817 2.19289 9.95939 2.43655 9.95939C2.76142 9.95939 3.00508 9.87817 3.32995 9.87817C1.86802 9.5533 0.730964 8.25381 0.730964 6.62944V6.54822C1.05584 6.79188 1.62437 6.95431 2.11168 6.95431C1.21827 6.38579 0.649746 5.32995 0.649746 4.19289C0.649746 3.62437 0.812183 3.05584 1.05584 2.56853C2.6802 4.51777 5.11675 5.81726 7.79695 5.9797C7.79695 5.81726 7.79695 5.49239 7.79695 5.24873C7.79695 3.46193 9.25888 2 11.0457 2C12.0203 2 12.8325 2.40609 13.401 3.05584C14.132 2.8934 14.8629 2.64975 15.5127 2.24365C15.269 2.97462 14.7817 3.62437 14.0508 4.03046C14.7005 3.94924 15.3503 3.7868 15.9188 3.54315C15.5127 4.19289 14.9442 4.76142 14.2944 5.24873Z"
                        fill="#C0C0C0"
                      />
                    </svg>
                  </a>

                  <a
                    title="share on Facebook"
                    href="https://www.facebook.com/sharer/sharer.php?u=https://videohubapp.com"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1111 0H0.888889C0.355556 0 0 0.355556 0 0.888889V15.1111C0 15.6444 0.355556 16 0.888889 16H8.53333V9.77778H6.48889V7.37778H8.53333V5.6C8.53333 3.55556 9.77778 2.4 11.6444 2.4C12.2667 2.4 12.8889 2.4 13.5111 2.48889V4.62222H12.2667C11.2889 4.62222 11.1111 5.06667 11.1111 5.77778V7.28889H13.5111L13.1556 9.77778H11.1111V16H15.1111C15.6444 16 16 15.6444 16 15.1111V0.888889C16 0.355556 15.6444 0 15.1111 0Z"
                        fill="#C0C0C0"
                      />
                    </svg>
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>

        <nav className="outer-nav right vertical">
          <Link to="/" className="my-icon-home" activeClassName="current-page">
            Home
          </Link>
          <Link
            to="/download"
            className="my-icon-download"
            activeClassName="current-page"
          >
            Download
          </Link>
          <Link
            to="/share"
            className="my-icon-heart"
            activeClassName="current-page"
          >
            Share
          </Link>
          <Link
            to="/blog"
            className="my-icon-news"
            activeClassName="current-page"
          >
            Blog
          </Link>
          <Link
            to="/faq"
            className="my-icon-star"
            activeClassName="current-page"
          >
            FAQ
          </Link>
          <Link
            to="/about"
            className="my-icon-info-large"
            activeClassName="current-page"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="my-icon-mail"
            activeClassName="current-page"
          >
            Contact
          </Link>

          <br />
          <br />
          <a href="#" className="please-share">
            Please share
          </a>
          <a
            className="my-icon-social-facebook"
            aria-label="share on facebook"
            href="https://www.facebook.com/sharer/sharer.php?u=http://www.videohubapp.com"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className="my-icon-social-twitter"
            aria-label="share on twitter"
            href="https://twitter.com/intent/tweet?hashtags=videohubapp&amp;original_referer=https%3A%2F%2Fvideohubapp.com&amp;text=Browse,%20search,%20preview,%20and%20manage%20your%20videos%20with%20Video%20Hub%20App%202%20for%20Win%20and%20Mac&amp;url=https%3A%2F%2Fvideohubapp.com"
          ></a>
        </nav>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
