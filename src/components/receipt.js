import React from "react"

const Receipt = ({ data }) => {
  return (
    <div className="receipt">
      <span className="date">{data.date}</span>
      <span className="purchase">
        {data.amount}
        <sup>th</sup> app purchase!
      <a className="receipt-link" href={data.receipt}>
        receipt
      </a>
      </span>
    </div>
  )
}

export default Receipt
