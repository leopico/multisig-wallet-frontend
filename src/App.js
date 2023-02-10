import "./App.css";
import MainRouters from "./MainRouters";
import { BrowserRouter } from "react-router-dom";
import { WalletContextProvider } from "./context/WalletContext";
import { FetchDataContextProvider } from "./context/FetchDataContext";
import { MessageContextProvider } from "./context/MessageContext";

function App() {
  return (
    <MessageContextProvider>
      <FetchDataContextProvider>
        <WalletContextProvider>
          <BrowserRouter>
            <MainRouters />
          </BrowserRouter>
        </WalletContextProvider>
      </FetchDataContextProvider>
    </MessageContextProvider>
  );
}

export default App;
