import "./OrderTable.css";
import boxImg from '../../../images/Controls.png';
import orderData from "../../Data/orderData";
import OrderTableData from "./OrderTableData";

export default function OrderTable() {
  return (
    <>
      <table className="main_table">
        <thead>
          <tr>
            <th className="table-head-box columns">
              <img src={boxImg} alt="Box icon" />
            </th>
            <th>Order Date</th>
            <th className="username">Order Type</th>
            <th className="username">Unit Price</th>
            <th className="columns">Oty</th>
            <th className="username">Discount</th>
            <th className="columns">Order Total</th>
            {/* <th className="columns">Action</th> */}
            <th className="status">Status</th>
            <th className="details">All Details</th>
          </tr>
        </thead>
        <tbody>
        {orderData.map((product) => (
            <OrderTableData key={product.id} product={product
            } />
          ))}
        </tbody>
      </table>
    </>
  );
}
