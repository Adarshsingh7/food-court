import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { auth } from "./authController";
import toast from "react-hot-toast";
type User = ReturnType<typeof auth.isAuthenticated>;

interface Error {
  response: {
    data: {
      message: string;
    };
  };
}

// Hook for checking if the user is authenticated
const useIsAuthenticated = () => {
  const { data, refetch, isFetching, isError } = useQuery<User>({
    queryKey: ["user"],
    queryFn: () => auth.isAuthenticated(),
    staleTime: 1000 * 60 * 5,
  });

  return { user: data, refetch, isPending: isFetching, isError };
};

// Hook for logging in
const useHandleLogin = () => {
  const queryClient = useQueryClient();
  const { refetch } = useIsAuthenticated();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: auth.login,
    onSuccess: () => {
      toast.success("Logged in successfully");
      refetch();
      queryClient.invalidateQueries({ queryKey: ["user"] }); // Refresh the authentication query
    },
    onError: (error: Error) => {
      toast.error(error.response?.data.message);
    },
  });

  return { login: mutate, isPending, isError };
};

export { useHandleLogin, useIsAuthenticated };
