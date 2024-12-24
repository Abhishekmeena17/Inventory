import "./TableData.css";
import boxImg from "../../../images/Controls.png";
import Button from "../Button/Button";
import { useContext } from "react";
import UserProgress from "../../Store/UserProgressCtx";

export default function TableData({ user }) {
  const userProgressCtx = useContext(UserProgress);

  function handlePreviewBtn() {
    userProgressCtx.handleDataDialog(user.id);
  }
 
  return (
    <>
      <tr>
        <td className="columns">
          <img src={boxImg} alt="Box icon" />
        </td>
        <td>{user.image}</td>
        <td>{user.productName}</td>
        <td className="username">{user.category}</td>
        <td className="username">{user.unitPrice}</td>
        <td className="columns">{user.inStock}</td>
        <td className="username">{user.discount}</td>
        <td className="columns">{user.totalValue}</td>
        <td className="columns">{user.action}</td>
        <td className="status ">
          <span
            className={`status-border ${
              user.status === "Publish" ? "publish-blue" : "iconBack-orange"
            }`}
          >
            {user.status}
          </span>
        </td>
        <td className="details">
          <Button onClick={handlePreviewBtn} classname="blue">
            Details
          </Button>
        </td>
      </tr>
    </>
  );
}
