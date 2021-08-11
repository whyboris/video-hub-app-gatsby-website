# Video Hub App 3

[Video Hub App](https://videohubapp.com/) is the fastest way to browse, search, and organize videos on your computer. Think of it like YouTube for videos on your computer: browse, search, and preview. Works on Windows, Mac, and Linux!

![video-hub-app](https://user-images.githubusercontent.com/17264277/82097107-3ed91700-96d0-11ea-8679-87fa3e07cd0b.jpg)

## This repository

This is a repository just to keep a safe copy of the current public website.

It uses [Gatsby](https://www.gatsbyjs.com/) for static HTML generation.

Just `npm install` and `npm start` :tada:

## Icons

Custom icons file generated from [typicons.font](https://github.com/stephenhutchings/typicons.font) by extracting only the icons I need using [fonttools](https://pypi.org/project/fonttools/) with this command:

```sh
pyftsubset typicons.woff \
  --unicodes=U+e065,U+e08a,U+e08d,U+e091,U+e0a5,U+e0bf,U+e0e5,U+e0f9,U+e109,U+e088,U+e032 \
  --output-file=typicons-custom.woff2 \
  --flavor=woff2
```

Thanks to [StackOverflow](https://stackoverflow.com/a/48492035/5017391) for the cool trick!

## Fonts

If ever the custom font is changed, run the `preload-fonts` script for the [plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-preload-fonts/)
