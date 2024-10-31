import { FC, useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useHandleLogin, useIsAuthenticated } from "../features/auth/authHooks";
import BackdropLoader from "../components/BackdropLoader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface AuthFormProps {
  isSignup?: boolean;
  toggleSignin?: () => void;
}

const AuthForm: FC<AuthFormProps> = ({ isSignup, toggleSignin }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { login, isPending } = useHandleLogin();
  const { user } = useIsAuthenticated();
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    if (isSignup) {
      toast.error("Sign up is not available at the moment");
      return;
    }
    login({
      email: data.email,
      password: data.password,
    });
  };

  useEffect(() => {
    if (user) navigate("/dashboard/dashboard");
  }, [user, navigate]);

  if (isPending) return <BackdropLoader />;

  return (
    <div className="w-full p-8 lg:w-1/2">
      <p className="text-xl text-gray-600 text-center">
        {isSignup ? "Create an account" : "Welcome back!"}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>
        {isSignup && (
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="tel"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
        )}
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>
        {isSignup && (
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
        )}
        {!isSignup && (
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
          >
            Forget Password?
          </a>
        )}
        <div className="mt-8">
          <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </div>
      </form>
      <a
        href="#"
        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
        <div className="flex px-5 justify-center w-full py-3">
          <div className="min-w-[30px]">
            <FcGoogle className="h-6 w-6" />
          </div>
          <div className="flex w-full justify-center">
            <h1 className="whitespace-nowrap text-gray-600 font-bold">
              Sign in with Google
            </h1>
          </div>
        </div>
      </a>
      <div className="mt-4 flex items-center w-full text-center">
        <a
          href="#"
          className="text-xs text-gray-500 capitalize text-center w-full"
        >
          {isSignup
            ? "Already have an account?"
            : "Don't have any account yet?"}
          <span className="text-blue-700" onClick={toggleSignin}>
            {isSignup ? " Login" : " Sign Up"}
          </span>
        </a>
      </div>
    </div>
  );
};

const LoginWithGoogleButton: FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  function toggleSignin() {
    setIsSignup((current) => !current);
  }

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(/bean-salad.webp)`,
          }}
        ></div>
        <AuthForm isSignup={isSignup} toggleSignin={toggleSignin} />
      </div>
    </div>
  );
};

export default LoginWithGoogleButton;
