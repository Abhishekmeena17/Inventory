import './OrderTableData.css';
import boxImg from '../../../images/Controls.png';
import Button from "../Button/Button";
import { useContext } from "react";
import UserProgress from "../../Store/UserProgressCtx";


export default function OrderTableData({product}) {
    const userProgressCtx = useContext(UserProgress);

    function handlePreviewBtn() {
        userProgressCtx.handleDetailOrderDialog(product.id);
      }

    return(
        <>
      <tr>
        <td className="columns"><img src={boxImg} alt="Box icon"/></td>
        <td>{product.orderDate}</td>
        <td className="username">{product.orderType}</td>
        <td className="username">{product.unitPrice}</td>
        <td className="columns">{product.quantity}</td>
        <td className="username">{product.discount}</td>
        <td className="columns">{product.orderTotal}</td>
        <td className="status "><span className="status-border">{product.status}</span></td>
        <td className="details">
          <Button onClick={handlePreviewBtn} classname='blue'>Details</Button>
        </td>
      </tr>
    </>
    )
}