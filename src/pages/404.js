import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={`404: ${intl.formatMessage({ id: "general.title" })}`}
    />
    <section>
      <h1>
        <FormattedMessage id="notfound.header" />
      </h1>
      <p>
        <FormattedMessage id="notfound.pleasevisit" />
      </p>

      <div className="outer-nav right vertical nav-reset">
        <Link to="/" className="my-icon-home">
          Home
        </Link>
        <Link to="/download" className="my-icon-download">
          Download
        </Link>
        <Link to="/share" className="my-icon-heart">
          Share
        </Link>
        <Link to="/blog" className="my-icon-news">
          Blog
        </Link>
        <Link to="/faq" className="my-icon-star">
          FAQ
        </Link>
        <Link to="/about" className="my-icon-info-large">
          About
        </Link>
        <Link to="/contact" className="my-icon-mail">
          Contact
        </Link>
      </div>
    </section>
  </Layout>
)

export default injectIntl(NotFoundPage)
