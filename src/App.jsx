import './App.css'
import RoutesPage from './routes'
import "./assets/scss/style.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer autoClose={5000}/>
    <RoutesPage />
    </>
  )
}

export default App
