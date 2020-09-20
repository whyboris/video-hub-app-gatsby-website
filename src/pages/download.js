import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby-plugin-intl"

const Download = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "download.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <div className="price-container">
      <div className="price-box">
        <h2 className="pricing-plan">Windows</h2>
        <div className="price">Free</div>
        <hr />
        <ul className="pricing-info">
          <li>Limited to 50 videos per hub</li>
        </ul>
        <a
          href="https://github.com/whyboris/Video-Hub-App/releases/download/v2.2.3/Video.Hub.App.2-2.2.3-demo.dmg"
          className="btn"
        >
          Demo
        </a>
        <ul className="pricing-info">
          <li className="light">
            v2.2.3
            <span className="dl-size">(67mb)</span>
          </li>
        </ul>
        <a
          href="https://github.com/whyboris/Video-Hub-App/releases/download/v2.2.3/Video.Hub.App.2.2.2.3-demo.exe"
          className="btn portable-demo"
        >
          Portable
        </a>
      </div>

      <div className="price-box">
        <h2 className="pricing-plan">Mac</h2>
        <div className="price">Free</div>
        <hr />
        <ul className="pricing-info">
          <li>Limited to 50 videos per hub</li>
        </ul>
        <a
          href="https://github.com/whyboris/Video-Hub-App/releases/download/v2.2.3/Video.Hub.App.2-2.2.3-demo.dmg"
          className="btn"
        >
          Demo
        </a>
        <ul className="pricing-info">
          <li className="light">
            v2.2.3
            <span className="dl-size">(107mb)</span>
          </li>
        </ul>
      </div>

      <div className="price-box">
        <h2 className="pricing-plan">Linux</h2>
        <div className="price">Free</div>
        <hr />
        <ul className="pricing-info">
          <li>Limited to 50 videos per hub</li>
        </ul>
        <a
          href="https://github.com/whyboris/Video-Hub-App/releases/download/v2.2.3/Video.Hub.App.2-2.2.3-demo.dmg"
          className="btn"
        >
          Demo
        </a>
        <ul className="pricing-info">
          <li className="light">
            v2.2.3
            <span className="dl-size">(117mb)</span>
          </li>
        </ul>
      </div>

      <div className="price-box popular">
        <div className="popular-text">Unlimited</div>
        <h2 className="pricing-plan">Every OS</h2>
        <div className="price">
          <sup className="currency">$</sup>5<sup className="currency">.00</sup>
        </div>
        <hr />
        <ul className="pricing-info">
          <li>Unlimited videos</li>
          <li>Free updates for a year</li>
          <li>PC, Mac, &amp; Linux versions</li>
          <li>Download instantly available</li>
        </ul>

        <a
          href="https://checkout.chec.io/video-hub-app"
          data-chec-product-id="video-hub-app"
          className="btn btn-primary"
        >
          Buy Now
        </a>
      </div>
    </div>

    <section className="please-share">
      <h1>Details</h1>

      <h2>100% clean</h2>

      <p>
        100% CLEAN award by{" "}
        <a href="http://www.softpedia.com/get/Multimedia/Video/Other-VIDEO-Tools/Video-Hub-App.shtml#status">
          Softpedia
        </a>
        .
      </p>

      <h2>Paying</h2>

      <p>
        All payments are processed by <a href="https://stripe.com/">Stripe</a>{" "}
        or <a href="https://paypal.com/">Paypal</a> with the checkout process
        handled by <a href="https://chec.io/">Chec</a>.
      </p>

      <h2>After purchase</h2>

      <p>
        You will be taken to your download page as well as emailed a link to the
        download. For a full year from your initial purchase you will be able to
        re-download every updated version of the software at any time from the
        download link in your email. If you lose the link, just{" "}
        <Link to="/contact">contact me</Link>.
      </p>

      <h2>Why pay what you want?</h2>

      <p>
        I want more people to be able to use the software, so the price is lower
        than it should be, but I also want to make the world a better place, so
        $3.50 from every purchase goes to the{" "}
        <a href="http://againstmalaria.com/">Against Malaria Foundation</a>, a
        top-rated charity by <a href="http://givewell.org/">GiveWell</a>. Please
        consider paying as much as you think appropriate. To learn more, please
        go to the <Link to="/about">about page</Link>.
      </p>
    </section>
  </Layout>
)

export default injectIntl(Download)
