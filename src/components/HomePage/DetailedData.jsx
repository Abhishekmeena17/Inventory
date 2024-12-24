import "./DetailedData.css";
import { useContext } from "react";

import Button from "../Utility/Button/Button.jsx";
import UserProgress from "../Store/UserProgressCtx.jsx";
import Modal from "../Utility/Modal/Modal.jsx";


export default function DetailedData() {
  const userProgressCtx = useContext(UserProgress);



  let result = userProgressCtx.itemsData.find(({ id }) => id === userProgressCtx.userId);

  if (result == null) {
    return null;
  } else {
    return (
      <Modal className="detailed">
        <div className="detailed-data">
          <div className="detailed-data-img">
            {result.image}
          </div>
          <p className="name">{`Product Name : ${result.productName} `}</p>
        </div>  
        <div>
          <table>
            <tbody>
              <tr>
                <th>Category</th>
                <td>{result.category}</td>
              </tr>
              <tr>
                <th>Unit Price</th>
                <td>{result.unitPrice}</td>
              </tr>
              <tr>
                <th>In Stock</th>
                <td>{result.inStock}</td>
              </tr>
              <tr>
                <th>Discount</th>
                <td>{result.discount}</td>
              </tr>
              <tr>
                <th>Total Value</th>
                <td>{result.totalValue}</td>
              </tr>
              <tr>
                <th>Action</th>
                <td>{result.action}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{result.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{marginTop: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Button classname="red" onClick={userProgressCtx.handleClose}>
          Close
        </Button>
        </div>
      </Modal>
    );
  }
}
