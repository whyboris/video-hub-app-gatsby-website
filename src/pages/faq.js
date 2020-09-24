import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ScrollToTop from "../components/scrolltotop"

const questions = []
// const questions = ["q1", "q2", "q3"]

const FAQ = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "faq.title" })}
      description={intl.formatMessage({ id: "general.description" })}
    />

    <ScrollToTop />

    <section className="faq">
      <h1>
        <FormattedMessage id="faq.heading" />
      </h1>

      {questions.map((element) => {
        return (
          <div key={element}>
            <h2>
              <FormattedMessage id={"faq." + element} />
            </h2>
            <p>
              <FormattedMessage id={"faq." + element + "_answer"} />
            </p>
          </div>
        )
      })}

      <h2>How do I start?</h2>
      <ol className="with-numbers">
        <li>
          Name your collection (hub), for example <em>My Videos</em>.
        </li>
        <li>
          Click <em>Select video directory</em>, the folder on your computer
          where your videos are located.
        </li>
        <li>
          Click <em>Change hub directory</em>, the folder where you'd like to
          have Video Hub App store all the information about this hub.
        </li>
        <li>
          Select the size of screenshots you'd like Video Hub App to extract
        </li>
        <li>
          Click <em>Create the Video Hub</em>
        </li>
      </ol>
      <p>
        Let's say you named your hub <em>My Videos</em>. Video Hub App will
        extract screenshots from every video in the folder you chose and place
        it inside a folder titled <em>vha-My Videos</em>
        in the hub directory you chose.
      </p>
      <p>
        Additionally, Video Hub App will save a file <em>My Videos.vha2</em> in
        the same folder. Now any time you click on <em>My Videos.vha2</em>, your
        hub will open instantly, even if the videos are located on an external
        hard drive.
      </p>

      <h2>How do I create a new hub?</h2>
      <p>
        Click on the gear (top right) to access the <em>settings menu</em>.
        Click on the first button to start the "<em>wizard</em>" again.
      </p>

      <h2>Can I have more than one hub?</h2>
      <p>
        You can have as many hubs (collections) as you would like. Perhaps you
        would like your Home Videos, Movies, and Experimental Projects in
        different, separate collections. Just create three hubs! You can switch
        between them either by double-clicking the file, dragging the file into
        the app, or clicking on the hub name in the recent history list inside
        the app.
      </p>

      <h2>What happens to my video files?</h2>
      <p>
        All your videos remain unchanged. Video Hub App only takes screenshots
        of your videos so you can preview them at any time. If the videos are
        located on an external hard drive you will still be able to see them in
        Video Hub App whether the hard drive is connected or not. But clicking
        the video will only open it in your video player if the external hard
        drive is connected.
      </p>

      <h2>What happens when my videos change?</h2>
      <p>
        If you add, delete, or rename any videos, just click{" "}
        <em>Rescan directory</em> and Video Hub App will update its internal
        collection to match your changes.
      </p>
      <p>
        Until you <em>Rescan directory</em>, all the old videos will still show
        up in Video Hub App, but clicking on a video you have deleted or renamed
        will no longer play the video. Rescanning the directory is quick, and
        afterwards Video Hub App will show an updated view of your videos.
      </p>

      <h2>What file types does the app support?</h2>
      <p>
        {" "}
        264, 265, 3g2, 3gp, avi, divx, flv, h264, h265, hevc, m4a, m4v, m4v,
        mkv, mov, mp2, mp4, mpe, mpeg, mpg, ogg, rm, vob, webm, wmv
      </p>

      <h2>Can I import more than one folder into a single hub?</h2>
      <p>
        Video Hub App 3 (to be released late 2020) will let you do that easily.
      </p>
      <p>
        Video Hub App 2 will create a hub from all the folders that are inside a
        folder you choose. There is no way to tell Video Hub App 2 to import from
        more than one source (starting) folder.
      </p>
      <p>There are two possble solutions:</p>
      <ul>
        <li>
          Create several hubs, and you can switch between them with 1 click
          (just toggle in settings to show recent hubs) in the left sidebar.
        </li>
        <li>
          Create a symlink to all the folders you'd like within one folder, and
          create a hub from that one folder.
        </li>
      </ul>

      <h2>Can I sort videos by date?</h2>
      <p>
        Please go to settings, click the "Search settings" tab, scroll to
        "Sorting options in the dropdown" section, and click "Date Modified" to
        enable the sorting option.
      </p>

      <h2>Can I change the default thumbnail?</h2>
      <p>
        You can drag & drop an image from your compter onto any video, and the
        default screenshot will be replaced.
      </p>
      <p>
        You can choose any one of the other extracted screenshots to be the
        default screenshot by opening the sheet / details vieow of a video
        (right click -&gt; details, or click on top-right corner of thumbnail in
        Thumbnails view) and clicking the top-right corner (star) of any
        screenshot.
      </p>

      <h2>Playlist?</h2>
      <p>
        You can enable the "Play all" button in settings. When you click on it,
        all the videos currently showing in your gallery will open as a playlist
        with whatever program your computer uses to open <em>.pls</em> files.
        Just make your video player the default program for opening
        <em>.pls</em> files.
      </p>

      <h2>Keyboard shortcuts?</h2>
      <p>
        See the "shortcuts" tab in the settings menu for the full list of
        keyboard shortcuts.
      </p>
    </section>
  </Layout>
)

export default injectIntl(FAQ)
