import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { UserPage } from "../pages/UserPage"
import { CreateUserPage } from "../pages/CreateUserPage"

export const RoutesMain = () => {


  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/user/:name" element={<UserPage />} />
      <Route path="/user/create" element={<CreateUserPage />} />
    </Routes>
  )
}