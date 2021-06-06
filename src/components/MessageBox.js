import * as React from "react";

import PropTypes from 'prop-types';

const MessageBox = ({ title, header, message, hasBackButton, closeIt}) => {

  return (
    <div className="window message-box">
      <div className="title-bar">
        <div className="title-bar-text">{`${title}.exe`}</div>
        <div className="title-bar-controls">
          <button id="closeButton" onClick={closeIt} className="message-box__title-bar-button" aria-label="CloseIt">X</button>
        </div>
      </div>

      <div className="window-body">
        <h2 className="message-box__header">{header}</h2>
        <p className="message-box__header-text message-box__body">{message}</p>
        { hasBackButton && (
        <div className="field-row" className="buttonBox">
          <button onClick={closeIt} className="message-box__button">Home</button>
        </div>
        )}
      </div>
    </div>
  );
};

MessageBox.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  hasBackButton: PropTypes.bool,
  closeIt: PropTypes.func,
  header: PropTypes.string,
}

MessageBox.defaultProps = {
  title: 'title',
  header: 'title',
  message: 'blah',
  hasBackButton: false,
}

export default MessageBox;
