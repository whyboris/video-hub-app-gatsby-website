import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/buycoffee.scss"

const Share = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "share.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <section className="please-share">
      <h1>{intl.formatMessage({ id: "share.title" })}</h1>

      <h2>{intl.formatMessage({ id: "share.upvote" })}:</h2>

      <ul>
        <li>
          <a href="https://alternativeto.net/software/video-hub-app">
            AlternativeTo
          </a>
        </li>
        <li>
          <a href="https://www.producthunt.com/posts/video-hub-app">
            Product Hunt
          </a>
        </li>
      </ul>

      <h2>{intl.formatMessage({ id: "share.like" })}:</h2>

      <ul>
        <li>
          <a href="https://www.facebook.com/videohubapp">Facebook</a>
        </li>
      </ul>

      <h2>{intl.formatMessage({ id: "share.share" })}:</h2>

      <ul>
        <li>
          <a href="https://www.facebook.com/sharer/sharer.php?u=http://www.videohubapp.com">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com/intent/tweet?hashtags=videohubapp&original_referer=https%3A%2F%2Fvideohubapp.com&text=Browse,%20search,%20preview,%20and%20manage%20your%20videos%20with%20Video%20Hub%20App%20for%20Win%20and%20Mac&url=https%3A%2F%2Fvideohubapp.com">
            Twitter
          </a>
        </li>
      </ul>

      <h2>{intl.formatMessage({ id: "share.donate" })}:</h2>

      <ul>
        <li>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="83LF8B58P5ADG"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </li>
        <li>
          <a
            className="bmc-button"
            target="_blank"
            rel="noreferrer"
            href="https://www.buymeacoffee.com/yboris"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
              alt="Buy me a coffee"
            />
            <span className="buy-text">
              {intl.formatMessage({ id: "share.buycoffee" })}
            </span>
          </a>
        </li>
        <li>
          {intl.formatMessage({ id: "share.appreciate" })}{" "}
          <span role="img" aria-label="winking smiley face">
            😊
          </span>
        </li>
      </ul>

      <h2>{intl.formatMessage({ id: "share.thankyou" })}:</h2>

      <p>
        {intl.formatMessage({ id: "share.thankyoutext" })}{" "}
        <span role="img" aria-label="bowing emoji">
          🙇‍♂️
        </span>
      </p>
    </section>
  </Layout>
)

export default injectIntl(Share)
