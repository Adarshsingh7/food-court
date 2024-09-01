import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLogin } from "../queries/useLogin"
import { Link } from "react-router-dom"

interface LoginDataTye {
    email: string,
    password: string
    confirmPassword: string
}

function Login() {
    const { handleSubmit, register, formState: { errors }, getValues } = useForm<LoginDataTye>()
    const [Loading, setLoading] = useState(false)
    const { login } = useLogin()

    const onSubmit: SubmitHandler<LoginDataTye> = (data: LoginDataTye) => {
        const { password, confirmPassword } = data
        if (password !== confirmPassword) return
        try {
            setLoading(true)
            login({
                email: data.email,
                password: data.password
            })
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (Loading) return <div>loading....</div>

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@gmail.com"
                        {...register('email', {
                            required: 'This feild is required'
                        })}
                    />
                </div>
                <div className="w-full h-4">
                    {errors?.email?.message && <div className="relative bottom-3 text-rose-700 text-xs">{errors.email.message}</div>}
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type="password"
                        id="password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        {...register('password', {
                            required: 'This feild is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters'
                            }
                        })}
                    />
                </div>
                <div className="w-full h-4">
                    {errors?.password?.message && <div className="relative bottom-3 text-rose-700 text-xs">{errors.password.message}</div>}
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        {...register('confirmPassword', {
                            required: 'This feild is required',
                            validate: (value) => value === getValues().password || 'Passwords do not match'
                        })}
                    />
                </div>
                <div className="w-full h-4">
                    {errors?.confirmPassword?.message && <div className="relative bottom-3 text-rose-700 text-xs">{errors.confirmPassword.message}</div>}
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input
                            id="terms"
                            type="checkbox"
                            value="agree"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                        />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <div className="flex">
                    <span className="mb-4">Don't have an account? </span>
                    <Link className="ml-2 text-blue-600" to='/Signup'>Signup</Link>
                </div>
                <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </form>
        </div>
    )
}

export default Login
