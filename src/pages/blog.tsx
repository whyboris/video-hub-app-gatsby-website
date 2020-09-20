import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"

import Receipt from "../components/receipt"
import Release from "../components/release"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ScrollToTop from "../components/scrolltotop"

import { latestVersion } from "../components/version"

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

      <div className="price-container blog-sections" id="newsroll">
        <div className="price-box blog-box with-button">
          <h2 className="pricing-plan">Latest Version</h2>
          <div className="price">{ latestVersion }</div>
          <span className="light">released</span> May 15, 2020
          <hr />
          <span className="donation-description">
            I have been working on version 3 for many months. I am hoping to
            release it before 2020 is over.
          </span>
          <a
            id="releasesButton"
            href="#newsroll"
            onClick={toggleReleases}
            className={
              "btn " + (currentlyShowing === "releases" ? "btn-primary" : "")
            }
          >
            Release history
          </a>
        </div>

        <div className="price-box blog-box with-button">
          <h2 className="pricing-plan">Total donated</h2>
          <div className="price">
            <sup className="currency">$</sup>8,000
          </div>
          <span className="light">updated</span> August 30, 2020
          <hr />
          <span className="donation-description">
            $3.50 from every purchase goes to the{" "}
            <a href="http://againstmalaria.com/">Against Malaria Foundation</a>,
            a top-rated charity by <a href="http://givewell.org/">GiveWell</a>.{" "}
            <Link to="/about">Read more</Link> about donations
          </span>
          <a
            id="donationButton"
            href="#newsroll"
            onClick={toggleDonations}
            className={
              "btn " + (currentlyShowing === "donations" ? "btn-primary" : "")
            }
          >
            Donation history
          </a>
        </div>

        <div className="price-box blog-box">
          <h2 className="pricing-plan">Some reviews</h2>
          <ul className="pricing-info review-quotes">
            <li>
              <a href="http://nkj2011.blog.fc2.com/blog-entry-599.html">
                NKJ11
              </a>
              : "a great video launcher"
            </li>

            <li>
              <a href="https://gigazine.net/news/20180805-video-hub-app-review/">
                Gigazine
              </a>
              : "easily manage large number of movies"
            </li>

            <li>
              <a href="https://www.softpedia.com/get/Multimedia/Video/Other-VIDEO-Tools/Video-Hub-App.shtml">
                Softpedia
              </a>
              : "a quick, stylish way to manage video content on your computer"
            </li>

            <li>
              <a href="http://video-hub-app.findmysoft.com/">FindMySoft</a>:
              "manage your video collection in a comfortable and efficient
              manner"
            </li>
          </ul>
        </div>
      </div>

      <section className="blog-contents">
        <h1>
          {currentlyShowing === "all"
            ? "All news:"
            : currentlyShowing === "donations"
            ? "Donations:"
            : "Releases:"}
        </h1>

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
            date: "Oct 18, 2018",
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
