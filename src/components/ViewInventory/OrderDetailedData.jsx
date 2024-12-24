import './OrderDetailedData.css';
import { useContext } from "react";
import UserProgress from "../Store/UserProgressCtx.jsx";
import Modal from '../Utility/Modal/Modal';
import Button from '../Utility/Button/Button';
import orderData from '../Data/orderData';




export default function OrderDetailedData() {
    const userProgressCtx = useContext(UserProgress);

    let result = orderData.find(({id}) => id === userProgressCtx.orderId);
  
    if (result == null) {
        return null;
      } else {

    return(
        <Modal className="detailed"> 
        <div>
          <table>
            <tbody>
              {/* <tr>
                <th>Order Date</th>
                <td>{result.orderDate}</td>
              </tr> */}
              <tr>
                <th>Order Type</th>
                <td>{result.orderType}</td>
              </tr>
              <tr>
                <th>Unit Price</th>
                <td>{result.unitPrice}</td>
              </tr>
              <tr>
                <th>Quantity</th>
                <td>{result.quantity}</td>
              </tr>
              <tr>
                <th>Discount</th>
                <td>{result.discount}</td>
              </tr>
              <tr>
                <th>Order Total</th>
                <td>{result.orderTotal}</td>
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
    )
}
}