import React from "react"

import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const Receipt = ({ data, intl }) => {
  return (
    <div className={ "receipt " + (data.currentlyShowing === "releases" ? "hidden" : "")}>
      <span className="date">{data.date}</span>
      <span className="purchase">
        {data.amount}
        <sup>th</sup> {intl.formatMessage({ id: "blog.app_purchase" })} !
      <a className="receipt-link" href={data.receipt}>
      {intl.formatMessage({ id: "blog.receipt" })}
      </a>
      </span>
    </div>
  )
}

export default injectIntl(Receipt)
