import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSignup } from "../queries/useSignup";

interface DataType {
    email: string;
    password: string;
    confirmPassword: string;
    userName: string;
    phone: string;
    role: string;
    address: string;
}

function Signup() {
    const { register, handleSubmit } = useForm<DataType>()
    const { signUp } = useSignup()

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<DataType> = (data: DataType) => {
        const { password, confirmPassword } = data
        if (password !== confirmPassword) return
        setIsLoading(true)
        signUp(data)
        setIsLoading(false)
    }

    if (isLoading) return <div>loading .....</div>

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-between w-[33rem] mx-auto"
            >
                <div className="flex justify-between mx-4">
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="name@gamil.com"
                            {...register('email', {
                                required: 'this feils is required'
                            })}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="userName"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your name:
                        </label>
                        <input
                            type="text"
                            id="userName"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            {...register('userName', {
                                required: 'this feils is required'
                            })}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="mb-5">
                        <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            {...register('phone', {
                                required: 'this feils is required'
                            })}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="address"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            {...register('address', {
                                required: 'this feils is required'
                            })}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            {...register('password', {
                                required: 'this feils is required'
                            })}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="confirmPassword"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Repeat password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            {...register('confirmPassword', {
                                required: 'this feils is required'
                            })}
                        />
                    </div>
                </div>
                <div className="block items-start mb-5">
                    <p className="mb-3">Select your role:</p>
                    <div className="mb-4 items-center h-5">
                        <select
                            className="w-full rounded-md p-3"
                            id="role"
                            {...register('role', {
                                required: 'this feils is required'
                            })}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="flex items-start my-9">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                            />
                        </div>
                        <label
                            htmlFor="terms"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            I agree with the{" "}
                            <a
                                href="#"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                terms and conditions
                            </a>
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Register new account
                </button>
            </form>
        </div>
    );
}

export default Signup;