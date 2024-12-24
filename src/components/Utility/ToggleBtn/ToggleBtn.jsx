
import "./ToggleBtn.css";

export default function ToggleBtn({onclick}) {

  return (
    <>
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider round" onClick={onclick}></span>
      </label>
    </>
  );
}
