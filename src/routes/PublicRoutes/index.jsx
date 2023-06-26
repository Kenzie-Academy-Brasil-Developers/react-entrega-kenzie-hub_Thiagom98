import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet } from "react-router-dom"

export const PublicRoutes = () => {
    const { userProfile } = useContext(UserContext)

    return !userProfile ? <Outlet/> : <Navigate to='/user'/>
}