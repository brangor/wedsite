import * as React from "react";
import "98.css";

const MessageBox = ({ title, message, buttonText, onButtonClick }) => {
  return (
    <div style={{ width: 600 }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p style={{ textAlign: "center" }}>{message}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => onButtonClick}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
