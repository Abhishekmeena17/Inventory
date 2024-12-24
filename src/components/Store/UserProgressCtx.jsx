import { useState,createContext, } from "react"
import data from "../Data/Data";


const UserProgress = createContext({
    open: "",
    selector: "",
    userId: "",
    dialog: "",
    orderId: "",
    itemsData: "",
    setItemsData: "",
    handleCreateInventory: () => {},
    handleClose: () => {},
    handlePreview: () => {},
    handleMainPage: () => {},
    handleDataDialog: () => {},
    handleDetailOrderDialog: () => {},
})


export function UserProgressContextProvider({children}) {

    const [open, setOpen] = useState(false);
    const [preview, setPreview] = useState("inventory");
    const [userId, setUserId] = useState();
    const [dialog, setDialog] = useState();
    const [orderId, setOrderId] = useState();
    const [itemsData, setItemsData] = useState(data);
    

    
    function handleCreateInventory() {
      setPreview("createInventory");
      setDialog("");
      
    }

    function handleMainPage() {
        setPreview("inventory");
        setDialog("");
    }

  
    function handleClose() {
      setOpen(false);
      setDialog("");
    };

    function handlePreview() {
      setPreview("viewInventory");
      setDialog("");
      

    };

    function handleDataDialog(user) {
        setOpen(true);
        setUserId(user);
        setDialog("detailedData");
      };

      function handleDetailOrderDialog(user) {
        setOpen(true);
        setOrderId(user);
        setDialog("orderDetailed");
       
      };
    

    const userProgress = {
        open,
        selector: preview,
        userId,
        dialog,
        orderId,
        itemsData,
        setItemsData,
        handleCreateInventory,
        handleClose,
        handlePreview,
        handleMainPage,
        handleDataDialog,
        handleDetailOrderDialog
    };
   
    return(
        <UserProgress.Provider value={userProgress}>{children}</UserProgress.Provider>
    );
}

export default UserProgress;