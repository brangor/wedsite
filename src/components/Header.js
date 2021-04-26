import PropTypes from 'prop-types'
import React from 'react'
import "98.css";
import MessageBox from './MessageBox';

const Header = props => {
  return (
    <>
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="content">
        <div className="inner">
        <MessageBox
          className="inner"
          title="alert"
          header="Amy and Brandon"
          closeIt={() => {props.onOpenArticle('memberZone')}}
          message={
          <>
          <h2>are getting married</h2>
          <nav>
            <div className="buttonBox">
              <button
              className="optionButton"
                onClick={() => {
                  props.onOpenArticle('when')
                }}
              >
                when
              </button>
              <button
                className="optionButton"
                onClick={() => {
                  props.onOpenArticle('where')
                }}
              >
                where
              </button>
              <button
                className="optionButton"
                onClick={() => {
                  props.onOpenArticle('gallery')
                }}
              >
                love gallery
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
  </>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
