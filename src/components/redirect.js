import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import SEO from "../components/seo"

const Redirect = ({ intl }) => {
  return <SEO title={`${intl.formatMessage({ id: "general.title" })}`} />
}

export default injectIntl(Redirect)
