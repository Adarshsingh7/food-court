import { databases, account, ID } from "../lib/appwrite";
import { LoginResposeType, ResponseType, UserType } from "../types/cartType";

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

export const logIn = async (data: { email: string, password: string }): Promise<LoginResposeType> => {
  try {
    const response = await account.createEmailPasswordSession(data.email, data.password);
    return {
      $id: response.$id,
      $createdAt: response.$createdAt,
      $updatedAt: response.$updatedAt,
      status: 'succuss',
      providerUid: response.providerUid,
      ip: response.ip,
      factors: response.factors,
      expire: response.expire,
      userId: response.userId,
      provider: response.provider,
      osCode: response.osCode,
      cleintName: response.clientName,
      secret: response.secret,
      deviceName: response.deviceName
    }
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const getCurrentUser = async (): Promise<UserType | undefined> => {
  try {
    const user = await account.get();
    // console.log("Current user:", user);
    return {
      $id: user.$id,
      $createdAt: user.$createdAt,
      $updatedAt: user.$updatedAt,
      name: user.name,
      email: user.email,
      status: user.status,
      emailVerification: user.emailVerification,
      phoneVerification: user.phoneVerification,
      phone: user.phone
    }
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

