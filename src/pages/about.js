import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GiveWell from "../components/givewell"

const About = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "about.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <div className="about-me">
      <img src="/images/boris.webp" alt="Boris Yakubchik" />

      <h1>Boris Yakubchik</h1>

      <h2>Creator of Video Hub App</h2>

      <p>
        Boris is a web developer working at Forbes. Video Hub App is a
        side-project created with Electron and Angular. $3.50 of every sale of
        this software is donated to the Against Malaria Foundation, a top-rated
        charity by GiveWell.
      </p>
    </div>

    <section className="why-donate">

      <h1>Why donate?</h1>

      <img width="100%" src="/images/againstmalariafoundation.jpg" alt="Against Malaria Foundation" />

      <p>
        Donations go to the Against Malaria Foundation (AMF) because it is a
        top-rated charity by GiveWell, an independent charity evaluator. Every
        $2 given to AMF protects two people from malaria for 3-4 years.
      </p>
      <p>
        Boris has been giving at least 10% of his income to the most
        cost-effective charities (see GiveWell) since 2011. Sales from this
        software will provide additional donations to his favorite charity.
      </p>
    </section>

    <h1 className="reviews-heading">About AMF:</h1>

    <GiveWell />

  </Layout>
)

export default injectIntl(About)
