import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"]

const FAQ = ({ intl }) => (
  <Layout
    showScrollToTop={true}
  >
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "faq.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <section className="faq">
      <h1>
        <FormattedMessage id="faq.heading" />
      </h1>

      <h2>
        <FormattedMessage id="faq.start" />
      </h2>
      <ol className="with-numbers">
        <li>
          <FormattedMessage id="faq.start_a1" />
        </li>
        <li>
          <FormattedMessage id="faq.start_a2" />
        </li>
        <li>
          <FormattedMessage id="faq.start_a3" />
        </li>
        <li>
          <FormattedMessage id="faq.start_a4" />
        </li>
        <li>
          <FormattedMessage id="faq.start_a5" />
        </li>
      </ol>
      <p>
        <FormattedMessage id="faq.start_a6" />
      </p>
      <p>
        <FormattedMessage id="faq.start_a7" />
      </p>

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

      <h2>
        <FormattedMessage id="faq.file_support" />
      </h2>
      <p>
        264, 265, 3g2, 3gp, avi, divx, flv, h264, h265, hevc, m4a, m4v, m4v,
        mkv, mov, mp2, mp4, mpe, mpeg, mpg, ogg, rm, vob, webm, wmv
      </p>

      <h2>
        <FormattedMessage id="faq.multifolder" />
      </h2>
      <p>
        <FormattedMessage id="faq.multifolder_a1" />
      </p>
      <p>
        <FormattedMessage id="faq.multifolder_a2" />
      </p>
      <p>
        <FormattedMessage id="faq.multifolder_a3" />
      </p>
      <ul>
        <li>
          <FormattedMessage id="faq.multifolder_a4" />
        </li>
        <li>
          <FormattedMessage id="faq.multifolder_a5" />
        </li>
      </ul>
    </section>
  </Layout>
)

export default injectIntl(FAQ)
