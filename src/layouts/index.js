import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
//import Search from "../pages/search"
import "./index.css";
import "../styles/layout-overide.css";
//import AdSense from 'react-adsense';
//import GoogleAd from '../templates/google_ad';

import Media from "react-media";
const style = {
  marginTop: '15px',
  marginBottom: '20px'
};
const Header = () => (
  <div
    style={{
      background: "#f5f5f5",
      marginBottom: "3rem",
      borderBottom: "2px solid #e6e6e6"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center", fontSize: "18px" }}>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none"
          }}
        >
          A Nerd's Word
        </Link>
      </h1>
    </div>
  </div>
);

const Sidebar = props => (
  <div
    style={{
      border: "2px solid #e6e6e6",
      maxWidth: 960,
      padding: "0.5rem",
      marginBottom: "25px"
    }}
  >
    <strong>{props.title}</strong> {props.description}
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="A Nerd's Word"Link
      meta={[
        { name: "description", content: "Brad's Blog about all things nerdy." },
        { name: "keywords", content: "Blog, Magic, MTG, Software, Games, Anime, TV, Books," }
      ]}

    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {children()}
              </div>

              <div style={{ flex: 1 }}>
                <Sidebar
                  title="A Nerd's Word"
                  description="A blog about a bunch of nerdy things: Anime, Books, Board Games, Magic: The Gathering, Software Engineering, and anything else that comes to mind."
                />
                <Sidebar
                  title="About The Author"
                  description={<p>Bradley Woods is a full-stack software engineer, author, and all-around nerdy guy. His debut novel, Unbounded, is available <a href='http://amazon.com/dp/B0873YKZ5J' target='_blank'>here</a>.</p>}
                />
                <Sidebar
                  title={<Link to="/tags">Browse All Tags</Link>}
                  description=""
                />
              </div>
            </div>
          )
        }
      </Media>
      <footer>
        <a href="https://www.facebook.com/bradleywoodsauthor/" target="_blank">Contact me on Facebook</a> | <a href="https://twitter.com/bradwoodsbooks" target="_blank">Follow me on Twitter</a> | <a href='http://amazon.com/dp/B0873YKZ5J' target='_blank'>Buy my book</a> | <a href='https://bradleywoodsauthor.com/' target='_blank'>Website</a>
        <div></div>
        <div>Copyright © 2020 Bradley Woods. All Rights Reserved.</div>
      </footer>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
