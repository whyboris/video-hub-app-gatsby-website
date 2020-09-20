import React from "react"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Step = ({data}) => {

  return (

    <div className="step" style={{ flexDirection: data.mirror ?  'row-reverse' : 'initial' }}>
      <div className="step-image">
        <img src={data.img} alt={'feature ' + data.step} />
      </div>
      <div className="step-text">
        <p className="hif-step">
          <FormattedMessage id={data.text} />
        </p>
      </div>
    </div>

  )
}

export default injectIntl(Step)
