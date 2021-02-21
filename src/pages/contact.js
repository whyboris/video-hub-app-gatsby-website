import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

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
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        {intl.formatMessage({ id: "contact.heading" })}
      </h2>

      <form
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/boris@videohubapp.com"
        method="post"
      >
        <fieldset>
          <label htmlFor="reason">
            {intl.formatMessage({ id: "contact.reason" })}
          </label>
          <select name="reason" id="reason" required="">
            <option value="bug">
              {intl.formatMessage({ id: "contact.bug" })}
            </option>
            <option value="request">
              {intl.formatMessage({ id: "contact.request" })}
            </option>
            <option value="lostlink">
              {intl.formatMessage({ id: "contact.lostlink" })}
            </option>
            <option value="other" defaultValue>
              {intl.formatMessage({ id: "contact.other" })}
            </option>
          </select>

          <label htmlFor="email-address">
            {intl.formatMessage({ id: "contact.email" })}
          </label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="name@email.com"
            required=""
          />

          <label htmlFor="message">
            {intl.formatMessage({ id: "contact.message" })}
          </label>
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
