import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp as signUpApi } from "../service/userController";
import { useNavigate } from "react-router-dom";

export function useSignup() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: signUp } = useMutation({
        mutationFn: signUpApi,
        onSuccess: (data) => {
            queryClient.setQueryData(['user'],data)
            navigate('/')
        },
        onError: error => {
            console.log(error.message)
        }
    })
    return { signUp }
}