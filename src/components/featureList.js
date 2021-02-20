import React from "react"

import { injectIntl } from "gatsby-plugin-intl"

const FeatureList = ({ data }) => {
  return (
    <div
      className="step"
      style={{ flexDirection: data.mirror ? "row-reverse" : "initial" }}
    >
      <div className="step-image">
        <img src={data.img} alt={"feature " + data.step} />
      </div>
      <div className="step-text">
        {data.heading ? (
          <span className="feature-heading">{data.heading}</span>
        ) : null}
        <ul className="feature-list">
          {data.features.map((feature) => {
            return <li key={feature}>{feature}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default injectIntl(FeatureList)
