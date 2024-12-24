import "./Inventory.css";
import UpperNavbar from "../UpperNavbar/UpperNavbar";
import SideNavbar from "../SideNavbar/SideNavbar";
import Home from "../../images/Home.png";
import HeroSection from "../HeroSection/HeroSection";
import Button from "../Utility/Button/Button";
import ContainerBox from "../Utility/ContainerBox/ContainerBox";
import boxlogo from "../../images/Folder.png";
import userlogo from "../../images/2 User.png";
import MainSectionHeader from "../MainSectionHeader/MainSectionHeader";
import Table from "../Utility/Table/Table";
import { useContext } from "react";
import UserProgress from "../Store/UserProgressCtx";



export default function InventoryPage() {
const userProgressCtx = useContext(UserProgress);

const totalItem = userProgressCtx.itemsData.length;
const activeItem = userProgressCtx.itemsData.filter((obj) => obj.status === "Publish").length;
const lowStock = userProgressCtx.itemsData.filter((obj) => obj.inStock < 10).length;
const outStock = userProgressCtx.itemsData.filter((obj) => obj.inStock === "Out of Stock").length;
  
const activePercent =  (activeItem/totalItem)*100;

  return (
    <>
      <div className="homepage">
        <SideNavbar />
        <div className="main-content">
          <UpperNavbar />
          <div className="home-nav">
            <span className="home-icon">
              <img src={Home} alt="Home icon" />
            </span>
            <span className="home-caption">/</span>
            <span className="home-caption" onClick={userProgressCtx.handleCreateInventory}>
              <p>New Inventory</p>
            </span>
          </div>
          <HeroSection
            children1="Inventory Summary"
            children2={<Button onClick={userProgressCtx.handleCreateInventory} classname="blue">+ Add a New Project</Button>}
          />
          <div className="boxesContainer">
            <ContainerBox
              classname="blue big-container-box"
              boxLogo={boxlogo}
              iconBack="iconBack-blue"
              valueheading1="All Products"
              value1={totalItem}
              valueheading2="Active"
              value2={
                <>
                  <span className="value">{activeItem}</span>
                  <span className="small-value">{`${activePercent}%`}</span>
                </>
              }
            />
            <ContainerBox
              classname="white big-container-box"
              boxLogo={userlogo}
              iconBack="iconBack-orange"
              options={
                <select className="options" name="duration">
                  <option>This Week</option>
                  <option>Last Week</option>
                </select>
              }
              pClass="red"
              valueheading1="Low stock Alert"
              value1={lowStock}
              valueheading2="Expired"
              value2={outStock}
              valueheading3="1 Start Rating"
              value3="2"
            />
          </div>
          <div className="section">
            <div className="main-section">
              <MainSectionHeader children="Inventory Items" />
              <Table/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
