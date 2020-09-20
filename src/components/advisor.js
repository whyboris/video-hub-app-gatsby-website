import React from "react"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Advisor = ({ data }) => {
  let showLongDescription = false

  return (
    <>
      <li
        onClick={() => {
          if (!showLongDescription) {
            document.getElementById(data.id).classList.remove("hidden")
          } else {
            document.getElementById(data.id).classList.add("hidden")
          }
          showLongDescription = !showLongDescription
        }}
      >

        {
          data.image && <div className="team-photo">
            <img src={'/team/' + data.image} alt={'Photo of ' + data.name} />
          </div>
        }

        <strong>{data.name}</strong>

        <p className="description">
          <FormattedMessage id={"team." + data.name} />
        </p>

        <p id={data.id} className="description-long hidden">
          <FormattedMessage
            id={"team." + data.name + "_long"}
            values={{
              intl_breaking_line: <><br /><br /></>,
              intl_thomas_website: <a href="https://campuspress.yale.edu/thomaspogge/">campuspress.yale.edu/thomaspogge</a>,
            }}
          />
        </p>
      </li>
    </>
  )
}

export default injectIntl(Advisor)
