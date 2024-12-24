import { useContext } from "react";
import UserProgress from "./Store/UserProgressCtx";
import DetailedData from "./HomePage/DetailedData";
import OrderDetailedData from "./ViewInventory/OrderDetailedData";

export default function ManageDialog() {
  const userProgressCtx =   useContext(UserProgress);

  if(userProgressCtx.dialog === "detailedData") {
    return(
        <DetailedData/>
       
    )
  }
  else if(userProgressCtx.dialog === "orderDetailed") {
    return(
        
        <OrderDetailedData/>
    )
  }

}