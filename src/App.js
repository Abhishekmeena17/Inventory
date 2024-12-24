import ManageDialog from "./components/ManageDialog";
import ManagePage from "./components/ManagePage";
import { UserProgressContextProvider } from "./components/Store/UserProgressCtx";


function App() {
  return (
    <div className="App">
    <UserProgressContextProvider>
     <ManagePage/>
     <ManageDialog/>
    </UserProgressContextProvider>
    </div>
  );
}

export default App;
