import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Share = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "thankyou.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <section className="please-share">
      <h1>{intl.formatMessage({ id: "thankyou.title" })}</h1>

      <p>{intl.formatMessage({ id: "thankyou.thankyoutext" })}</p>
      <p>{intl.formatMessage({ id: "thankyou.linkdescription" })}</p>
      <p>
        <center>
          <a href="https://my.videohubapp.com">my.videohubapp.com</a>
        </center>
      </p>
    </section>
  </Layout>
)

export default injectIntl(Share)
