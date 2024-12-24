import "./Table.css";
import boxImg from '../../../images/Controls.png';
import TableData from "../TableData/TableData";
import { useContext, useState } from "react";
import UserProgress from "../../Store/UserProgressCtx";

export default function Table() {
const userProgressCtx = useContext(UserProgress);
  const [paginationQty, setPaginationQty] = useState(6);
  const [items, setItems] = useState(userProgressCtx.itemsData.slice(0, 6));
  const [currentPage, setCurrentPage] = useState(1);

  function changePaginationQty(event) {
    const qty = event.target.value, pageNumber = 1;

    setPaginationQty(qty);
    setItems(userProgressCtx.itemsData.slice(pageNumber * qty - qty, pageNumber * qty));
    setCurrentPage(pageNumber);
  }

  function changePage(event, _pageNumber) {
    const pageNumber = _pageNumber || event.target.value;
    setCurrentPage(pageNumber);
    setItems(userProgressCtx.itemsData.slice(pageNumber * paginationQty - paginationQty, pageNumber * paginationQty));
  }

  return (
    <>
      <table className="main_table">
        <thead>
          <tr>
            <th className="table-head-box columns"><img src={boxImg} alt="Box icon" /></th>
            <th></th>
            <th>Product Name</th>
            <th className="username">Category</th>
            <th className="username">Unit Price</th>
            <th className="columns">In-Stock</th>
            <th className="username">Discount</th>
            <th className="columns">Total Value</th>
            <th className="columns">Action</th>
            <th className="status">Status</th>
            <th className="details">All Details</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user) => (
            <TableData key={user.id} user={user} />
          ))}

        </tbody>

      </table>

      <hr
        style={{ width: "100%", borderColor: "#f5f5f5" }}
      />
      <div style={{ display: "flex" , gap: "10px", justifyContent: "space-between" }} className="flex-column">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <select name="paginationQuantity" id="paginationQuantity" onChange={changePaginationQty}
            value={paginationQty}
            style={{ background: "#f2f3f3", borderRadius: "10px", color: "#8c8c8c", padding: "3px 5px" }}>
            {[...Array(Math.ceil(userProgressCtx.itemsData.length))].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <span style={{ color: "#b6b8c0" }}>
            Items per page
          </span>
          <span style={{ color: "#8c8c8c" }}>
            {currentPage * paginationQty - paginationQty + 1} - {currentPage * paginationQty > userProgressCtx.itemsData.length ? userProgressCtx.itemsData.length : currentPage * paginationQty} of {userProgressCtx.itemsData.length} items
          </span>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <select name="paginationQuantity" id="paginationQuantity" onChange={changePage}
            style={{ background: "#f2f3f3", borderRadius: "10px", color: "#8c8c8c", padding: "3px 5px" }}
            value={currentPage}
          >
            {[...Array(Math.ceil(userProgressCtx.itemsData.length / paginationQty))].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <span style={{ color: "#8c8c8c" }}>
            of {Math.ceil(userProgressCtx.itemsData.length / paginationQty)} pages
          </span>
          <span style={{ color: "#8c8c8c" }}>
            <button disabled={currentPage === 1} style={{ color: "#8c8c8c", border: "none", background: "none", cursor: "pointer" }}
              onClick={(event) => changePage(event, currentPage - 1)}>
              &lt;
            </button>
            <button disabled={currentPage === Math.ceil(userProgressCtx.itemsData.length / paginationQty)} 
            style={{ color: "#8c8c8c", border: "none", background: "none", cursor: "pointer" }}
              onClick={(event) => changePage(event, currentPage + 1)}>
              &gt;
            </button>
          </span>
        </div>


      </div>

    </>
  );
}
