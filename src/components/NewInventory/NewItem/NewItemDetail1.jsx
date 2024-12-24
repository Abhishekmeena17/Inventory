import './NewItemDetail1.css';
import upArrow from "../../../images/Polygon1.png";
import downArrow from "../../../images/Polygon2.png";
import ToggleBtn from "../../Utility/ToggleBtn/ToggleBtn";
import { useState } from 'react';




export default function NewItemDetailRight() {
  const [view, setView] = useState(true);
  const [viewExpire, setViewExpire] = useState(true);

  function handleView() {
      view === false ? setView(true) : setView(false);
      
  }

  function handleViewExpire() {
    viewExpire === false ? setViewExpire(true) : setViewExpire(false);
    
}

    return(
        <>
            <div className="form from1">
                  <div className="input-field">
                    <input required
                      className="input"
                      name="name"
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="input-field">
                    <select required
                      style={{ color: "#8B8D97" }}
                      name="category"
                      className="input"
                    >
                      <option disabled defaultValue>
                        Select Product Category
                      </option>
                      <option>Gadgets</option>
                      <option>Fashion</option>
                    </select>
                  </div>
                  <div className="input-field prices">
                    <input required
                      className="small-input"
                      name="selling"
                      placeholder="Selling Price"
                    />
                    <input required
                      className="small-input"
                      name="cost"
                      placeholder="Cost Price"
                    />
                  </div>
                  <div className="input-field quantity">
                    <input required
                      className="input"
                      name="quantity"
                      placeholder="Quantity in Stock"
                    />
                    <div className="arrow">
                      <button>
                        <img src={upArrow} alt="arrow" />
                      </button>
                      <button>
                        <img src={downArrow} alt="arrow" />
                      </button>
                    </div>
                  </div>
                  <div className="input-field">
                    <select required
                      style={{ color: "#8B8D97" }}
                      name="Order"
                      className="input"
                    >
                      <option disabled defaultValue>
                        Order Type
                      </option>
                      <option>Cash On Delivery</option>
                      <option>Pre-Paid</option>
                    </select>
                  </div>
                  <div className="input-field toggle-button">
                    <span style={{ color: "#97989d" }}>Discount</span>
                    <div className="toggle">
                      <span>Add Discount</span>
                      <ToggleBtn onclick={handleView}/>
                    </div>
                  </div>
                  <div className={`input-field prices ${view ? "" : "hidden"} `}>
                    <select required
                      style={{ color: "#8B8D97" }}
                      name="discountType"
                      className="small-input"
                    >
                      <option disabled defaultValue>
                        Type
                      </option>
                      <option>Cash Discount</option>
                      <option>Free Shipping</option>
                    </select>
                    <input
                      className="small-input"
                      name="discountValue"
                      placeholder="value"
                    />
                  </div>
                  <div className="input-field toggle-button">
                    <span style={{ color: "#97989d" }}>Expiry Date</span>
                    <div className="toggle">
                      <span>Add Expiry Date</span>
                      <ToggleBtn onclick={handleViewExpire}/>
                    </div>
                  </div>
                  <div className={`input-field ${viewExpire ? "" : "hidden"}`}>
                    <input
                      style={{ color: "#97989d" }}
                      type="date"
                      className="input"
                      name="date"
                      placeholder="12/12/2020"
                    />
                  </div>
                </div>
        </>
    )
}