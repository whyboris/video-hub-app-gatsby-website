import React from "react"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// note this is just a copy of `Advisor` with the details removed
const AdvisorSimple = ({ data }) => {
  return (
    <li>
      <strong>{data.name}</strong>

      <p className="description">
        <FormattedMessage id={"team." + data.name} />
      </p>
    </li>
  )
}

export default injectIntl(AdvisorSimple)
