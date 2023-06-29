import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

    const { token } = useSelector((store) => store.userInfo)

    if (token) {
        return <Outlet />
    } else {
        return <Navigate to='/login'/>
    }
}
export default ProtectedRoutes