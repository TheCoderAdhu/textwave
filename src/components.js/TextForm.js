import React, { useState } from "react";
function TextForm(props) {
  const [Text, setText] = useState("");
  const Handleonchange = (event) => {
    setText(event.target.value);
  };
  const ToUpperCase = () => {
    setText(Text.toUpperCase());
    if (Text.length >= 1) {
      props.showAlert("Text Has Converted To UpperCase");
    }
  };
  const ToLowerCase = () => {
    setText(Text.toLowerCase());
    if (Text.length >= 1) {
      props.showAlert("Text Has Converted To LowerCase");
    }
  };
  const ClearText = () => {
    setText("");
    if (Text.length >= 1) {
      props.showAlert("Text cleared successfully");
    }
  };
  const ClearExtraSpace = () => {
    let NewText = Text.split(/[ ]+/);
    setText(NewText.join(" "));
    if (Text.length >= 2) {
      props.showAlert("Extra space has been removed ");
    }
  };
  const CopyText = () => {
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    if (Text.length >= 1) {
      props.showAlert("Text copied to clipboard ");
    }
  };
  return (
    <div
      className=" mb-3 container "
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        <h2 className="mt-3"> {props.Heading}</h2>
      </label>
      <textarea
        className="form-control"
        id="Mybox"
        rows="8"
        value={Text}
        onChange={Handleonchange}
        style={{
          backgroundColor: props.mode === "dark" ? "#010101" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      ></textarea>
      <button
        type="button"
        className="btn btn-primary my-3"
        onClick={ToUpperCase}
      >
        ConvertToUpperCase
      </button>
      <button
        type="button"
        className="btn btn-primary my-3 mx-2"
        onClick={ToLowerCase}
      >
        ConvertToLowerCase
      </button>
      <button
        type="button"
        className="btn btn-primary my-3 mx-1 "
        onClick={ClearText}
      >
        ClearText
      </button>
      <button
        type="button"
        className="btn btn-primary my-3 mx-1"
        onClick={ClearExtraSpace}
      >
        ClearExtraSpace
      </button>
      <button
        type="button"
        className="btn btn-primary my-3 mx-1"
        onClick={CopyText}
      >
        CopyText
      </button>
      <div className="my-10 "></div>
      <h2>Text Summary</h2>
      <p>
        Total Words: {Text.split(" ").length} and Total Characters:{" "}
        {Text.length}
      </p>

      <h3 className="mt-10">Preview</h3>
      <p>{Text}</p>
    </div>
  );
}

export default TextForm;
