import { databases, account, ID } from "../lib/appwrite";
import { ResponseType } from "../types/cartType";

export const signUp = async (data: {
  email: string;
  password: string;
  userName: string;
  phone: string;
  address: string;
  role: string;
}): Promise<ResponseType> => {
  try {
    const user = await account.create(
      ID.unique(),
      data.email,
      data.password,
      data.userName,
    );

    const sessionData = await account.createEmailPasswordSession(data.email, data.password);
    // account.client.config.session = sessionData.$id
    console.log(sessionData)
    const res = await databases.createDocument(
      "66d2783a00162bcb82a6",
      "66d2785e00363e3bae0f",
      user.$id,
      {
        userId: user.$id,
        Phone: data.phone,
        address: data.address,
        role: data.role,
      },
    );

    // Ensure the `res` object matches the `Response` interface
    return {
      ...res,
      status: "success",
      error: false,
      message: "User created successfully",
    };
  } catch (error) {
    console.error(error);
    throw new Error('Sign up failed')
  }
};

export const logIn = async (data: {email: string, password: string}): Promise<void> => {
  try {
    const response = await account.createEmailPasswordSession(data.email, data.password);
    // account.client.config.session = response.$id
    console.log("Login successful:", response);
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const getCurrentUser = async (): Promise<void> => {
  try {
    const user = await account.get();
    console.log("Current user:", user);
  } catch (error) {
    console.error("Failed to get current user:", error);
  }
};

export const logOut = async (): Promise<void> => {
  try {
    await account.deleteSession("current");
    console.log("Logged out successfully");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

