import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

import { languageNames } from "../intl/languages"

const Language = () => {
  return (
    <div className="dropdown-content dropdown-content-language">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language) => (
            <span
              key={language}
              role="button"
              tabIndex="0"
              onClick={() => changeLocale(language)}
              onKeyDown={(event) =>
                event.key === "Enter" ? changeLocale(language) : null
              }
              className="language-selection"
              style={{
                color: currentLocale === language ? `#335fff` : `#222222`,
              }}
            >
              <div className="language-english">
                {languageNames[language].english}
              </div>
              <div className="language-original">
                {languageNames[language].native}
              </div>
            </span>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
