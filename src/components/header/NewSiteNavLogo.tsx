import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import { css } from '@emotion/react';
//import { FixedObject } from 'gatsby-image';
import {  StaticImage } from "gatsby-plugin-image"
import config from '../../website-config';
//import { GatsbyImage } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser';



export const NewSiteNavLogo = () => (
  <StaticQuery
    query={graphql`
      {
      logo: file(relativePath: {eq: "Wema-Logos/Wemalabs-scope-one-35-bgc.png"}) {
        childImageSharp {
         gatsbyImageData(layout: FIXED) 
        }
      }
    }
  `}
    render={ (data) => (
      <Link activeClassName="site-nav-logo" css={SiteNavLogoStyles} to="/">
        {data.logo ? (
          <StaticImage src="../../content/Wema-Logos/Wemalabs-scope-one-35-bgc.png" alt={config.title} />
        ) : (
          config.title
        )}
      </Link>
    )}
  />
);



const SiteNavLogoStyles = css`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: 32px;
  padding: 12px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: none;

  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 21px;
  }
`;

