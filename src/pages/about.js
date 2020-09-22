import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import GiveWell from "../components/givewell"

const About = ({ data, intl }) => (

  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "about.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <div className="about-me">

      <Img fluid={data.boris.childImageSharp.fluid} alt="Boris Yakubchik" />

      <h1>Boris Yakubchik</h1>

      <h2>Creator of Video Hub App</h2>

      <p>
        Boris is a web developer working at Forbes. Video Hub App is a
        side-project created with Electron and Angular. $3.50 of every sale of
        this software is{" "}
        <a href="https://www.againstmalaria.com/VideoHubApp">donated</a> to the{" "}
        <a href="http://againstmalaria.com/">Against Malaria Foundation</a>, a
        top-rated charity by{" "}
        <a href="https://www.givewell.org/charities/top-charities">GiveWell</a>.
      </p>
    </div>

    <section className="why-donate">
      <h1>Why donate?</h1>

      <Img fluid={data.amf.childImageSharp.fluid} alt="Against Malaria Foundation" />

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

export const query = graphql`
query {
  amf: file(relativePath: { eq: "againstmalariafoundation.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 780) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  boris: file(relativePath: { eq: "boris.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
