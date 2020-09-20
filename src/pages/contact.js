import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/contact.scss"

const Contact = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "contact.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <section className="contact-page">
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Questions? Comments? Feature request? Bug reports?</h2>

      <form
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/boris@videohubapp.com"
        method="post"
      >
        <fieldset>
          <label htmlFor="reason">Please choose reason for reaching out:</label>
          <select name="reason" id="reason" required="">
            <option value="bug">Bug report</option>
            <option value="request">Feature request</option>
            <option value="lostlink">Lost my download link</option>
            <option value="other" defaultValue>
              Other
            </option>
          </select>

          <label htmlFor="email-address">Email Address</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="name@email.com"
            required=""
          />

          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder=""
            required=""
          ></textarea>

          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </section>
  </Layout>
)

export default injectIntl(Contact)
