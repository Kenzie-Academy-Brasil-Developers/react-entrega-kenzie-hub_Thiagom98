
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styles/global"
import { GlobalReset } from "./styles/reset"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
      <GlobalStyle />
      <GlobalReset />
      <RoutesMain />
      <ToastContainer />
    </>
  )
}

export default App
