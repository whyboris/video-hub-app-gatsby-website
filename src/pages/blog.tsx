import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

import Receipt from "../components/receipt"
import Release from "../components/release"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ScrollToTop from "../components/scrolltotop"

import { latestVersion } from "../components/version"

// copied from `about.js`
const i18nSubstitutions = {
  intl_givewell: (
    <>
      <a href="https://www.givewell.org/charities/top-charities">GiveWell</a>
    </>
  ),
  intl_donated: (
    <>
      <a href="https://www.againstmalaria.com/VideoHubApp">$3.50</a>
    </>
  ),
  intl_amf: (
    <>
      <a href="http://againstmalaria.com/">Against Malaria Foundation</a>
    </>
  ),
}

type CurrentView = "all" | "donations" | "releases"

let currentlyShowing: CurrentView = "all"

const Blog = ({ intl }) => {
  function toggleReleases() {
    toggleView("releases")
  }

  function toggleDonations() {
    toggleView("donations")
  }

  function toggleView(view: CurrentView) {
    if (currentlyShowing === view) {
      currentlyShowing = "all"
    } else {
      currentlyShowing = view
    }
  }

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "navigation.blog" })}
        description={intl.formatMessage({ id: "general.description" })}
      />

      <div className="price-container blog-sections">
        <div className="price-box blog-box with-button">
          <h2 className="pricing-plan">
            {" "}
            {intl.formatMessage({ id: "blog.version" })}
          </h2>
          <div className="price">{latestVersion}</div>
          <span className="light">
            {" "}
            {intl.formatMessage({ id: "blog.released" })}
          </span>{" "}
          Nov 30, 2020
          <hr />
          <span className="donation-description">
            I just released version 3. Please let me know if you come across any bugs!
          </span>
          <a
            id="releasesButton"
            href="#"
            onClick={toggleReleases}
            className={
              "btn " + (currentlyShowing === "releases" ? "btn-primary" : "")
            }
          >
            {intl.formatMessage({ id: "blog.btn_release" })}
          </a>
        </div>

        <div className="price-box blog-box with-button">
          <h2 className="pricing-plan">
            {" "}
            {intl.formatMessage({ id: "blog.donated" })}
          </h2>
          <div className="price">
            <sup className="currency">$</sup>8,750
          </div>
          <span className="light">
            {" "}
            {intl.formatMessage({ id: "blog.updated" })}
          </span>{" "}
          November 10, 2020
          <hr />
          <span className="donation-description">
            <FormattedMessage
              id="blog.donation_text"
              values={i18nSubstitutions}
            >
              {(...chunks) => <p>{chunks}</p>}
            </FormattedMessage>
            <Link to="/about">
              {intl.formatMessage({ id: "blog.read_more" })}
            </Link>
          </span>
          <a
            id="donationButton"
            href="#"
            onClick={toggleDonations}
            className={
              "btn " + (currentlyShowing === "donations" ? "btn-primary" : "")
            }
          >
            {intl.formatMessage({ id: "blog.btn_donation" })}
          </a>
        </div>

        <div className="price-box blog-box">
          <h2 className="pricing-plan">
            {intl.formatMessage({ id: "blog.reviews" })}
          </h2>
          <ul className="pricing-info review-quotes">
            <li>
              <a href="http://nkj2011.blog.fc2.com/blog-entry-599.html">
                NKJ11
              </a>
              : "{intl.formatMessage({ id: "reviews.nkj11" })}"
            </li>

            <li>
              <a href="https://gigazine.net/news/20180805-video-hub-app-review/">
                Gigazine
              </a>
              : "{intl.formatMessage({ id: "reviews.gigazine" })}"
            </li>

            <li>
              <a href="https://www.softpedia.com/get/Multimedia/Video/Other-VIDEO-Tools/Video-Hub-App.shtml">
                Softpedia
              </a>
              : "{intl.formatMessage({ id: "reviews.softpedia" })}"
            </li>
{/*
            <li>
              <a href="https://www.filecroco.com/download-video-hub-app/">
                FileCroco
              </a>
              : "{intl.formatMessage({ id: "reviews.filecroco" })}"
            </li>
*/}
            <li>
              <a href="http://video-hub-app.findmysoft.com/">FindMySoft</a>: "
              {intl.formatMessage({ id: "reviews.findmysoft" })}"
            </li>
          </ul>
        </div>
      </div>

      <section className="blog-contents">
        <h1>
          {currentlyShowing === "all"
            ? intl.formatMessage({ id: "blog.all_news" })
            : currentlyShowing === "donations"
            ? intl.formatMessage({ id: "blog.donations" })
            : intl.formatMessage({ id: "blog.releases" })}
        </h1>

        <Receipt
          data={{
            currentlyShowing,
            amount: "2,500",
            date: "Dec 28, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=648968",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "2,400",
            date: "Dec 7, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=641302",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "2,300",
            date: "Dec 2, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=639687",
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "Nov 30, 2020",
            features: [
              "More than one input / source folder per hub",
              "'Watch folder' live for updates",
              "Bottom tray with Word cloud, Recently played, Details and other tabs",
              "Set custom keyboard shortcuts",
              "Single / double click mode toggle",
              "Many more smaller features",
            ],
            bugfixes: ["Too many to list"],
            version: "3.0.0",
            notes:
              "If you purchased the app before, visit my.videohubapp.com",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "2,200",
            date: "Nov 10, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=633293",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "2,100",
            date: "Oct 9, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=625733",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "2,000",
            date: "Aug 30, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=611216",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "1,900",
            date: "Jun 26, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=602304",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "1,800",
            date: "Jun 1, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=596149",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "1,700",
            date: "May 29, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=586508",
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "May 15, 2020",
            features: [
              "Batch tagging",
              "Details view 2",
              "Quick file rename",
              "Sort by number of tags or aspect ratio",
              "Show default thumbnail in clip view option",
              "Check for new release button in settings",
            ],
            bugfixes: ["Save settings when closing via menu bar / taksbar"],
            version: "2.2.3",
            notes:
              "Everyone who has ever purchased the app (1600+ people) will receive a download link in their email shortly.",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "1,600",
            date: "May 3, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=579339",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "1,500",
            date: "Apr 14, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=574157",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "1,400",
            date: "Mar 22, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=568217",
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "Mar 3, 2020",
            features: [
              "Create playlist from current view",
              "Folders can be sorted by 'last modified'",
              "Folders with single video show larger preview",
              "and many more smaller ones",
            ],
            bugfixes: [
              "no more crashing when extracting videos",
              "more robust screenshot extraction",
              "better algorithm for automatic tags",
              "and many more smaller ones",
            ],
            version: "2.2.0",
            notes:
              "Everyone who has ever purchased the app (1300+ people) will receive a download link in their email shortly.",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "1,300",
            date: "Feb 19, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=560428",
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "Jan 27, 2020",
            features: [
              "Touch Bar support",
              "Fuzzy search 🔍",
              "pick default thumbnail",
              "right-click delete file option",
              "and many more smaller ones",
            ],
            bugfixes: [
              "better success extracting screenshots",
              "better detection of correct video resolution",
              "and many more smaller ones",
            ],
            version: "2.1.0",
            notes:
              "Everyone who has ever purchased the app (1200+ people) will receive a download link in their email shortly.",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "1,200",
            date: "Jan 16, 2020",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=551590",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "1,100",
            date: "Dec 19, 2019",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=541904",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "1,000",
            date: "Nov 15, 2019",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=532639",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "900",
            date: "Oct 20, 2019",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=526422",
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "Oct 18, 2019",
            features: [
              "Tags 🎉 add your own tags to any video",
              "Choose number of screenshots per video",
              "Sheet view: view every screenshot from a video",
              "Optionally extract video clip preview",
              "Folder navigation",
              "Sort by date added, number of times played, star rating, file size,file name",
              "Replace any video thumbnail by dropping an image over the preview",
              "Option to open video from the screenshot you click",
              "Duplicate finder",
              "Hub statistics",
              "Options menu grouped into sections",
              "Translations in 14 languges",
              "Remember window size after app closes",
              "Many bugfixes",
              "and more 🚀",
            ],
            version: "2.0.0",
            notes:
              "Thank you all for your patience. Everyone who has ever purchased the app (850+ people) will receive a download link in their email shortly.",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "800",
            date: "Aug 26, 2019",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=513201",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "700",
            date: "Jul 7, 2019",
            receipt:
              "https://www.againstmalaria.com/Fundraiser.aspx?FundraiserID=8035",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "600",
            date: "May 20, 2019",
            receipt:
              "https://www.againstmalaria.com/Fundraiser.aspx?FundraiserID=8035",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "500",
            date: "Mar 21, 2019",
            receipt:
              "https://www.againstmalaria.com/Fundraiser.aspx?FundraiserID=8035",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "400",
            date: "Jan 21, 2019",
            receipt:
              "https://www.againstmalaria.com/Fundraiser.aspx?FundraiserID=8035",
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "Dec 2, 2018",
            notes:
              "Video Hub App is now open source! If you're a developer and would like to contribute to the project or just see the code:",
            link: {
              link: "https://github.com/whyboris/Video-Hub-App",
              text: "GitHub",
            },
            hideTada: true,
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "300",
            date: "Nov 17, 2018",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=431274",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "200",
            date: "Aug 26, 2018",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=410422",
          }}
        />

        <Receipt
          data={{
            currentlyShowing,
            amount: "100",
            date: "Jul 24, 2018",
            receipt:
              "https://www.againstmalaria.com/MyNets.aspx?DonationID=395198",
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "Jul 22, 2018",
            notes: "Video Hub App is on ProductHunt!",
            link: {
              link: "https://www.producthunt.com/posts/video-hub-app",
              text: "ProductHunt",
            },
            hideTada: true,
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "Jul 4, 2018",
            notes: "YouTube video for the app!",
            link: {
              link: "https://www.youtube.com/watch?v=_KC9xrsiwZg",
              text: "YouTube",
            },
            hideTada: true,
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "May 14, 2018",
            features: ["Auto tagging", "Manual tagging"],
            notes: "Linux version is available!",
            version: "1.3.0",
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "Apr 24, 2018",
            features: ["Rename file", "Show similar"],
            version: "1.2.0",
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "Apr 8, 2018",
            features: ["Resolution filter", "Resize app user interface"],
            bugfixes: [
              "Rescan folder works",
              "Save settings on exit",
              "Remove screenshots for videos no longer in library",
            ],
            version: "1.1.0",
          }}
        />

        <Release
          data={{
            currentlyShowing,
            date: "Feb 20, 2018",
            notes:
              "Initial release. Windows and Mac versions released as demo. App is now available for purchase.",
            version: "1.0.0",
          }}
        />
      </section>

      <ScrollToTop />
    </Layout>
  )
}

export default injectIntl(Blog)
