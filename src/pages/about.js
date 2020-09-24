import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import GiveWell from "../components/givewell"

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

      <h2>{intl.formatMessage({ id: "about.creator" })} Video Hub App</h2>

      <FormattedMessage id="about.bio" values={i18nSubstitutions}>
        {(...chunks) => <p>{chunks}</p>}
      </FormattedMessage>
    </div>

    <section className="why-donate">
      <h1>{intl.formatMessage({ id: "about.whydonate" })}</h1>

      <Img
        fluid={data.amf.childImageSharp.fluid}
        alt="Against Malaria Foundation"
      />

      <FormattedMessage id="about.p1" values={i18nSubstitutions}>
        {(...chunks) => <p>{chunks}</p>}
      </FormattedMessage>
      <FormattedMessage id="about.p2" values={i18nSubstitutions}>
        {(...chunks) => <p>{chunks}</p>}
      </FormattedMessage>
    </section>

    <h1 className="reviews-heading">
      {intl.formatMessage({ id: "about.title" })} AMF:
    </h1>

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
    }
    boris: file(relativePath: { eq: "boris.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
