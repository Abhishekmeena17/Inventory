import "./ViewInventory.css";
import UpperNavbar from "../UpperNavbar/UpperNavbar";
import SideNavbar from "../SideNavbar/SideNavbar";
import Home from "../../images/Home.png";
import HeroSection from "../HeroSection/HeroSection";
import Button from "../Utility/Button/Button";
import ContainerBox from "../Utility/ContainerBox/ContainerBox";
import bag from "../../images/Bag.png";
import pie from "../../images/fi_pie-chart.png";
import tShirt from "../../images/image 1.png";
import eye from "../../images/fi_eye.png";
import UserProgress from "../Store/UserProgressCtx";
import { useContext } from "react";

import MainSectionHeader from "../MainSectionHeader/MainSectionHeader";
import OrderTable from "../Utility/OrderTable/OrderTable";
import orderData from "../Data/orderData";

export default function ViewInventory() {
    const userprogressCtx = useContext(UserProgress);


    const completeItem = orderData.filter((obj) => obj.status === "Completed").length;
    const totalOrder = orderData.length;

  return (
    <>
      <div className="homepage">
        <SideNavbar />
        <div className="main-content">
          <UpperNavbar />
          <div className="home-nav">
            <span className="home-icon">
              <img src={Home} alt="Home icon"  onClick={userprogressCtx.handleMainPage} />
            </span>
            <span className="home-caption">/</span>
            <span className="home-caption">
              <span onClick={userprogressCtx.handleCreateInventory}>New Inventory</span>
            </span>
            <span className="home-caption">/</span>
            <span style={{color:"blue"}} className="home-caption">
              <span>View Inventory</span>
            </span>
          </div>
          <HeroSection
            children1={
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <span style={{ marginTop: "4px", fontWeight: "bolder" }}>
                  <span>
                    Polo T-Shirt
                  </span>
                </span>
                <span
                  className="long-heading"
                  style={{ display: "flex", alignItems: "center", gap: "2px" }}
                >
                  <span
                    className="long-heading"
                    style={{ paddingTop: "2px", fontWeight: "bolder" }}
                  >
                    Date Added
                  </span>
                  <span className="long-heading">12 Sept 2022 - 12:55 pm</span>
                </span>
                <span
                  className="long-heading"
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <span
                    className="long-heading"
                    style={{ paddingTop: "2px", fontWeight: "bolder" }}
                  >
                    Product URL
                  </span>
                  <span className="long-heading">1nancystores.com/polo-shirt</span>
                </span>
              </div>
            }
            children2={
              <>
                <Button onClick={userprogressCtx.handleCreateInventory} classname="black">Edit Product</Button>
                <Button classname="red-back">Unpublish Product</Button>
              </>
            }
          />
          <div className="boxesContainer1">
            <div className="medium-box">
              <div className="medium-box-img">
                <img src={tShirt} alt="Product" />
              </div>
              <ContainerBox
                classname="white medium-container-box"
                iconBack="iconBack-blue"
                boxLogo={bag}
                options={
                  <span
                    style={{
                      fontSize: "12px",
                      color: "green",
                      background: "rgb(198, 233, 198)",
                      padding: "2px",
                      borderRadius: "5px",
                    }}
                  >
                    Published
                  </span>
                }
                valueheading1="Price"
                value1="N25,000.00"
                valueheading2="In-Stock"
                value2={
                  <>
                    <span className="value">20</span>
                    {/* <span className="small-value">86%</span> */}
                  </>
                }
              />
            </div>
            <div className="medium-box-2">
              <ContainerBox
                classname="white small-container-box"
                boxLogo={pie}
                iconBack="iconBack-blue"
                options={
                  <select className="options" name="duration">
                    <option>All-time</option>
                    <option>Other</option>
                  </select>
                }
                valueheading1="Total Orders"
                value1="N50,000.00"
              />
              <ContainerBox
                classname="white small-container-box"
                boxLogo={eye}
                iconBack="iconBack-orange"
                options={
                  <select className="options" name="duration">
                    <option>All-time</option>
                    <option>Other</option>
                  </select>
                }
                valueheading1="Views"
                value1="1,200"
                valueheading2="Favourite"
                value2={
                  <>
                    <span className="value">23</span>
                   
                  </>
                }
               
              />
            </div>
          </div>
          <div className="boxesContainer">
            <ContainerBox
              classname="white big-container-box"
              boxLogo={bag}
              iconBack="iconBack-orange"
              options={
                <select className="options" name="duration">
                  <option>All-time</option>
                  <option>Other</option>
                </select>
              }
              valueheading1="All Orders"
              value1={totalOrder}
              valueheading2="Pending"
              value2={
                <>
                  <span className="value">0</span>
                  {/* <span className="small-value">86%</span> */}
                </>
              }
              valueheading3="Completed"
              value3={completeItem}
            />
            <ContainerBox
              classname="white big-container-box"
              boxLogo={bag}
              iconBack="iconBack-orange"
              options={
                <select className="options" name="duration">
                  <option>All-time</option>
                  <option>Other</option>
                </select>
              }
              valueheading1="Canceled"
              value1="0"
              valueheading2="Returned"
              value2="0"
              valueheading3="Damaged"
              value3="0"
            />
          </div>
          <div className="section">
            <div className="main-section">
              <MainSectionHeader children="Purchases" />
              <OrderTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
