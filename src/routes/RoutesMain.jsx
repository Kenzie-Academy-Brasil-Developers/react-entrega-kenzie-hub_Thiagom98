import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { UserPage } from "../pages/UserPage"
import { CreateUserPage } from "../pages/CreateUserPage"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const RoutesMain = () => {

  return (
    <Routes>
      <Route element={<PublicRoutes/>}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user/create" element={<CreateUserPage />} />
      </Route>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/user" element={<UserPage />} />
      </Route>
    </Routes>  
  )
}