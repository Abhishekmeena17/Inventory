import "./NewItemDetail2.css";
import boldImg from "../../../images/fi_bold.png";
import underlineImg from "../../../images/Vector (1).png";
import italicImg from "../../../images/fi_italic.png";
import centre from "../../../images/fi_align-justify.png";
import leftImg from "../../../images/fi_align-left.png";
import rightImg from "../../../images/fi_align-right.png";
import link from "../../../images/fi_link-2.png";
import ToggleBtn from "../../Utility/ToggleBtn/ToggleBtn";
import { useState } from "react";

export default function NewItemDetailLeft() {
  const [bold, setBold] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [italic, setItalic] = useState(false);
  const [left, setLeft] = useState(false);
  const [center, setCenter] = useState(false);
  const [right, setRight] = useState(false);
  const [viewReturn, setViewReturn] = useState(true);

  function handleBold() {
     bold === false ? setBold(true) : setBold(false);
  }

  function handleUnderline() {
    underline === false ? setUnderline(true) : setUnderline(false);
 }

 function handleItalic() {
  italic === false ? setItalic(true) : setItalic(false);
}

function handleLeft() {
  left === false ? setLeft(true) : setLeft(false);
  setCenter(false);
  setRight(false);
}

function handleCenter() {
  center === false ? setCenter(true) : setCenter(false);
  setRight(false);
  setLeft(false);
}

function handleRight() {
  right === false ? setRight(true) : setRight(false);
  setCenter(false);
  setLeft(false);
}


function handleViewReturn() {
  viewReturn === false ? setViewReturn(true) : setViewReturn(false);
  
}

const textAreaClass = `textarea ${bold === true ? "bold" : ""} ${underline === true ? "underline" : ""} ${italic === true ? "italic" : ""} ${left === true ? "text-left" : ""} ${center === true ? "text-center" : ""} ${right === true ? "text-right" : ""}`;

  return (
    <>
      <div className="form form2">
        <div className="input-area">
          <textarea name="description" placeholder="Short Discription" />
        </div>
        <div className="input-area-label">
          <label style={{ paddingBottom: "2px" }} htmlFor="heading">
            Product Long Description
          </label>
          <div style={{marginBottom: "1rem"}} className="input-area">
            <div className="text-deco">
              <div className="text-decoration">
                <select>
                  <option>Arial</option>
                  <option>Calibri</option>
                  <option>Georgia</option>
                  <option>Poppin</option>
                </select>

                <select>
                  <option>Paragraph</option>
                  <option>Line</option>
                  <option>Sentence</option>
                </select>
              </div>
              <div className="text-decoration">
                <img src={boldImg} alt="icons" onClick={handleBold} className={`${bold === true ? "border" : ""}`} />
                <img src={underlineImg} alt="icons" onClick={handleUnderline} className={`${underline === true ? "border" : ""}`} />
                <img src={italicImg} alt="icons" onClick={handleItalic} className={`${italic === true ? "border" : ""}`} />
                <img src={centre} alt="icons" onClick={handleCenter} className={`${center === true ? "border" : ""}`} />
                <img src={leftImg} alt="icons" onClick={handleLeft} className={`${left === true ? "border" : ""}`} />
                <img src={rightImg} alt="icons" onClick={handleRight} className={`${right === true ? "border" : ""}`} />
                <img src={link} alt="icons" />
              </div>
            </div>
            <textarea
              className={textAreaClass}
              name="longDiscription"
              placeholder="Your text goes here"
            />
            <label style={{ color: "#bababe" }} htmlFor="heading">
              Add a long description
            </label>
          </div>
        </div>
        <div className="input-field toggle-button">
          <span style={{ color: "#97989d" }}>Return Policy</span>
          <div className="toggle">
            <span>Add Discount</span>
            <ToggleBtn onclick={handleViewReturn}/>
          </div>
        </div>
        <div className={viewReturn ? "" : "hidden"}>
        <label style={{ padding: "4px", fontSize: "13px", color: "#707071" }} htmlFor="heading">
            Date Addred
          </label>
        <div className="input-field prices date-time">
          <input
            style={{ color: "#97989d" }}
            type="date"
            className="small-input"
            name="dateAdded"
            placeholder="11/08/2023"
          />
          <input
            style={{ color: "#97989d" }}
            type="time"
            className="small-input"
            name="time"
            placeholder="Time"
          />
        </div>
        </div>
      </div>
    </>
  );
}
