import React from "react"

const Release = ({ data }) => {
  return (
    <div className="release">
      {data.hideTada ? null : <span className="tada">🎉</span>}
      <span className="date">{data.date}</span>

      {data.version ? <span className="version">v{data.version}</span> : null}

      {data.features ? (
        <>
          <span className="bold">Features:</span>
          <ul>
            {data.features.map((feature) => {
              return <li key={feature}>{feature}</li>
            })}
          </ul>
        </>
      ) : null}

      {data.bugfixes ? (
        <>
          <span className="bold">Bugfixes:</span>
          <ul>
            {data.bugfixes.map((bugfix) => {
              return <li key={bugfix}>{bugfix}</li>
            })}
          </ul>
        </>
      ) : null}

      {data.notes ? <span className="notes">{data.notes}</span> : null}

      {data.link ? <a href={data.link.link}>{data.link.text}</a> : null}
    </div>
  )
}

export default Release
