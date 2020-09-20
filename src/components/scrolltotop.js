import React from "react"

import "./scrolltotop.scss"

const ScrollToTop = () => {
  return (
    <div
      className="scroll-to-top"
      role="button"
      tabIndex="0"
      onClick={() => {
        window.scrollTo(0, 0)
      }}
      onKeyDown={(event) =>
        event.key === "Enter" ? window.scrollTo(0, 0) : null
      }
    >
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1053 0L8 6.10526L1.89474 0L0 1.89474L8 9.89474L16 1.89474L14.1053 0Z"
          fill="#222222"
        />
      </svg>
    </div>
  )
}

export default ScrollToTop
