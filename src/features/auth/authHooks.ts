import { useMutation } from "@tanstack/react-query";
import { auth } from "./authController";
import toast from "react-hot-toast";

const useHandleLogin = function () {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data: { email: string; password: string }) => auth.login(data),
    onSuccess: () => {
      toast.success("Logged in successfully");
    },
    onError: (error) => {
      toast.error("Failed to login");
      console.error(error);
    },
  });

  return { login: mutate, isPending, isError };
};

export { useHandleLogin };
