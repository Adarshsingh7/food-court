import { databases, account, ID } from "../lib/appwrite";

interface Response {
  status: string;
  error: boolean; 
  message: string;
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
}

export const signUp = async (data: {
  email: string;
  password: string;
  userName: string;
  phone: string;
  address: string;
  role: string;
}): Promise<Response> => {
  try {
    const user = await account.create(
      ID.unique(),
      data.email,
      data.password,
      data.userName,
    );
    await account.createEmailPasswordSession(data.email, data.password);

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
    console.error("Sign up failed:", error);
    // Ensure all fields are present even in the case of an error
    return {
      status: "error",
      error: true,
      message: "Sign up failed",
      $id: "",
      $collectionId: "",
      $databaseId: "",
      $createdAt: "",
      $updatedAt: "",
      $permissions: [],
    };
  }
};

export const logIn = async (email: string, password: string): Promise<void> => {
  try {
    const response = await account.createEmailPasswordSession(email, password);
    console.log("Login successful:", response);
  } catch (error) {
    console.error("Login failed:", error);
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

