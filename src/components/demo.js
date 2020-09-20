import React from "react"

const Demo = ({ data }) => {
  return (
    <div className="price-box">
      <h2 className="pricing-plan">{data.os}</h2>
      <div className="price">Free</div>
      <hr />
      <ul className="pricing-info">
        <li>Limited to 50 videos per hub</li>
      </ul>
      <a href={data.link} className="btn">
        Demo
      </a>
      <ul className="pricing-info">
        <li className="light">
          v{data.version}
          <span className="dl-size">({data.size})</span>
        </li>
      </ul>
      {data.portable ? (
        <a href={data.portable} className="btn portable-demo">
          Portable
        </a>
      ) : null}
    </div>
  )
}

export default Demo
