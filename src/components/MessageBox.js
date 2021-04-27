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
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center'
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
const headerStyle={
  textShadow: '1px 2px black',
  textAlign: 'center',
  fontFamily: '"Lato", sans-serif',
  '-webkit-text-stroke-width': '1px',
  '-webkit-text-stroke-color': 'black',
}
const messageStyle = {
  background: pastel98.window.background,
}
const optionButtonStyle = {
  width: '8rem',
  height: '3.3rem',
  fontSize: '1.2rem',
  marginTop: '1.2rem',
  marginBottom: '1rem',
}

const MessageBox = ({ title, header, message, buttonText, buttonFunction, closeIt}) => {

  return (
    <div style={messageStyle} className="window">
      <div className="title-bar" style={titleBarStyle} >
        <div className="title-bar-text">{`${title}.exe`}</div>
        <div className="title-bar-controls">
          <button id="closeButton" onClick={closeIt} className={titleBarButtonStyle} aria-label="CloseIt">X</button>
        </div>
      </div>

      <div className="window-body">
        <h2 style={headerStyle}>{header}</h2>
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
  header: PropTypes.string,
}

MessageBox.defaultProps = {
  title: 'title',
  header: 'title',
  message: 'blah',
}

export default MessageBox;
