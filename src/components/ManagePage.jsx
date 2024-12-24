import { useContext } from "react";
import UserProgress from "./Store/UserProgressCtx";
import NewInventory from "./NewInventory/NewInventory";
import InventoryPage from "./HomePage/Inventory";
import ViewInventory from "./ViewInventory/ViewInventory";


export default function ManagePage() {
 const userprogressCtx = useContext(UserProgress);
 

 if(userprogressCtx.selector === "createInventory") {
    return(
        <NewInventory/>
    )
 }

 else if(userprogressCtx.selector === "inventory"){
    return(
        <InventoryPage/>
    )
 }

 else if(userprogressCtx.selector === "viewInventory"){
    return(
        <ViewInventory/>
    )
 }
       
}