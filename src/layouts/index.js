import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Search from "../pages/search"
import "./index.css";
import "../styles/layout-overide.css";
import AdSense from 'react-adsense';
import GoogleAd from '../templates/google_ad';

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
    <strong>{props.title}.</strong> {props.description}
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="A Nerd's Word"
      meta={[
        { name: "description", content: "Bryan's Blog about all things nerdy." },
        { name: "keywords", content: "Blog, Magic, MTG, Software, Games, Anime, TV, Books," }
      ]}

    />
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
                  description="Bryan Benson is a full-stack software engineer, writer, and all-around nerdy guy."
                />
              </div>
            </div>
          )
        }
      </Media>
      <GoogleAd 
            client="ca-pub-7802158485711596" 
            slot="7802158485711596" 
            format="auto" 
            wrapperDivStyle={style}
          />
      <footer>
        <a href="https://www.facebook.com/bryan.benson.9634" target="_blank">Questions, comments, concerns? Contact me on Facebook!</a>
        <div>Copyright © 2018 Bryan Joshua Benson. All Rights Reserved.</div>
      </footer>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;