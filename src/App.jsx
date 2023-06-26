import { TechProvider } from "./providers/TechContext";
import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styles/global"
import { GlobalReset } from "./styles/reset"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {

  return (
    <>
      <UserProvider>
        <TechProvider>
          <GlobalStyle />
          <GlobalReset />
          <RoutesMain />
          <ToastContainer />
        </TechProvider>
      </UserProvider>
    </>
  )
}

export default App
