import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

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
      <h1>If you like the app</h1>

      <h2>Please upvote:</h2>

      <ul>
        <li>AlternativeTo</li>
        <li>Product Hunt</li>
      </ul>

      <h2>Please like:</h2>

      <ul>
        <li>Facebook page</li>
      </ul>

      <h2>Please share:</h2>

      <ul>
        <li>on Facebook</li>
        <li>on Twitter</li>
      </ul>

      <h2>Please donate:</h2>

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
            <span className="buy-text">Buy me a coffee</span>
          </a>
        </li>
        <li>
          I appreciate any donations{" "}
          <span role="img" aria-label="winking smiley face">
            😊
          </span>
        </li>
      </ul>

      <h2>Thank you:</h2>

      <p>
        Promoting the app is a skill of its own and companies spend a lot of
        money on it. I am a single developer and would sincerely appreciate if
        you share the word about my app{" "}
        <span role="img" aria-label="bowing emoji">
          🙇‍♂️
        </span>
      </p>
    </section>
  </Layout>
)

export default injectIntl(Share)
