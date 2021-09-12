import React from "react"

import { injectIntl, Link } from "gatsby-plugin-intl"

const Release = ({ data, intl }) => {
  return (
    <div
      className={
        "release " + (data.currentlyShowing === "donations" ? "hidden" : "")
      }
    >
      {data.hideTada ? null : <span className="tada" role="img">🎉</span>}
      <span className="date">{data.date}</span>

      {data.version ? <span className="version">v{data.version}</span> : null}

      {data.features ? (
        <>
          <span className="bold">
            {intl.formatMessage({ id: "blog.features" })}:
          </span>
          <ul>
            {data.features.map((feature) => {
              return <li key={feature}>{feature}</li>
            })}
          </ul>
        </>
      ) : null}

      {data.bugfixes ? (
        <>
          <span className="bold">
            {intl.formatMessage({ id: "blog.bugfixes" })}:
          </span>
          <ul>
            {data.bugfixes.map((bugfix) => {
              return <li key={bugfix}>{bugfix}</li>
            })}
          </ul>
        </>
      ) : null}

      {data.notes ? <span className="notes">{data.notes}</span> : null}

      {data.link ? <a href={data.link.link}>{data.link.text}</a> : null}

      {data.linkInternal ? <Link to={data.linkInternal.link}>{data.linkInternal.text}</Link> : null}
    </div>
  )
}

export default injectIntl(Release)
