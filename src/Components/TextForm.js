import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Converted to Upper case", "success");
  };

  const handlelowclick = () => {
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("Converted to Lower case", "success");
  };

  const handleclearclick = () => {
    let newText = "";
    settext(newText);
    props.showAlert("Text is cleared", "success");
  };

  const onChangeclick = (event) => {
    settext("");
    settext(event.target.value);
  };

  const handlecopy = () => {
    let copyText = document.getElementById("box");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text copied", "success");
  };

  const [text, settext] = useState("");
  // text = "hhh" // wrong way
  return (
    <>
      <div className="mb-3">
        <label
          htmlFor="mybox"
          className="form-label my-2"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {props.area}
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={onChangeclick}
          id="box"
          rows="7"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleupclick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleclearclick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlecopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
