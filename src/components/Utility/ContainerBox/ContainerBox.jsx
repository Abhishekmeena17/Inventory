import "./ContainerBox.css";

export default function ContainerBox({
  classname,
  boxLogo,
  options,
  valueheading1,
  value1,
  valueheading2,
  value2,
  valueheading3,
  value3,
  pClass,
  iconBack,

}) {
  return (
    <div className={`container-box ${classname}`}>
      <div className="container-box-upper">
        <div className={`box-upper-icon ${iconBack}`}>
          <img src={boxLogo} alt="folder icon" />
        </div>
        <div className="box-upper-options">{options}</div>
      </div>
      <div className="container-box-lower">
        <div className="box-lower-values">
          <p className={pClass}>{valueheading1}</p>
          <span className="value1">{value1}</span>
        </div>
        <div className="box-lower-values">
          <p>{valueheading2}</p>
          <span className="value1 value2">{value2}</span>
        </div>
        <div className="box-lower-values">
          <p>{valueheading3}</p>
          <span className="value1">{value3}</span>
        </div>
      </div>
    </div>
  );
}
