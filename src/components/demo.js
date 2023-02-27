import React from "react"

import { injectIntl } from "gatsby-plugin-intl"

const Demo = ({ data, intl }) => {
  return (
    <div className="price-box">
      <h2 className="pricing-plan">{data.os}</h2>
      <div className="price">{intl.formatMessage({ id: "download.free" })}</div>
      <hr />
      <ul className="pricing-info">
        <li>{intl.formatMessage({ id: "download.limited" })}</li>
      </ul>
      <a href={data.link} className="btn">
        {intl.formatMessage({ id: "download.demo" })}
      </a>
      <ul className="pricing-info">
        <li className="light">
          v{data.version}
          <span className="dl-size">({data.size})</span>
        </li>
      </ul>
      {data.portable ? (
        <a href={data.portable} className="btn portable-demo">
          {intl.formatMessage({ id: "download.portable" })}
        </a>
      ) : null}
      {data.oldHack ? (
        <a href={data.portable} className="btn portable-demo">
          v3.1.0
        </a>
      ) : null}
    </div>
  )
}

export default injectIntl(Demo)
