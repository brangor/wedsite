import PropTypes from 'prop-types'
import React from 'react'
import "98.css";

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h3>Amy and Brandon are getting married</h3>
        <p>
          Hey, what's the biz on this wedding situation?
        </p>
      </div>
    </div>
    <nav>
      <div className="buttonBox">
            <button
            className="optionButton"
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Intro
            </button>
            <button
              className="optionButton"
              onClick={() => {
                props.onOpenArticle('work')
              }}
            >
              Work
            </button>
            <button
              className="optionButton"
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              About
            </button>
            <button
              className="optionButton"
              onClick={() => {
                props.onOpenArticle('contact')
              }}
            >
              Contact
            </button>
          </div>

    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
