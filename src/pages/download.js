import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Demo from "../components/demo"

import { Link } from "gatsby-plugin-intl"

import { latestVersion } from "../components/version"

// copied from `about.js`
const i18nSubstitutions = {
  intl_givewell: (
    <>
      <a href="https://www.givewell.org/charities/top-charities">GiveWell</a>
    </>
  ),
  intl_donated: (
    <>
      <a href="https://www.againstmalaria.com/VideoHubApp">$3.50</a>
    </>
  ),
  intl_amf: (
    <>
      <a href="http://againstmalaria.com/">Against Malaria Foundation</a>
    </>
  ),
}

const i18nPayment = {
  intl_stripe: (
    <>
      <a href="https://stripe.com/">Stripe</a>
    </>
  ),
  intl_paypal: (
    <>
      <a href="https://paypal.com/">PayPal</a>
    </>
  ),
  intl_chec: (
    <>
      <a href="https://chec.io/">Chec</a>
    </>
  ),
}

const Download = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "download.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <div className="price-container">
      <Demo
        data={{
          os: "Windows",
          version: latestVersion,
          size: "120mb",
          link:
            "https://github.com/whyboris/Video-Hub-App/releases/download/v3.2.0/Video.Hub.App.3.Demo.Setup.3.2.0.exe",
          portable:
            "https://github.com/whyboris/Video-Hub-App/releases/download/v3.2.0/Video.Hub.App.3.Demo.Portable.3.2.0.exe",
        }}
      />

      <Demo
        data={{
          os: "Mac",
          version: latestVersion,
          size: "129mb",
          link:
            "https://github.com/whyboris/Video-Hub-App/releases/download/v3.2.0/Video.Hub.App.3.Demo-3.2.0-arm64.dmg",
          oldHack:
            "https://github.com/whyboris/Video-Hub-App/releases/download/v3.1.0/Video.Hub.App.3-3.1.0-demo.dmg",
        }}
      />

      <Demo
        data={{
          os: "Linux",
          version: latestVersion,
          size: "168mb",
          link:
            "https://github.com/whyboris/Video-Hub-App/releases/download/v3.2.0/Video.Hub.App.3.Demo-3.2.0.AppImage",
          oldHack:
            "https://github.com/whyboris/Video-Hub-App/releases/download/v3.1.0/Video.Hub.App.3-3.1.0-demo.AppImage",
        }}
      />

      <div className="price-box popular">
        <div className="popular-text">
          {intl.formatMessage({ id: "download.unlimited" })}
        </div>
        <h2 className="pricing-plan">
          {intl.formatMessage({ id: "download.every" })} OS
        </h2>
        <div className="price">
          <sup className="currency">$</sup>5<sup className="currency">.00</sup>
        </div>
        <hr />
        <ul className="pricing-info">
          <li> {intl.formatMessage({ id: "download.buy1" })}</li>
          <li> {intl.formatMessage({ id: "download.buy2" })}</li>
          <li> {intl.formatMessage({ id: "download.buy3" })}</li>
          <li> {intl.formatMessage({ id: "download.buy4" })}</li>
        </ul>

        <a
          href="https://checkout.chec.io/video-hub-app"
          data-chec-product-id="video-hub-app"
          className="btn btn-primary"
        >
          {intl.formatMessage({ id: "download.buy" })}
        </a>
      </div>
    </div>

    <section className="please-share">
      <h1>{intl.formatMessage({ id: "download.details" })}</h1>

      <h2>100% {intl.formatMessage({ id: "download.clean" })}</h2>

      <p>
        <em>100% CLEAN</em> {intl.formatMessage({ id: "download.award" })} -{" "}
        <a href="http://www.softpedia.com/get/Multimedia/Video/Other-VIDEO-Tools/Video-Hub-App.shtml#status">
          Softpedia
        </a>
      </p>

      <h2>{intl.formatMessage({ id: "download.paying" })}</h2>

      <FormattedMessage id="download.paying_text" values={i18nPayment}>
        {(...chunks) => <p>{chunks}</p>}
      </FormattedMessage>

      <h2>{intl.formatMessage({ id: "download.after" })}</h2>

      <p>{intl.formatMessage({ id: "download.after_text" })} <a href="https://my.videohubapp.com/">my.videohubapp.com</a></p>

      <h2>{intl.formatMessage({ id: "download.whypay" })}</h2>

      <FormattedMessage id="download.whypay_text" values={i18nSubstitutions}>
        {(...chunks) => <p>{chunks}</p>}
      </FormattedMessage>

      <Link to="/about">{intl.formatMessage({ id: "blog.read_more" })}</Link>

      <h2>{intl.formatMessage({ id: "share.thankyou" })}</h2>

      <p>This software uses <a href="https://ffmpeg.org">FFmpeg</a></p>

    </section>
  </Layout>
)

export default injectIntl(Download)
