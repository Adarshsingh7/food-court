import { ReactNode, useEffect } from "react"
import { useUser } from "../queries/useUser"
import { useNavigate } from "react-router-dom"

function ProtectedRoute({ children }: { children: ReactNode }) {
    const { user, isLoading } = useUser()
    const navigate = useNavigate()
    useEffect(() => {
        if(!user) navigate(-1)
    }, [user, navigate])
    if (isLoading) return <div>loading....</div>
    return children
}

export default ProtectedRoute
