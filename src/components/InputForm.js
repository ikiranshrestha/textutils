import React, { useState } from "react";
import PropTypes from "prop-types";

export default function InputForm(prop) {
  const [text, setText] = useState();

  const handleUpperCase = () => {
    let txt = text.toUpperCase();
    setText(txt);
  };

  const handleLowerCase = () => {
    let txt = text.toLowerCase();
    console.log(txt);
    setText(txt);
  };

  const handleTextAnalyzer = (event) => {
    setText(event.target.value);
  };

  const setChanged = (event) => {
    setText(event.target.value);
  };

  const copyText = () => {
    /* Get the text field */
    var copyText = document.getElementById("processedTextArea");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  };

  const replaceNewLineWithComma = () => {
    let txt = text;
    // let result = text.replace("Microsoft", "W3Schools");
    var res = txt.replace(/\n/g, ", ");
    setText(res);
  };

  return (
    <div className="row">
      <div className="com-sm-5">
        <div className="mb-3">
          <label htmlFor="textArea" className="form-label">
            {prop.heading}
          </label>
          <textarea
            className="form-control"
            onChange={handleTextAnalyzer}
            id="textArea"
            rows="8"
            placeholder={prop.placeholder}
          ></textarea>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <button className="btn btn-primary" onClick={handleUpperCase}>
              Uppercase
            </button>
          </div>
          <div className="col-sm-2">
            <button className="btn btn-primary" onClick={handleLowerCase}>
              lowercase
            </button>
          </div>
          <div className="col-sm-2">
            <button
              className="btn btn-primary"
              onClick={replaceNewLineWithComma}
            >
              New Line to Comma
            </button>
          </div>
        </div>
      </div>
      <div className="com-sm-5 mt-5">
        <div className="mb-3">
          <div className="row">
            <div className="col-sm-2">
              <label htmlFor="textArea" className="form-label">
                {prop.heading2}
              </label>
            </div>
            <div className="col-sm-6">
              <button className="btn btn-sm btn-primary" onClick={copyText}>
                COPY
              </button>
            </div>
          </div>

          <textarea
            className="form-control"
            onChange={setChanged}
            id="processedTextArea"
            rows="8"
            value={text}
            placeholder={prop.placeholder2}
            readOnly="true"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

// InputForm.propTypes = {heading: PropTypes.string.isRequired, placeholder: PropTypes.string}
InputForm.propTypes = {
  heading: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
