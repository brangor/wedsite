import * as React from "react";

import PropTypes from 'prop-types';
import "98.css";

const pastel98 = {
  titleBar: {
    gradient: ['#42C0C0','#D0A5BF'],
    text: '#CCFFFF',
  },
  window: {
    background: '#F4C1CA',
    altBackground: '#A2DBD2',
    inputBox: '#CCFFFF',
  },
  colors: {
    pink: '#F4C1CA',
    green: '#CCFFFF',
    aqua: '#42C0C0',
    purple: '#D0A5BF',
  }
}

const messageBodyStyle = {
  fontSize: '1.4rem',
}

const titleBarStyle = {
  background: `linear-gradient(90deg, ${pastel98.titleBar.gradient[0]}, ${pastel98.titleBar.gradient[1]}`,
  height: '2rem',
  fontSize: '1.2rem',
}
const titleBarButtonStyle = {
  height: '1.6rem',
  minWidth: 'unset !important',
  width: '1.6rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  boxSizing: 'border-box',
  display: 'block',
  margin: 0,
  padding: '0 !important',
  backgroundImage: 'unset',
}
const messageStyle = {
  background: pastel98.window.background,
}
const optionButtonStyle = {
  width: '8rem',
  height: '3.3rem',
  fontSize: '1.2rem',
}

const MessageBox = ({ title, message, buttonText, buttonFunction, closeIt}) => {

  return (
    <div style={messageStyle} className="window">
      <div className="title-bar" style={titleBarStyle} >
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button id="closeButton" onClick={closeIt} className={titleBarButtonStyle} aria-label="CloseIt">X</button>
        </div>
      </div>

      <div className="window-body">
        <p style={{ textAlign: "center", ...messageBodyStyle }}>{message}</p>
        { buttonText && (
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={buttonFunction} style={optionButtonStyle}>{buttonText}</button>
        </div>
        )}
      </div>
    </div>
  );
};

MessageBox.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  buttonFunction: PropTypes.func,
  closeIt: PropTypes.func,
}

MessageBox.defaultProps = {
  title: 'title',
  message: 'blah',
}

export default MessageBox;
