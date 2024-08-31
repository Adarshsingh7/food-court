import { useEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { signUp } from "../service/userController";


interface Response {
    status: string;
    $id: string;
    $collectionId: string;
    $databaseId: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: string[];
    error: boolean;
    message: string;
}

interface ActionData {
    error?: string;
    success?: boolean;
}

function Login() {
    const actionData = useActionData() as ActionData;
    const navigate = useNavigate();

    useEffect(() => {
        if (actionData?.success) {
            navigate("/");
        }
    }, [actionData, navigate]);

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <Form
                method="POST"
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
                            name="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="name@flowbite.com"
                            required
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
                            name="userName"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
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
                            name="phone"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
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
                            name="address"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
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
                            name="password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
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
                            name="confirmPassword"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                        />
                    </div>
                </div>
                <div className="block items-start mb-5">
                    <p>Select your role:</p>
                    <div className="mb-4 items-center h-5">
                        <select
                            className="w-full rounded-md p-3"
                            name="role"
                            id="role"
                            required
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
            </Form>
        </div>
    );
}


export const action = async ({ request }: { request: Request }) => {
    const data = Object.fromEntries(await request.formData());

    if (data.password !== data.confirmPassword) {
        return { error: "Entered password does not match" };
    }

    try {
        const res: Response = await signUp({
            email: data.email as string,
            userName: data.userName as string,
            phone: data.phone as string,
            address: data.address as string,
            role: data.role as string,
            password: data.password as string,
        });

        console.log(res);

        if (res.status === "success") {
            return { success: true };
        } else {
            return { error: res.error || "An unexpected error occurred" };
        }
    } catch (error) {
        console.error("Sign up failed:", error);
        return { error: "An unexpected error occurred" };
    }
};

export default Login;