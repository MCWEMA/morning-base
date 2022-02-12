# gatsby-casper

Demos:

- Gatsby <https://morning-base.gatsbyjs.io/>
- netlify <https://morning-base.netlify.app/>
- vercel <https://morning-base.vercel.app/>

This is a static blog generator and starter gatsby3 repo. A port of [Morning](https://github.com/MCWEMA/morning-base) v4 a theme from [Ghost](https://ghost.org/) for [GatsbyJS](https://www.gatsbyjs.org/) using [TypeScript](https://www.typescriptlang.org/).

## Getting Started

Clone this repo.

```
git clone https://github.com/MCWEMA/morning-base.git --depth=1
```

Remove .git folder and setup a new one

```
rm -rf .git && git init
```

Edit website-config.ts with your website settings.
Either disable subscribe or setup a mailchimp list and add the form action and hidden field input name.

Now push to whatever repo you want!

### Progress

- [x] emotion / component styles
- [x] home page
- [x] tag page
- [x] author page
- [x] blog page
  - [x] subscribe form - using [mailchimp](https://mailchimp.com)
  - [ ] full width images in markdown? - not sure if possible
  - [x] multiple post authors
- [x] 404 page
- [x] subscribe modal/overlay
- [x] rss feed (on production build)
- [ ] polish ✨
  - [x] meta tags
  - [x] page titles
  - [ ] pagination

### Deploy to Netlify

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MCWEMA/morning-base)

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MCWEMA/morning-base-vercel)

### Deploy to Gatsby

[![Deploy with Gatsby](https://camo.githubusercontent.com/fda7a8fe64d0351d9eb4aff4446b92368c7d5d9a55889fd16041eb393c5a697d/68747470733a2f2f7777772e6761747362796a732e636f6d2f6465706c6f796e6f772e737667)](https://www.gatsbyjs.com/cloud/)

## How to configure Google Analytics

Edit `gatsby-config.js` and add your tracking ID

```javascript
{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // Here goes your tracking ID
      trackingId: 'UA-XXXX-Y',
      // Puts tracking script in the head instead of the body
      head: true,
      // IP anonymization for GDPR compliance
      anonymize: true,
      // Disable analytics for users with `Do Not Track` enabled
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ['/preview/**'],
      // Specifies what percentage of users should be tracked
      sampleRate: 100,
      // Determines how often site speed tracking beacons will be sent
      siteSpeedSampleRate: 10,
    },
},
```

## How to edit your site title and description

Edit `gatsby-config.js` section `siteMetadata`

```javascript
 siteMetadata: {
    title: 'My awesome site name',
    description: 'This is a description for my site',
    siteUrl: 'https://mysite.com', // full path to blog - no ending slash
  },
```

## How to adjust pagination

In `gatsby-node.js`, edit the `postsPerPage` constant. The default value is
six posts per page.
