import { useMutation } from "@tanstack/react-query";
import { logIn } from "../service/userController";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate()
    
    const { mutate: login } = useMutation({
        mutationFn: logIn,
        onSuccess: () => {
            navigate('/')
        },
        onError: error => {
            console.log(error)
        }

    })
    return { login }
}