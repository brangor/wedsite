import PropTypes from 'prop-types'
import React from 'react'
import "98.css";
import MessageBox from './MessageBox';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
      <MessageBox
        className="inner"
        title="alert"
        message={
        <>
        <h3>Amy and Brandon <br/> are getting married</h3>
        <nav>
          <div className="buttonBox">
            <button
            className="optionButton"
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              intro
            </button>
            <button
              className="optionButton"
              onClick={() => {
                props.onOpenArticle('work')
              }}
            >
              work
            </button>
            <button
              className="optionButton"
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              about
            </button>
            <button
              className="optionButton"
              onClick={() => {
                props.onOpenArticle('contact')
              }}
            >
              contact
            </button>
          </div>
        </nav>
        </>
        }
      >
      </MessageBox>
      </div>
    </div>

  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
