import PropTypes from 'prop-types';
import React from 'react';
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
          header="Amy and Brandon are getting married"
          closeIt={() => {props.onOpenArticle('memberZone')}}
          message={
          <>
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
                  props.onOpenArticle('schedule')
                }}
              >
                schedule
              </button>
            </div>
            <div className="buttonBox">
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
                RSVP
              </button>
              <button
                className="optionButton"
                onClick={() => {
                  props.onOpenArticle('contribute')
                }}
              >
                Support us
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
