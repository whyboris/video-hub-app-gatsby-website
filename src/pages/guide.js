import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ScrollToTop from "../components/scrolltotop"

const questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"]

const Guide = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "guide.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <ScrollToTop />

    <section className="faq">
      <h1>
        <FormattedMessage id="guide.heading" />
      </h1>

      <h2>
        <FormattedMessage id="guide.start" />
      </h2>

      <p>
        <FormattedMessage id="guide.start_a6" />
      </p>
      <p>
        <FormattedMessage id="guide.start_a7" />
      </p>

      <h2>
        <FormattedMessage id="guide.multifolder" />
      </h2>

      <p>
        <FormattedMessage id="guide.multifolder_a1" />
      </p>
      <p>
        <FormattedMessage id="guide.multifolder_a2" />
      </p>
      <p>
        <FormattedMessage id="guide.multifolder_a3" />
      </p>
    </section>
  </Layout>
)

export default injectIntl(Guide)
