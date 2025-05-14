import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './Pages/Login'
import CustomNavbar from './Components/Navbar'
import EmailVerify from './Pages/EmailVerify'
import ResetPassword from './Pages/ResetPassword'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css'
import { AppProvider } from './context/AppContext'
import RegisterPage from './Pages/RegisterPage'
import ForgotPassword from './Pages/ForgotPassword'
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <div>
      <AppProvider>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify" element={<EmailVerify />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      </AppProvider>
    </div>
  )
}

export default App