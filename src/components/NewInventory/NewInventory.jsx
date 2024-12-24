import "./NewInventory.css";
import UpperNavbar from "../UpperNavbar/UpperNavbar";
import SideNavbar from "../SideNavbar/SideNavbar";
import Home from "../../images/Home.png";
import HeroSection from "../HeroSection/HeroSection";
import Button from "../Utility/Button/Button";
import NewItemDetailRight from "./NewItem/NewItemDetail1";
import NewItemDetailLeft from "./NewItemDetail2/NewItemDetail2";
import UserProgress from "../Store/UserProgressCtx";
import { useContext, useRef, useState } from "react";
import upload from "../../images/Image.png";
import cloud from "../../images/fi_upload-cloud.png";

export default function NewInventory() {
  const userProgressCtx = useContext(UserProgress);
  const userprogressCtx = useContext(UserProgress);
  const [file, setFile] = useState([]);
  const [bigFile, setBigFile] = useState([]);
  const ref = useRef(null);

  function handleData(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
  }

 
  function handleBigData(e) {
    setBigFile(URL.createObjectURL(e.target.files[0]));
  }
  
  function handleSubmit(event) {
    event.preventDefault();

    function formUpdate() {
      const element = ref.current.elements;
      const data = {
        id: userProgressCtx.itemsData.length + 1,
        productName: element.name.value,
        category: element.category.value,
        unitPrice: element.selling.value,
        inStock: element.quantity.value,
        discount: element.discountValue.value,
        totalValue:
          Number(element.quantity.value) * Number(element.selling.value),
        action: (
          <select className="select-publish">
            <option>Publish</option>
            <option>Upublish</option>
          </select>
        ),
        status: "Publish",
        image: (
          <img
            style={{
              overflow: "hidden",
              objectFit: "cover",
              borderRadius: "8px",
              width: "2.2rem",
              height: "2.2rem",
              backgroundSize: "cover",
            }}
            src={bigFile}
            alt="Iphone-icon"
          />
        ),
      };
  
      userProgressCtx.setItemsData([...userProgressCtx.itemsData, data]);
    }

   formUpdate();
   userprogressCtx.handlePreview();
  }
  

  return (
    <form onSubmit={handleSubmit} ref={ref}>
      <div className="homepage">
        <SideNavbar />
        <div className="main-content">
          <UpperNavbar />
          <div className="home-nav">
            <span className="home-icon">
              <img
                src={Home}
                alt="Home icon"
                onClick={userprogressCtx.handleMainPage}
              />
            </span>
            <span className="home-caption">
              /
            </span>
            <span style={{ color: "blue" }} className="home-caption">
              <p>New Inventory</p>
            </span>
            <span className="home-caption">
              /
            </span>
            <span className="home-caption">
              <p onClick={userprogressCtx.handlePreview}>View Inventory</p>
            </span>
          </div>
          <HeroSection
            children1="New Inventory Item"
            children2={
              <>
                <Button classname="blue">
                  Save & Publish
                </Button>
              </>
            }
          />
          <>
            <div className="section">
              <div className="main-section-1">
                <NewItemDetailRight />
                <NewItemDetailLeft />
              </div>
              <div className="main-section-2">
                <div
                  style={{
                    width: "100%",
                    height: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="additional" style={{ width: "100%" }}>
                    <label
                      style={{
                        padding: "4px",
                        fontSize: "13px",
                        color: "#707071",
                      }}
                      htmlFor="heading"
                    >
                      Additional Images
                    </label>
                  </div>
                  <div className="big-image">
                    <label
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "0.7rem",
                        alignItems: "center",
                      }}
                      htmlFor="input-img"
                      onClick={() =>
                        document.querySelector("#img_input1").click()
                      }
                    >
                      <div
                        style={{ contentVisibility: `${bigFile.length === 0 ? "visible" : "hidden"}`,
                          backgroundImage: `url(${bigFile})`,
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                          backgroundSize: "cover",
                        }}
                        className="big-upload-file"
                      >
                        <img src={upload} alt="Upload" />
                        <div
                          style={{
                            marginTop: "6px",
                            display: "flex",
                            gap: "1rem",
                          }}
                        >
                          <img src={cloud} alt="cloud icon" />
                          <span style={{ color: "rgb(62, 122, 200)" }}>
                            Upload Image
                          </span>
                        </div>
                        <div
                          style={{
                            color: " #8B8D97",
                            fontSize: "12px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <span>Upload a cover image for your product.</span>
                          <div
                            style={{
                              color: " #8B8D97",
                              textAlign: "center",
                              fontSize: "12px",
                            }}
                          >
                            File Format jpeg, png Recommened Size 600x600 (1:1)
                          </div>
                        </div>
                      </div>
                      <input required
                        onChange={handleBigData}
                        name="file"
                        style={{ display: "none" }}
                        accept="image/jpeg , image/png , /image/jpg"
                        type="file"
                        id="img_input1"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <div style={{ width: "100%" }}>
                    <label
                      style={{
                        padding: "4px",
                        fontSize: "13px",
                        color: "#707071",
                      }}
                      htmlFor="heading"
                    >
                      Additional Images
                    </label>
                  </div>
                  <div className="small-images-container">
                    {file.map((imgUpload) => (
                      <div
                        style={{
                          display: "flex",
                          overflow: "hidden",
                          objectFit: "contain",
                        }}
                        key={imgUpload}
                        className="small-container"
                      >
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={imgUpload} alt="Upload"
                        />{" "}
                      </div>
                    ))}
                    <div className="small-container">
                      <label
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          gap: "0.7rem",
                          alignItems: "center",
                        }}
                        htmlFor="input-img"
                        onClick={() =>
                          document.querySelector("#img_input").click()
                        }
                      >
                        <img src={upload} alt="Upload" />
                        <div
                          style={{
                            fontSize: "12px",
                            display: "flex",
                            gap: "1rem",
                          }}
                        >
                          <img src={cloud} alt="cloud icon" />
                          <span style={{ color: "rgb(62, 122, 200)" }}>
                            Upload Image
                          </span>
                        </div>

                        <input
                          onChange={handleData}
                          name="file"
                          style={{ display: "none" }}
                          accept="image/jpeg , image/png , /image/jpg"
                          type="file"
                          id="img_input"
                        />
                      </label>
                    </div>

                    <div
                      style={{ background: "white", border: "2px dashed gray" }}
                      className="small-container"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </form>
  );
}
