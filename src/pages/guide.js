import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Guide = ({ intl }) => (
  <Layout
    showScrollToTop={true}
  >
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "guide.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <section className="faq user-guide">

      <h1><FormattedMessage id="guide.heading" /></h1>

      <h3><FormattedMessage id="guide.toc_heading" /></h3>
      <ol>
        <li><a href="#getting_started"><FormattedMessage id="guide.getting_started" /></a></li>
        <li><a href="#layout_heading"><FormattedMessage id="guide.layout_heading" /></a></li>
        <li><a href="#settings_heading"><FormattedMessage id="guide.settings_heading" /></a></li>
        <li><a href="#using_search_heading"><FormattedMessage id="guide.using_search_heading" /></a></li>
        <li><a href="#howto_heading"><FormattedMessage id="guide.howto_heading" /></a></li>
      </ol>

      <h2 id="getting_started"><FormattedMessage id="guide.getting_started" /></h2>
      <p><FormattedMessage id="guide.start1" /></p>
      <p><FormattedMessage id="guide.start2" /></p>
      <p><FormattedMessage id="guide.start3" /></p>
      <p><FormattedMessage id="guide.start4" /></p>
      <p><FormattedMessage id="guide.start5" /></p>
      <p><FormattedMessage id="guide.start6" /></p>
      <p><FormattedMessage id="guide.start7" /></p>

      <h2 id="layout_heading"><FormattedMessage id="guide.layout_heading" /></h2>
      <p><FormattedMessage id="guide.layout_intro" /></p>

      <img src="/images/layout.png" alt="Video Hub App layout" style={{ width: "100%" }} /> 

      <ol>
        <li><FormattedMessage id="guide.layout1" /></li>
        <li><FormattedMessage id="guide.layout2" /></li>
        <li><FormattedMessage id="guide.layout3" /></li>
        <li><FormattedMessage id="guide.layout4" /></li>
        <li><FormattedMessage id="guide.layout5" /></li>
      </ol>

      <h3><FormattedMessage id="guide.tagging_heading" /></h3>
      <p><FormattedMessage id="guide.tagging1" /></p>
      <ul>
        <li><FormattedMessage id="guide.tagging2" /></li>
        <li><FormattedMessage id="guide.tagging3" /></li>
        <li><FormattedMessage id="guide.tagging4" /></li>
        <li><FormattedMessage id="guide.tagging5" /></li>
      </ul>
      <p><FormattedMessage id="guide.tagging6" /></p>     
      <p><FormattedMessage id="guide.tagging7" /></p>

      <h3><FormattedMessage id="guide.tagging_batch_heading" /></h3>
      <p><FormattedMessage id="guide.tagging_batch1" /></p>
      <ol>
        <li><FormattedMessage id="guide.tagging_batch2" /></li>
        <li><FormattedMessage id="guide.tagging_batch3" /></li>     
        <li><FormattedMessage id="guide.tagging_batch4" /></li>
      </ol>
      <p><FormattedMessage id="guide.tagging_batch5" /></p>

      <h3><FormattedMessage id="guide.rating_heading" /></h3>
      <p><FormattedMessage id="guide.rating1" /></p>
      <p><FormattedMessage id="guide.rating2" /></p>
      <p><FormattedMessage id="guide.rating3" /></p>

      <h3><FormattedMessage id="guide.renaming_heading" /></h3>
      <p><FormattedMessage id="guide.renaming1" /></p>

      <h3><FormattedMessage id="guide.thumbnail_heading" /></h3>
      <p><FormattedMessage id="guide.thumbnail1" /></p>
      <p><FormattedMessage id="guide.thumbnail2" /></p>

      <h2 id="settings_heading"><FormattedMessage id="guide.settings_heading" /></h2>
      <p><FormattedMessage id="guide.settings1" /></p>
      <p><FormattedMessage id="guide.settings2" /></p>
      <p><FormattedMessage id="guide.settings3" /></p>

      <h3><FormattedMessage id="guide.search_heading" /></h3>
      <p><FormattedMessage id="guide.search1" /></p>
      <p><FormattedMessage id="guide.search2" /></p>
      <p><FormattedMessage id="guide.search3" /></p>
      <p><FormattedMessage id="guide.search4" /></p>
      <p><FormattedMessage id="guide.search5" /></p>
      <p><FormattedMessage id="guide.search6" /></p>

      <h3><FormattedMessage id="guide.view_heading" /></h3>
      <p><FormattedMessage id="guide.view1" /></p>
      <p><FormattedMessage id="guide.view2" /></p>
      <p><FormattedMessage id="guide.view3" /></p>

      <h3><FormattedMessage id="guide.main_heading" /></h3>
      <p><FormattedMessage id="guide.main1" /></p>
      <ul>
        <li><FormattedMessage id="guide.main2" /></li>
        <li><FormattedMessage id="guide.main3" /></li>     
        <li><FormattedMessage id="guide.main4" /></li>
        <li><FormattedMessage id="guide.main5" /></li>
        <li><FormattedMessage id="guide.main6" /></li>      
        <li><FormattedMessage id="guide.main7" /></li>
        <li><FormattedMessage id="guide.main8" /></li>
      </ul>

      <h3><FormattedMessage id="guide.current_heading" /></h3>
      <p><FormattedMessage id="guide.current1" /></p>
      <ul>
        <li><FormattedMessage id="guide.current2" /></li>
        <li><FormattedMessage id="guide.current3" /></li>     
        <li><FormattedMessage id="guide.current4" /></li>
        <li><FormattedMessage id="guide.current5" /></li>
        <li><FormattedMessage id="guide.current6" /></li>   
        <li><FormattedMessage id="guide.current7" /></li>
        <li><FormattedMessage id="guide.current8" /></li>     
        <li><FormattedMessage id="guide.current9" /></li> 
      </ul>
      <p><FormattedMessage id="guide.current10" /></p>      

      <h3><FormattedMessage id="guide.shortcuts_heading" /></h3>
      <p><FormattedMessage id="guide.shortcuts1" /></p>
      <p><FormattedMessage id="guide.shortcuts2" /></p>
      <p><FormattedMessage id="guide.shortcuts3" /></p>


      <h2 id="using_search_heading"><FormattedMessage id="guide.using_search_heading" /></h2>
      <p><FormattedMessage id="guide.using_search1" /></p>
      <p><FormattedMessage id="guide.using_search2" /></p>
      <ul>
        <li><FormattedMessage id="guide.using_search3" /></li>     
        <li><FormattedMessage id="guide.using_search4" /></li>
        <li><FormattedMessage id="guide.using_search5" /></li>
        <li><FormattedMessage id="guide.using_search6" /></li>      
        <li><FormattedMessage id="guide.using_search7" /></li>
      </ul>

      <h2 id="howto_heading"><FormattedMessage id="guide.howto_heading" /></h2>

      <h3><FormattedMessage id="guide.adding_heading" /></h3>
      <p><FormattedMessage id="guide.adding1" /></p>
      <p><FormattedMessage id="guide.adding2" /></p>
      <p><FormattedMessage id="guide.adding3" /></p>
      <p><FormattedMessage id="guide.adding4" /></p>

      <h3><FormattedMessage id="guide.movefolder_heading" /></h3>
      <p><FormattedMessage id="guide.move1" /></p>
      <p><FormattedMessage id="guide.move2" /></p>
      <p><FormattedMessage id="guide.move3" /></p>
      <ol>
        <li><FormattedMessage id="guide.move4" /></li>
        <li><FormattedMessage id="guide.move5" /></li>
        <li><FormattedMessage id="guide.move6" /></li>
        <li><FormattedMessage id="guide.move7" /></li>
        <li><FormattedMessage id="guide.move8" /></li>
      </ol>
      <p><FormattedMessage id="guide.move9" /></p>

      
      <p className="thank-you-oren"><FormattedMessage id="guide.thank_you_oren" /></p>

    </section>
  </Layout>
)

export default injectIntl(Guide)
