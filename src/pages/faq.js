import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ScrollToTop from "../components/scrolltotop"

const questions = [
  "q1",
  "q2",
  "q3",
]

const FAQ = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "faq.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <ScrollToTop />

    <section className="faq">
      <h1>
        <FormattedMessage id="faq.heading" />
      </h1>

      {questions.map((element) => {
        return (
          <div key={element}>
            <h2>
              <FormattedMessage id={"faq." + element} />
            </h2>
            <p>
              <FormattedMessage id={"faq." + element + "_answer"} />
            </p>
          </div>
        )
      })}
    </section>
  </Layout>
)

export default injectIntl(FAQ)
