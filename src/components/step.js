import React from "react"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Step = ({data}) => {

  return (

    <div className="step" style={{ flexDirection: data.mirror ?  'row-reverse' : 'initial' }}>
      <div className="step-image">
        <img src={data.img} alt={'feature ' + data.step} />
      </div>
      <div className="step-text">
        <ul className="feature-list">
          { data.features.map((feature) => {
            return(
              <li>{ feature }</li>
            )
          })}
        </ul>
      </div>
    </div>

  )
}

export default injectIntl(Step)
